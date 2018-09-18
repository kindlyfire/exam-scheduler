
from pyschedule import Scenario, solvers, plotters, alt
import matplotlib, yaml

DAYS = 7

def run(scen):
    if solvers.mip.solve(scen, msg=1):
        print(scen.solution())
        plotters.matplotlib.plot(scen)
    else:
        print('no solution exist')

def transform_classes(config):
    classes = {}

    for k, v in config['classes'].items():
        classes[k] = courses = []
        
        for course_bundle_id in v:
            bundle = config['course_bundles'][course_bundle_id]
            for cls in bundle:
                if cls.startswith('!') and cls.replace('!', '') in courses:
                    courses.remove(cls.replace('!', ''))

            courses += [i for i in bundle if not i.startswith('!')]

    return classes

config = yaml.load(open('config.yml', 'r'))
config['tclasses'] = transform_classes(config)

scen = Scenario('Schedule', horizon=(DAYS * 5))

# Will be created when needed
teachers = {}

classes = {}
for cls, _ in config['tclasses'].items():
    classes[cls] = scen.Resource(cls)

courses = {}
for course, info in config['courses'].items():
    courses[course] = task = scen.Task(course, info[1])

    if info[1] == 4:
        task.periods = [x for x in range(0, DAYS * 5) if x % 5 == 0]
    elif info[1] == 2:
        task.periods = [x for x in range(0, DAYS * 5) if x % 5 == 0]
        task.periods += [x + 2 for x in range(0, DAYS * 5) if x % 5 == 0]

    for teacher in info[0].split('|'):
        if (not teacher in teachers):
            teachers[teacher] = scen.Resource(teacher.replace(' ', '_'))
            # print("  - " + teacher)
        task += teachers[teacher]
    
    for cls, cls_courses in config['tclasses'].items():
        if course in cls_courses:
            task += classes[cls]

run(scen)