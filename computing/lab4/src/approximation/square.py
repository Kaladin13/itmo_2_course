from src.approximation.tools.matrix import solve_matrix
from src.approximation.tools.standart_deviation import variance, standard_deviation


def square_approximation(points):
    n = len(points)

    x = [dot[0] for dot in points]
    y = [dot[1] for dot in points]

    sum_x = sum(x)
    sum_x2 = sum([xi ** 2 for xi in x])
    sum_x3 = sum([xi ** 3 for xi in x])
    sum_x4 = sum([xi ** 4 for xi in x])

    sum_y = sum(y)

    sum_xy = sum([x[i] * y[i] for i in range(n)])
    sum_x2y = sum([(x[i] ** 2) * y[i] for i in range(n)])

    matrix = [[n, sum_x, sum_x2, sum_y],
              [sum_x, sum_x2, sum_x3, sum_xy],
              [sum_x2, sum_x3, sum_x4, sum_x2y]]

    r = solve_matrix(matrix)

    result = {'a_0': r[0], 'a_1': r[1], 'a_2': r[2]}

    f = lambda i: r[2] * (i ** 2) + r[1] * i + r[0]

    result['function'] = f
    result['string_function'] = f"{round(r[2], 3)}x^2 + {round(r[1], 3)}*x + {round(r[0], 3)}"

    result['variance'] = variance(points, f)
    result['standard_deviation'] = standard_deviation(points, f)

    return result
