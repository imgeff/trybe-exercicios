from abc import ABC, abstractclassmethod

ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class BaseLog(ABC):
    @abstractclassmethod
    def dispara_log(self, message):
        raise NotImplementedError


class Log:
    def dispara_log(message):
        return message


class DecoratorLog(BaseLog):
    def __init__(self, log):
        self.__log = log

    def dispara_log(self, message):
        self.__log.dispara_log(message)


class LogError(DecoratorLog):
    def dispara_log(self, message="O sistema está com erros"):
        self.dispara_log(f"{VERMELHO}{message}{RESET}")


class LogWarning(DecoratorLog):
    def dispara_log(self, message="O sistema está lento"):
        self.dispara_log(f"{LARANJA}{message}{RESET}")


class LogSuccess(DecoratorLog):
    def dispara_log(self, message="O sistema está funcionando"):
        self.dispara_log(f"{VERDE}{message}{RESET}")


if __name__ == "__main__":
    log = Log()
    decorator_log = DecoratorLog(log)
    log_error = LogError(decorator_log)
    print(log_error.dispara_log())
