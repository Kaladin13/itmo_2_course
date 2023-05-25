def lagrange_interpolation(x, y, point):
    result = 0

    n = len(x)
    for i in range(n):
        c1 = c2 = 1
        for j in range(n):
            if i != j:
                c1 *= point - x[j]
                c2 *= x[i] - x[j]
        result += y[i] * c1 / c2

    return result