function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    if (!nome || isNaN(peso) || isNaN(altura) || !sexo) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const imc = peso / (altura * altura);
    let condicao = '';
    let pesoIdeal = 0;
    let diferencaPeso = 0;

    if (sexo === 'feminino') {
        if (imc < 19.1) {
            condicao = 'abaixo do peso';
            pesoIdeal = 19.1 * altura * altura;
        } else if (imc >= 19.1 && imc <= 25.8) {
            condicao = 'no peso normal';
        } else if (imc > 25.8 && imc <= 27.3) {
            condicao = 'marginalmente acima do peso';
            pesoIdeal = 25.8 * altura * altura;
        } else if (imc > 27.3 && imc <= 32.3) {
            condicao = 'acima do peso ideal';
            pesoIdeal = 25.8 * altura * altura;
        } else {
            condicao = 'obeso';
            pesoIdeal = 25.8 * altura * altura;
        }
    } else {
        if (imc < 20.7) {
            condicao = 'abaixo do peso';
            pesoIdeal = 20.7 * altura * altura;
        } else if (imc >= 20.7 && imc <= 26.4) {
            condicao = 'no peso normal';
        } else if (imc > 26.4 && imc <= 27.8) {
            condicao = 'marginalmente acima do peso';
            pesoIdeal = 26.4 * altura * altura;
        } else if (imc > 27.8 && imc <= 31.1) {
            condicao = 'acima do peso ideal';
            pesoIdeal = 26.4 * altura * altura;
        } else {
            condicao = 'obeso';
            pesoIdeal = 26.4 * altura * altura;
        }
    }

    if (condicao !== 'no peso normal') {
        diferencaPeso = peso - pesoIdeal;
    }

    document.getElementById('resultado').innerHTML = `
        <h2>Resultado</h2>
        <p>Nome: ${nome}</p>
        <p>IMC: ${imc.toFixed(2)}</p>
        <p>Condição: ${condicao}</p>
        ${condicao !== 'no peso normal' ? `<p>Você deve ${diferencaPeso < 0 ? 'ganhar' : 'perder'} ${Math.abs(diferencaPeso).toFixed(2)} Kg para ficar na condição normal.</p>` : ''}
    `;
}
