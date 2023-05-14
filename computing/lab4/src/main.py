import sys

from input_data import read_data
from approximation.exp import exp_approximation
from approximation.line import line_approximation
from approximation.log import log_approximation
from approximation.power import power_approximation
from approximation.square import square_approximation
from approximation.cube import cube_approximation
from plot import plot_results


def print_results(results):
    print("Results for whole methods")
    for key in results:
        if key != 'function':
            print(f'{key} = {results[key]}')


def print_best(results):
    min_val = float('inf')

    best = None
    for key in results:
        value = results[key]
        if min_val > value['standard_deviation']:
            min_val = value.get('standard_deviation')
            best = key

        print(f"standard_deviation({key}) =", (value.get('standard_deviation')))

    print(f"Best method is {best} with standard_deviation {results[best].get('standard_deviation')}\n")

    for key in results[best]:
        print(f"{key} = {results[best].get(key)}")


def sort_data(data):
    data['dots'].sort(key=lambda tup: tup[1])
    return data


def check_results_not_none(results):
    fail_list = []
    for key in results:
        if results[key] is None:
            fail_list.append(key)

    for key in fail_list:
        results.pop(key)


def main():
    data = sort_data(read_data())
    points = data['dots']

    results = {'exp': exp_approximation(points), 'line': line_approximation(points), 'log': log_approximation(points),
               'power': power_approximation(points), 'square': square_approximation(points),
               'cube': cube_approximation(points)}

    check_results_not_none(results)

    print_results(results)

    print_best(results)

    plot_results(data, results)

    sys.exit(0)


main()
