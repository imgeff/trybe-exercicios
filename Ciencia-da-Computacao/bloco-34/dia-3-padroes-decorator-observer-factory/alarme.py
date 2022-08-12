from abc import ABC, abstractmethod


class AlarmeObserver(ABC):
    @abstractmethod
    def acionar(self):
        raise NotImplementedError


class Alarme:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotina(self, rotina):
        self.__rotinas.append(rotina)

    def despertar(self):
        print("BIP BIP! Hora de Despertar!")
        # if len(self.__rotinas) >= 1:
        for rotina in self.__rotinas:
            rotina.acionar()


class AcenderLuzes(AlarmeObserver):
    def __init__(self, alarme):
        self.__alarme = alarme
        self.__alarme.adicionar_rotina(self)

    def acionar(self):
        print("Acendendo as Luzes!")


class PrepararCafe(AlarmeObserver):
    def __init__(self, alarme):
        self.__alarme = alarme
        self.__alarme.adicionar_rotina(self)

    def acionar(self):
        print("Preparando o café!")


class LigarComputador(AlarmeObserver):
    def __init__(self, alarme):
        self.__alarme = alarme
        self.__alarme.adicionar_rotina(self)

    def acionar(self):
        print("Ligando o Computador!")


if __name__ == "__main__":
    alarme = Alarme()
    AcenderLuzes(alarme)
    PrepararCafe(alarme)
    LigarComputador(alarme)
    alarme.despertar()
