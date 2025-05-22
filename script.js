/*const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value.replace(',', '.')
  const peso = document.getElementById("peso").value.replace(',', '.')
  const resultado = document.getElementById("resultado");

  if (nome !== '' && altura !== '' && peso !== '') {

     const valorIMC = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2)

  

    let classificacao = ''
    if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso.'
    } else if (valorIMC < 25) {
        classificacao = `com peso ideal, parabéns.`
    } else if (valorIMC < 30) {
        classificacao = `levemente acima do peso.`
    } else if (valorIMC < 35) {
        classificacao = `com obesidade grau I.`
    } else if (valorIMC < 40) {
        classificacao = `com obesidade grau II.`
    } else {
        classificacao = `com obesidade grau III. Cuidado!!!`
    }

    resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`
    
  } else {
    resultado.textContent = `Preencha todos os campos!!!`
  }

}

//calcular.addEventListener('click', imc)
*/

const calcular = document.getElementById("calcular");

function imc() {
    const nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value; // 'let' para permitir reatribuição
    let peso = document.getElementById("peso").value; // 'let' para permitir reatribuição
    const resultado = document.getElementById("resultado");

    if (nome !== '' && altura !== '' && peso !== '') {

        // --- Tratamento para a Altura ---
        // 1. Substitui vírgulas por pontos, caso o usuário digite "1,75"
        altura = altura.replace(',', '.');
        // 2. Converte para número decimal
        let alturaNumerica = parseFloat(altura);

        // 3. Verifica se a altura digitada é em centímetros e converte para metros
        // Se a altura for maior que 3 (considerando que ninguém tem 3 metros de altura),
        // assumimos que foi digitada em centímetros.
        if (alturaNumerica > 3) {
            alturaNumerica = alturaNumerica / 100; // Divide por 100 para converter cm para metros
        }

        // --- Tratamento para o Peso ---
        // 1. Substitui vírgulas por pontos, caso o usuário digite "80,5"
        peso = peso.replace(',', '.');
        // 2. Converte para número decimal
        let pesoNumerico = parseFloat(peso);

        // --- Cálculo do IMC com os valores tratados ---
        const valorIMC = (pesoNumerico / (alturaNumerica * alturaNumerica)).toFixed(2);

        let classificacao = '';
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = `com peso ideal, parabéns.`;
        } else if (valorIMC < 30) {
            classificacao = `levemente acima do peso.`;
        } else if (valorIMC < 35) {
            classificacao = `com obesidade grau I.`;
        } else if (valorIMC < 40) {
            classificacao = `com obesidade grau II.`;
        } else {
            classificacao = `com obesidade grau III. Cuidado!!!`;
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = `Preencha todos os campos!!!`;
    }
}

calcular.addEventListener('click', imc);

