
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

