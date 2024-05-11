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
