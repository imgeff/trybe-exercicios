def returnsGreaterNumber(number1, number2):
    if number1 < number2:
        return number2
    return number1


print(returnsGreaterNumber(2, 5))  # Retorna 5
print(returnsGreaterNumber(5, 2))  # Retorna 5
