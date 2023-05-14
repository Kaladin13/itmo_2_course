from math import sqrt

from src.approximation.tools.matrix import solve_matrix
from src.approximation.tools.standart_deviation import variance, standard_deviation


def line_approximation(points):
    n = len(points)

    x = [point[0] for point in points]
    y = [point[1] for point in points]

    sum_x = sum(x)
    sum_x2 = sum([xi ** 2 for xi in x])

    sum_y = sum(y)
    sum_xy = sum([x[i] * y[i] for i in range(n)])

    matrix = [[sum_x2, sum_x, sum_xy],
              [sum_x, n, sum_y]]
    r = solve_matrix(matrix)
    a = r[1]
    b = r[0]

    result = {'a': a, 'b': b}

    f = lambda x: a * x + b

    result['function'] = f
    result['string_function'] = f"{round(a, 3)}x + {round(b, 3)}"
    result['variance'] = variance(points, f)
    result['standard_deviation'] = standard_deviation(points, f)

    mean_x = sum_x / n
    mean_y = sum_y / n

    sum_xy = sum([(point[0] - mean_x) * (point[1] - mean_y) for point in points])

    sum_x = sum([(xi - mean_y) ** 2 for xi in x])
    sum_y = sum([(yi - mean_y) ** 2 for yi in y])

    result['pirson'] = sum_xy / sqrt(sum_x * sum_y)

    return result
