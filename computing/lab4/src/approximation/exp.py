from math import log, exp

from src.approximation.line import line_approximation
from src.approximation.tools.standart_deviation import variance, standard_deviation


def exp_approximation(points):
    n = len(points)

    x = [point[0] for point in points]
    y = [point[1] for point in points]

    if not all(point[1] >= 0 for point in points):
        return None

    lin_y = [log(y[i]) for i in range(n)]

    r = line_approximation([(x[i], lin_y[i]) for i in range(n)])

    a = exp(r['b'])
    b = r['a']

    result = {'a': a, 'b': b}

    f = lambda i: a * exp(b * i)

    result['function'] = f
    result['string_function'] = f"{round(a, 3)}*e^({round(b, 3)}*x)"

    result['variance'] = variance(points, f)
    result['standard_deviation'] = standard_deviation(points, f)

    return result
