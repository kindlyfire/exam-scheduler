
from pyschedule import Scenario, solvers, plotters, alt
import matplotlib, yaml
from deepmerge import Merger

merger = Merger(
    # pass in a list of tuple, with the
    # strategies you are looking to apply
    # to each type.
    [
        (list, ["append"]),
        (dict, ["merge"])
    ],
    # next, choose the fallback strategies,
    # applied to all other types:
    ["override"],
    # finally, choose the strategies in
    # the case where the types conflict:
    ["override"]
)

DAYS = 7

def run(scen):

    if solvers.mip.solve(scen, msg=1):
        print(scen.solution())
        plotters.matplotlib.plot(scen, img_filename='out.png', fig_size=(len(config['tclasses']), DAYS * 2))
    else:
        print('no solution exist')

def transform_classes(config):
    classes = {}

    for k, v in config['classes'].items():
        classes[k] = courses = []
        
        for course_bundle_id in v:
            if course_bundle_id in config['course_bundles']:
                bundle = config['course_bundles'][course_bundle_id]
                for cls in bundle:
                    if cls.startswith('!') and cls.replace('!', '') in courses:
                        courses.remove(cls.replace('!', ''))

                courses += [i for i in bundle if not i.startswith('!')]

    return classes

config = {}
config_files = [
    'config_1',
    'config_2',
    'config_3',
    'config_6'
]

for c in config_files:
    merger.merge(config, yaml.load(open('configs/%s.yml' % (c,), 'r')))

config['tclasses'] = transform_classes(config)
config['blocks'] = config['blocks'] if 'blocks' in config else {}

scen = Scenario('Schedule', horizon=(DAYS * 5))

# Will be created when needed
teachers = {}

classes = {}
for cls, _ in config['tclasses'].items():
    classes[cls] = scen.Resource(cls)

courses = {}
for course, info in config['courses'].items():
    if isinstance(info, list):
        info = {
            "profs": [info[0]],
            "length": info[1]
        }

    courses[course] = task = scen.Task(course, info["length"])

    if info["length"] == 4:
        task.periods = [x for x in range(0, DAYS * 5) if x % 5 == 0]
    elif info["length"] == 2:
        task.periods = [x for x in range(0, DAYS * 5) if x % 5 == 0]
        task.periods += [x + 2 for x in range(0, DAYS * 5) if x % 5 == 0]

    for teacher in info["profs"]:
        if (not teacher in teachers):
            teachers[teacher] = scen.Resource(teacher.replace(' ', '_'))
            # print("  - " + teacher)
        task += teachers[teacher]
    
    for cls, cls_courses in config['tclasses'].items():
        if course in cls_courses:
            task += classes[cls]

i = 0
blocks = {}
for block in config["blocks"]:
    i += 1
    blocks["block_" + str(i)] = task = scen.Task("block_" + str(i), block["length"])
    task.periods = [block["day"] * 5 - 5 + block["start_at"]]
    task.plot_color = '#000000'
    
    for cl in block["classes"]:
        task += classes[cl]

run(scen)