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
    def dispara_log(self, message):
        return message


class LogError(Log):
    def __init__(self, log):
        self.__log = log

    def dispara_log(self, message="O sistema está com erros"):
        return self.__log.dispara_log(f"{VERMELHO}{message}{RESET}")


class LogWarning(Log):
    def __init__(self, log):
        self.__log = log

    def dispara_log(self, message="O sistema está lento"):
        return self.__log.dispara_log(f"{LARANJA}{message}{RESET}")


class LogSuccess(Log):
    def __init__(self, log):
        self.__log = log

    def dispara_log(self, message="O sistema está funcionando"):
        return self.__log.dispara_log(f"{VERDE}{message}{RESET}")


if __name__ == "__main__":
    log = Log()
    log_error = LogError(log)
    log_warning = LogWarning(log)
    log_sucess = LogSuccess(log)
    print(log_error.dispara_log())
    print(log_warning.dispara_log())
    print(log_sucess.dispara_log())
