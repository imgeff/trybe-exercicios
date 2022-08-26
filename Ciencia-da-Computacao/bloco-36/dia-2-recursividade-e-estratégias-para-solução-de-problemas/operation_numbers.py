
def count_even(numbers):
    quantity_even = 0
    for number in numbers:
        if number % 2 == 0:
            quantity_even += 1
    return quantity_even


if __name__ == "__main__":
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    print(count_even(numbers))
