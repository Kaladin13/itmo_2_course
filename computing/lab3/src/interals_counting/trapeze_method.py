import math
from scipy.misc import derivative
import numpy as np

from src.interals_counting.abstract_integral_rune_check import count_abstract_integral_rune_check


def calculate_integral_trapeze_method(f, a, b, e):
    result_formula = lambda h: (sum([f(i) for i in np.arange(a + h, b, h)]) + (f(a) + f(b)) / 2) * h

    integral, num_of_intervals = count_abstract_integral_rune_check(result_formula, a, b, e * 3)

    print(f"trapeze integral={integral}, where num of inerval was={num_of_intervals}")


def count_num_of_intervals(f, a, b, e):
    return math.sqrt(find_max_snd_derivative(f, a, b) * (b - a) ** 3 / (12 * e))


def find_max_snd_derivative(f, a, b):
    max = derivative(f, a, n=2)
    for i in np.arange(a, b, 0.01):
        if derivative(f, i, n=2) > max:
            max = derivative(f, i, n=2)
    return round(max) + 1
