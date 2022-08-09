from abc import ABC, abstractclassmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractclassmethod
    def log(cls, msg):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open('logs.txt', 'a') as file_logs:
            print(msg, file=file_logs)


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log:
    def __init__(self, manipuladores):
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, msg):
        self.__log("INFO", msg)

    def alerta(self, msg):
        self.__log("ALERTA", msg)

    def erro(self, msg):
        self.__log("ERRO", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)

    def __log(self, severidade, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(severidade, msg))

    def __formatar(self, severidade, msg):
        data = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{severidade} - {data}]: {msg}"


manipulador = LogEmArquivo()
logs = Log([manipulador])
logs.debug("Testando se a construção da classe log foi a correta")
