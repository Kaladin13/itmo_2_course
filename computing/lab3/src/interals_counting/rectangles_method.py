import math
from scipy.misc import derivative
import numpy as np

from src.interals_counting.abstract_integral_rune_check import count_abstract_integral_rune_check


def calculate_integral_rectangles_method(f, a, b, e):
    result_start, num_of_intervals_start = count_integral_start(f, a, b, e)
    result_middle, num_of_intervals_middle = count_integral_middle(f, a, b, e)
    result_stop, num_of_intervals_stop = count_integral_stop(f, a, b, e)

    print(f"rectangles start integral={result_start}, with num of intervals={num_of_intervals_start}")
    print(f"rectangles middle integral={result_middle}, with num of intervals={num_of_intervals_middle}")
    print(f"rectangles stop integral={result_stop}, with num of intervals={num_of_intervals_stop}")


def count_integral_start(f, a, b, e):
    result_start = lambda h: sum([f(i) for i in np.arange(a, b - h, h)]) * h
    return count_abstract_integral_rune_check(result_start, a, b, e * 3)


def count_integral_middle(f, a, b, e):
    result_start = lambda h: sum([f(i) for i in np.arange(a + h / 2, b, h)]) * h
    return count_abstract_integral_rune_check(result_start, a, b, e * 3)


def count_integral_stop(f, a, b, e):
    result_start = lambda h: sum([f(i) for i in np.arange(a + h, b, h)]) * h
    return count_abstract_integral_rune_check(result_start, a, b, e * 3)


def count_num_of_intervals(f, a, b, e):
    return math.sqrt(find_max_snd_derivative(f, a, b) * (b - a) ** 3 / (12 * e))


def find_max_snd_derivative(f, a, b):
    max_val = derivative(f, a, n=2)

    for i in np.arange(a, b, 0.01):
        if derivative(f, i, n=2) > max_val:
            max_val = derivative(f, i, n=2)

    return round(max_val) + 1
