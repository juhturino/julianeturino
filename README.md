efeito-doppler/
├── index.html
├── style.css
└── 
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora do Efeito Doppler</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>Efeito Doppler</h1>
        <p>Calculadora de frequência percebida</p>

        <form id="dopplerForm">

            <label for="observador">
                Velocidade do observador (m/s):
            </label>
            <input type="number" id="observador" step="any" required>

            <label for="fonte">
                Velocidade da fonte (m/s):
            </label>
            <input type="number" id="fonte" step="any" required>

            <label for="som">
                Velocidade do som (m/s):
            </label>
            <input type="number" id="som" step="any" required>

            <label for="frequencia">
                Frequência da fonte (Hz):
            </label>
            <input type="number" id="frequencia" step="any" required>

            <button type="submit">Calcular frequência</button>

        </form>

        <div id="resultado"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #141e30, #243b55);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    width: 100%;
    max-width: 450px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}

h1 {
    text-align: center;
    color: #243b55;
    margin-bottom: 10px;
}

p {
    text-align: center;
    color: #666;
    margin-bottom: 25px;
}

label {
    display: block;
    margin-bottom: 7px;
    font-weight: bold;
    color: #333;
}

input {
    width: 100%;
    padding: 12px;
    margin-bottom: 18px;
    border: 1px solid #ccc;
    border-radius: 7px;
    font-size: 16px;
}

button {
    width: 100%;
    padding: 13px;
    background: #243b55;
    color: white;
    border: none;
    border-radius: 7px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background: #141e30;
}

#resultado {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #243b55;
}

const formulario = document.getElementById("dopplerForm");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Recebendo os valores informados pelo usuário
    const velocidadeObservador = Number(
        document.getElementById("observador").value
    );

    const velocidadeFonte = Number(
        document.getElementById("fonte").value
    );

    const velocidadeSom = Number(
        document.getElementById("som").value
    );

    const frequenciaFonte = Number(
        document.getElementById("frequencia").value
    );

    const resultado = document.getElementById("resultado");

    // Validando os valores
    if (
        velocidadeSom <= 0 ||
        frequenciaFonte <= 0 ||
        velocidadeObservador < 0 ||
        velocidadeFonte < 0 ||
        velocidadeObservador >= velocidadeSom ||
        velocidadeFonte >= velocidadeSom
    ) {
        resultado.style.color = "red";
        resultado.innerHTML =
            "Erro: informe velocidades válidas e menores que a velocidade do som.";
        return;
    }

    // Fórmula do Efeito Doppler:
    // fo = f * (v + vo) / (v - vf)
    // Considera observador e fonte aproximando-se.

    const frequenciaPercebida =
        frequenciaFonte *
        (velocidadeSom + velocidadeObservador) /
        (velocidadeSom - velocidadeFonte);

    // Exibindo o resultado
    resultado.style.color = "green";

    resultado.innerHTML =
        "Frequência percebida: " +
        frequenciaPercebida.toFixed(2) + " Hz";
});
Experimente preencher a calculadora com os seguintes valores:

Informação

Valor

Velocidade do observador

10 m/s

Velocidade da fonte

20 m/s

Velocidade do som

340 m/s

Frequência da fonte

500 Hz

