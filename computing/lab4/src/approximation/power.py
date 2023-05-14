from math import log, exp

from src.approximation.line import line_approximation
from src.approximation.tools.standart_deviation import variance, standard_deviation


def power_approximation(points):
    n = len(points)
    if not all(point[0] >= 0 and point[1] >= 0 for point in points): return None

    x = [point[0] for point in points]
    y = [point[1] for point in points]

    lin_x = [log(x[i]) for i in range(n)]

    lin_y = [log(y[i]) for i in range(n)]

    result_values = line_approximation([(lin_x[i], lin_y[i]) for i in range(n)])

    a = exp(result_values['b'])
    b = result_values['a']

    result = {'a': a, 'b': b}

    f = lambda i: a * (i ** b)

    result['function'] = f

    result['string_function'] = f"{round(a, 3)}*x^{round(b, 3)}"

    result['variance'] = variance(points, f)

    result['standard_deviation'] = standard_deviation(points, f)

    return result
