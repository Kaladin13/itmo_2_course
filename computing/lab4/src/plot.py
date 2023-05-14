from matplotlib import pyplot as plt


def plot_results(data, results):
    x = [point[0] for point in data.get('dots')]
    y = [point[1] for point in data.get('dots')]

    plt.plot(x, y, label="input_data", linewidth=7.0)

    for key in results:
        value = results[key]
        f = value.get('function')
        y = [f(i) for i in x]
        plt.plot(x, y, label=f"{value.get('string_function')}")
    plt.legend()
    plt.show()
