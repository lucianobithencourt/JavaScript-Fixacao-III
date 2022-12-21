// Exercicio de fixacao - Calculo de IMC

var nome = prompt("Informe nome do paciente", "Digite aqui");

var altura = parseFloat(prompt("Informe sua altura", "Ex:1.50"))

var peso = parseFloat(prompt("Informe seu peso", "Ex:0.0"));

var imc = peso / (altura ** 2);

// console.log(imc.toFixed(2));
alert(`O IMC de ${nome} esta em ${imc.toFixed(2)}`);

if (imc < 16) {
    alert(`${nome} esta muito abaixo do peso !! !! ISSO É GRAVE !! `);

} else if (imc > 16 && imc < 16.99) {
    alert(`${nome} esta abaixo do peso ideal`);

} else if (imc > 17 && imc < 18.49) {
    lert(` ${nome} esta com baixo peso`);

} else  if (imc > 18.50 && imc < 24.99) {
    alert(` ${nome} esta com peso normal`);

} else if (imc > 25 && imc < 29.99){
    alert(` ${nome} esta com sobrepeso`);

}else if (imc > 30 && imc < 34.99) {
alert(` ${nome} esta com obesidade de grau-I`);

} else if (imc > 35 && imc < 39.99) {
    alert(` ${nome} esta com obesidade de grau-II`);

} else {
    alert(` ${nome} esta com obesidade de grau-III`);

}