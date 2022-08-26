
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

if __name__ == "__main__":
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    print(count_even(numbers))
