from plot import show_input_data
from math import sin

def get_data():
    print("How you would like to enter data?")
    print("1 ----------------- table")
    print("2 ----------------- choose function")
    while True:
        try:
            choose_data_method = int(input())

            match (choose_data_method):
                case 1:
                    data = read_table()
                    break
                case 2:
                    data = choose_function()
                    break
                case _:
                    print("Enter your choice again!")
        except ValueError:
            print("Value has be integer! Try again from new line...")

    data.sort()
    print(f"Entered data:", data)
    x = [i[0] for i in data]
    y = [i[1] for i in data]
    data = {}
    data["x"] = x
    data["y"] = y
    show_input_data(x, y)


    print("Choose interpolation method:")
    print("1 ----------------- Newton")
    print("2 ----------------- Lagrange")
    print("3 ----------------- both")
    while True:
        try:
            choose_data_method = int(input())
            match (choose_data_method):
                case 1:
                    method =  "newton"
                    break
                case 2:
                    method = "lagrange"
                    break
                case 3:
                    method = "both"
                    break
                case _:
                    print("Enter your choice again!")
        except ValueError:
            print("Value has be integer! Try again from new line...")

    print("Enter point to interpolate:")
    while True:
        try:
            point = float(input())
            if point < x[0] or point > x[len(x) - 1]:
                print("Point has to be > x_min and < x_max. Try again from new line..")
            else:
                break
        except ValueError:
            print("Value has be float! Try again from new line...")

    return data, method, point


def read_table():
    print("Enter points like this:")
    print("x_1 y_1")
    print("x_2 y_2")
    print("...")
    print("Type '#' to finish.")
    data = []
    line = input()
    while line != "#":
        try:
            values = line.strip().split()
            if(len(values) == 2):
                data.append((float(values[0]), float(values[1])))
            else:
                print("Wrong format! Try again from new line...")
            line = input()
        except ValueError:
            print("Both values has be float! Try again from new line...")  
            line = input()      
    return data

def choose_function():
    print("Choose function:")
    print("1 ----------------- x^2")
    print("2 ----------------- 1/x")
    print("3 ----------------- sin(x)")
    while True:
        try:
            choose_data_method = int(input())
            match (choose_data_method):
                case 1:
                    f =  lambda x : x**2
                    break
                case 2:
                    f = lambda x : 1 / x
                    break
                case 3:
                    f = lambda x : sin(x)
                    break
                case _:
                    print("Enter your choice again!")
        except ValueError:
            print("Value has be integer! Try again from new line...")
       
    print("Enter segment's bounds (enter the values separated by a space):")
    while True:
        try:
            values = input().strip().split()
            if(len(values) == 2):
                bounds = (float(values[0]), float(values[1]))
                break
            else:
                print("Wrong format! Try again from new line...")
        except ValueError:
            print("Both values has be float! Try again from new line...")
        
    print("Select the number of interpolation nodes:")
    while True:
        try:
            n = int(input())
            if n < 2:
                print("Number of interpolation nodes has to be greater than 2! Try again from new line..")
            else:
                break
        except ValueError:
            print("Value has be integer! Try again from new line...")
       
    h = abs(bounds[1] - bounds[0])/n
    data = []
    [data.append((bounds[0] + h*i, f(bounds[0] + h*i))) for i in range(n)]
    return data