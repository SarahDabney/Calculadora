function insert(num) {
    var resultado = document.getElementById('resultado').innerHTML;
    var ultimoChar = resultado.slice(-1); // Pega o último caractere da expressão

    // Verifica se o último caractere é um operador
    if (isOperator(ultimoChar) && isOperator(num)) {
        // Se o último caractere e o atual forem operadores, não adiciona o novo operador
        return;
    }

    // Previne inserir mais de um ponto em um número
    if (num === '.') {
        // Se o último número já contém um ponto, não permite inserir outro
        var partes = resultado.split(/[\+\-\*\/]/); // Divide a expressão pelos operadores
        var ultimoNumero = partes[partes.length - 1]; // Pega o último número da expressão

        if (ultimoNumero.includes('.')) {
            return; // Se o último número já contém um ponto, não insere outro
        }
    }

    // Insere o número ou operador se for válido
    document.getElementById('resultado').innerHTML = resultado + num;
}

// Função para verificar se o caractere é um operador
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;

    // Verifica se há tentativa de divisão por zero
    if (resultado.includes('/0')) {
        document.getElementById('resultado').innerHTML = "0";
    } else if (resultado) {
        try {
            // Executa o cálculo normalmente se não houver divisão por zero
            document.getElementById('resultado').innerHTML = eval(resultado);
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    }
}