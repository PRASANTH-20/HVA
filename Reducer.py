#!/usr/bin/env python

import sys

current_key = None
current_val = 0
current_row = None

for line in sys.stdin:
    key, val = line.strip().split("\t")
    matrix, index1, index2, value = val.split(",")

    if key != current_key:
        if current_key:
            # Emit the result
            print(f"{current_row},{index2}\t{current_val}")
        # Start a new accumulation
        current_key = key
        current_val = 0
        current_row = index1

    # Accumulate the multiplication
    if matrix == 'A':
        current_val += int(value) * int(index2)
    else:
        current_val += int(value) * int(index1)

# Emit the last result
if current_key:
    print(f"{current_row},{index2}\t{current_val}")
#!/usr/bin/env python

import sys

# Matrix dimensions
matrix_a_rows = 2
matrix_a_cols = 3
matrix_b_cols = 2

for line in sys.stdin:
    # Split the line into values
    tokens = line.strip().split(",")
    matrix, row, col, value = tokens
    
    if matrix == 'A':
        # Emit intermediate key-value pairs for each element in the result matrix
        for k in range(matrix_b_cols):
            print(f"{row},{k}\t{matrix},{col},{value}")
    else:
        # Emit intermediate key-value pairs for each element in the result matrix
        for i in range(matrix_a_rows):
            print(f"{i},{col}\t{matrix},{row},{value}")
