function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    if (isNaN(nota1) || isNaN(nota2)) {
        return;
    }

    var media = (nota1 + nota2) / 2;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<p>Nome do Aluno: " + nome + "</p>" +
        "<p>Média Final: " + media.toFixed(2) + "</p>";
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("resultado").innerHTML = "";
}
