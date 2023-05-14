from src.interals_counting.abstract_integral_rune_check import count_abstract_integral_rune_check


def calculate_integral_simpson_method(f, a, b, e):
    result_formula = lambda h: simpson_formula(h, a, b, f)

    result, num_of_intervals = count_abstract_integral_rune_check(result_formula, a, b, e * 15)
    print(f"simpson integral={result}, while the number of intervals was={num_of_intervals}")


def simpson_formula(h, a, b, f):
    result = f(a) + f(b)
    n = int((b - a) / h)
    x = a + h
    for i in range(n - 1):
        if i % 2 == 0:
            result += 4 * f(x)
        else:
            result += 2 * f(x)
        x += h
    result *= h / 3
    return result
