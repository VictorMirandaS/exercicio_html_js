document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagem = document.getElementById('mensagem');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const valorA = parseInt(campoA.value);
        const valorB = parseInt(campoB.value);

        if (!isNaN(valorA) && !isNaN(valorB)) {
            if (valorB > valorA) {
                mensagem.textContent = 'Formulário válido: B é maior que A.';
                mensagem.style.color = '#4CAF50';
            } else {
                mensagem.textContent = 'Formulário inválido: B não é maior que A.';
                mensagem.style.color = 'red';
            }
        } else {
            mensagem.textContent = 'Por favor, preencha ambos os campos com números.';
            mensagem.style.color = 'red';
        }
    });
});
