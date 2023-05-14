def count_matrix_det(matrix):
    det = 0
    for i in range(len(matrix[0])):

        if len(matrix) > 1:
            minor = [line[:i] + line[(i + 1):] for line in matrix[1:]]
            det += (-1) ** i * matrix[0][i] * count_matrix_det(minor)

        elif len(matrix) == 1:
            return matrix[0][0]
        else:
            print("Error: can't count det of matrix with dim less then 1.")
    return det


def swap_lines(matrix, i):
    for j in range(i + 1, len(matrix)):
        if matrix[j][i] != 0:
            # print_matrix(f"matrix before swap line i={i} and line j={j}", matrix)
            matrix[j], matrix[i] = matrix[i], matrix[j]
            # print_matrix(f"matrix after swap line i={i} and line j={j}", matrix)
            return matrix
    raise ValueError


def triangulize_matrix(matrix):
    n = len(matrix)
    for i in range(0, n):

        if matrix[i][i] == 0:
            try:
                matrix = swap_lines(matrix, i)
            except ValueError:
                print_matrix("Warning: System has no uniq solution!", matrix)
                return None

        i_i = matrix[i][i]

        for j_in_i_line in range(i, n + 1):
            matrix[i][j_in_i_line] = matrix[i][j_in_i_line] / i_i

        for j_after_i in range(i + 1, n):
            j_line_head = matrix[j_after_i][i]

            for k in range(i, n + 1):
                matrix[j_after_i][k] = matrix[j_after_i][k] - j_line_head * matrix[i][k]
    return matrix


def solve_matrix(matrix):
    n = len(matrix)
    matrix = triangulize_matrix(matrix)

    if matrix is None:
        return None

    for i in range(1, n):
        for j_before_i in range(0, i):
            i_head = matrix[j_before_i][i]

            for k in range(i, n + 1):
                matrix[j_before_i][k] = matrix[j_before_i][k] - matrix[i][k] * i_head

    return [round(matrix[i][n], 3) for i in range(0, len(matrix))]


def print_matrix(label, matrix):
    print(f"________{label}________")
    for line in matrix:
        print(line)
    print("________________________\n")
