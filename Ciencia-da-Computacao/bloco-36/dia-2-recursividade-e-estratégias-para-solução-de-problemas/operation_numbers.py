
def count_even(numbers):
    quantity_even = 0
    if len(numbers) <= 1:
        if numbers[0] % 2 == 0:
            quantity_even += 1
        return quantity_even
    if numbers[-1] % 2 == 0:
        quantity_even += 1
    numbers = numbers[:-1]
    return quantity_even + count_even(numbers)


# 0 4
# 1 3
# 0 3
# 1 2
# 0 2
# 1 1
# 0 1
# 1 0
# 0


def return_greater_number(numbers):
    greater_number = numbers[0]
    if len(numbers) <= 1:
        return numbers[0]
    current_number = return_greater_number(numbers[1:])
    if current_number > greater_number:
        greater_number = current_number
    return greater_number


# 9 1
# 9 2
# 9 3
# 9 4
# 9 5
# 9 6
# 9 7
# 9 8
# 9


if __name__ == "__main__":
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    print(return_greater_number(numbers))
