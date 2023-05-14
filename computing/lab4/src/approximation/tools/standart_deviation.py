from math import sqrt


def variance(points, f):
    n = len(points)

    x = [dot[0] for dot in points]
    y = [dot[1] for dot in points]

    return sum([(f(x[i]) - y[i]) ** 2 for i in range(n)])


def standard_deviation(points, f):
    n = len(points)
    return sqrt(variance(points, f) / n)
