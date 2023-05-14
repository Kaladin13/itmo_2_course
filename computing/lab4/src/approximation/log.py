from math import log

from src.approximation.line import line_approximation
from src.approximation.tools.standart_deviation import variance, standard_deviation


def log_approximation(points):
    n = len(points)
    x = [point[0] for point in points]

    if not all(point[0] >= 0 for point in points):
        return None

    y = [point[1] for point in points]

    lin_x = [log(xi) for xi in x]
    result_values = line_approximation([(lin_x[i], y[i]) for i in range(n)])

    a = result_values['a']
    b = result_values['b']

    result = {'a': a, 'b': b}

    f = lambda i: a * log(i) + b

    result['function'] = f

    result['string_function'] = f"{round(a, 3)}*ln(x) + {round(b, 3)}"
    result['variance'] = variance(points, f)

    result['standard_deviation'] = standard_deviation(points, f)

    return result
