def read_data():
    response = input("Read data from file? (y/n)")

    if response == "n":
        matrix = read_stdin()
    elif response == "y":
        filename = input("Enter filepath: ")
        matrix = read_file(filename)
    return matrix


def read_stdin():
    data = {'dots': []}

    print("Type points with space delimiter and each new point from new line!")

    print("Enter \"s\" to finish.")

    while True:
        try:
            new_line = input().strip()
            if new_line == "s":
                if len(data['dots']) < 3:
                    raise AttributeError
                break

            current_dot = tuple(map(float, new_line.split()))

            if len(current_dot) != 2:
                raise ValueError

            data['dots'].append(current_dot)

        except ValueError:
            print("Incorrect coordinates! Has to be to numbers")
        except AttributeError:
            print("Too less points!")
    return data


def read_file(filename):
    f = open(filename, "r")

    data = {'dots': []}

    try:
        for line in f:
            current_dot = tuple(map(float, line.strip().split()))

            if len(current_dot) != 2:
                raise ValueError

            data['dots'].append(current_dot)

        if len(data['dots']) < 2:
            raise AttributeError
    except (ValueError, AttributeError):
        return None
    return data
