randomNames = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def returnsGreaterName(listNames):
    greaterName = ""
    for name in listNames:
        if (len(name) > len(greaterName)):
            greaterName = name
    return greaterName


print(returnsGreaterName(randomNames))
