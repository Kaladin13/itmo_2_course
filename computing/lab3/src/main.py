import numpy as np
import matplotlib.pyplot as plt

from input import read_equation_console
from input import read_interval_console
from input import read_epsilon_console
from input import read_method

from interals_counting.trapeze_method import calculate_integral_trapeze_method
from interals_counting.rectangles_method import calculate_integral_rectangles_method
from interals_counting.simpson_method import calculate_integral_simpson_method

equation = read_equation_console()
start, stop = read_interval_console()
epsilon = read_epsilon_console()

match read_method():
    case 1:
        calculate_integral_trapeze_method(equation, start, stop, epsilon)
    case 2:
        calculate_integral_rectangles_method(equation, start, stop, epsilon)
    case 3:
        calculate_integral_simpson_method(equation, start, stop, epsilon)
    case _:
        print("Error with choosing method!")

plt.plot([i for i in np.arange(start, stop, epsilon / 2)], [equation(i) for i in np.arange(start, stop, epsilon / 2)])
plt.title(f"integral in [{start},{stop}]")
plt.show()

exit(0)
