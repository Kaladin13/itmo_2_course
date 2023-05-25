from math import factorial
import pandas as pd


def newton_interpolation(x, y, point):
    if check_h_is_const(x):
        result = newton_const_h(x, y, point)
    else:
        result = newton_not_const_h(x, y, point)
    return result


def print_fd(fd):
    df = pd.DataFrame(fd)
    print(df.to_latex())


# ----------------- CONST H ------------------
def newton_const_h(x, y, point):
    n = len(x)
    h = abs(x[1] - x[0])
    finite_differences = count_finite_differences_const_h(x, y)
    # print_fd(finite_differences)
    if point <= x[n // 2]:  # if point is closer to beginning we use FIRST Formula (forward)
        # print("forward")
        x0 = search_for_x0(x, point)
        t = (point - x[x0]) / h

        result = finite_differences[x0][0]
        for i in range(1, n):
            result += (t_forward(t, i) * finite_differences[x0][i]) / factorial(i)
    else:  # if point is closer to beginning we use SECOND Formula (back)
        # print("back")
        t = (point - x[n - 1]) / h

        result = finite_differences[n - 1][0]
        # print(finite_differences[n - 1][0])
        for i in range(1, n):
            result += (t_back(t, i) * finite_differences[n - i - 1][i]) / factorial(i)
            # print(f"{round(t_back(t, i), 3)} * {round(finite_differences[n - i - 1][i], 3)} / {factorial(i)}")

    return result


def count_finite_differences_const_h(x, y):
    n = len(x)
    finite_differences = [[0] * n for _ in range(n)]
    for i in range(n):
        finite_differences[i][0] = y[i]

    k = 1
    while k <= n:
        for i in range(n - k):
            finite_differences[i][k] = finite_differences[i + 1][k - 1] - finite_differences[i][k - 1]
        k += 1
    return finite_differences


def t_forward(t_0, i):
    t = t_0
    for j in range(1, i):
        t *= t_0 - j
    return t


def t_back(t_0, i):
    t = t_0
    for j in range(1, i):
        t *= t_0 + j
    return t


def search_for_x0(x, point):
    n = len(x)
    x0 = n - 1
    for i in range(n):
        if point <= x[i]:
            x0 = i - 1
            break
    if x0 < 0:
        x0 = 0
    return x0


# ----------------- NOT CONST H ------------------
def newton_not_const_h(x, y, point):
    n = len(x)
    finite_differences = count_finite_differences_not_const_h(x, y)
    [print(finite_differences[i]) for i in range(n)]  # removeme
    # f(x_0) + sum_{k=1}^n f(x_0, x_1, ... x_k) * \prod_{i = 0}^{k-1}(x-x_i)
    return y[0] + sum([finite_differences[0][k] * sum([point - x[i] for i in range(k - 1)]) for k in range(n)])


def count_finite_differences_not_const_h(x, y):
    n = len(x)
    finite_differences = [[0] * n for _ in range(n)]
    print()
    for i in range(n):
        finite_differences[i][0] = y[i]
    k = 1
    while k <= n:
        for i in range(n - k):
            finite_differences[i][k] = (finite_differences[i + 1][k - 1] - finite_differences[i][k - 1]) / (
                        x[i + k] - x[i])
        k += 1
    return finite_differences


# Method to check if we work with data with equally spaced nodes or not
def check_h_is_const(x):
    h = abs(x[1] - x[0])
    e = 0.0001  # verification accuracy
    for i in range(len(x) - 1):
        if abs(abs(x[i + 1] - x[i]) - h) > e:
            return False
    return True
