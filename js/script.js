// Exercicio de fixacao - Calculo de um Raio

// formula  Area = PI * raio ao quadrado

// var raio = parseFloat(prompt("Informe o valor do raio"));

// var area = (Math.PI*(raio**2));

// console.log(area);

// alert(`O valor da area e de ${area.toFixed(2)}`)


// Calcular consumo de combustivel

var dinheiro = parseFloat(prompt("Quanto e dinheiro vc tem ?","Digite aqui"));

var combustivel = (dinheiro / 5.15);

var quilometros = (combustivel * 12.8);


console.log(`Voce pode compra um total de ${combustivel.toFixed(2)} lt  e seu carro tera uma autonomia de ${quilometros.toFixed(2)} Km para andar`);