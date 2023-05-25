from operator import ne
import matplotlib.pyplot as plt

def show_input_data(x, y):
    fig = plt.figure()
    fig.suptitle('input data', fontsize=20)
    plt.xlabel('x', fontsize=16)
    plt.ylabel('y', fontsize=16)
    fig.savefig('interpolation_input_data.png')
    plt.plot(x, y, label="input data")
    plt.legend()
    plt.show()

def plot_result(x, y, point, result):
    fig = plt.figure()
    fig.suptitle('interpolation result', fontsize=20)
    plt.xlabel('x', fontsize=16)
    plt.ylabel('y', fontsize=16)
    fig.savefig('interpolation_result.png')
    plt.plot([point] , [result], marker="o", label="interpolation result") #marker circle
    plt.plot(x, y, marker=".", label="input data") #marker point
    plt.legend()
    plt.show()

def plot_both_results(x, y, point,  lagrange, newton):
    fig = plt.figure()
    fig.suptitle('interpolation result', fontsize=20)
    plt.xlabel('x', fontsize=16)
    plt.ylabel('y', fontsize=16)
    plt.scatter([point] , [lagrange], marker="o", label=f"lagrange interpolation result ({round(lagrange, 5)})") #marker circle
    plt.scatter([point] , [newton], marker="o", label=f"newton interpolation result ({round(newton, 5)})") #marker circle
    plt.plot(x, y, marker=".", label="input data") #marker point
    plt.legend()
    plt.show()