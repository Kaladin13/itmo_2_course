from get_data import get_data
from newton import newton_interpolation
from lagrange import lagrange_interpolation
from plot import plot_result
from plot import plot_both_results


def main():
    data, method, point = get_data()
    x = data["x"]
    y = data["y"]
    
    match method:
        case "newton":
            result = newton_interpolation(x, y, point)
            print("f(x)=",result)
            plot_result(x, y, point, result)
        case "lagrange":
            result = lagrange_interpolation(x, y, point)
            print("f(x)=",result)
            plot_result(x, y, point, result)
        case "both":
            lagrange = lagrange_interpolation(x, y, point)
            newton = lagrange_interpolation(x, y, point)
            print("l(x)=", lagrange)
            print("N(x)=", newton)
            plot_both_results(x, y, point, lagrange, newton)
        case _:
            print("Error in getting data from user!")
    

main()