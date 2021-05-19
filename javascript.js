function calcular() {
    var camp1 = document.getElementById('campo1');
    var camp2 = document.getElementById('campo2');
    var res = document.getElementById('res');
    var res2 = document.getElementById('res2');

    var num1 = Number(camp1.value);
    var num2 = Number(camp2.value);

    var calcular = num1 / 10;
    var calcular2 = (num1 - calcular) / num2;

    res.innerHTML = `Seu dízimo: R$ ${calcular.toFixed(2)}`;
    res2.innerHTML = `Sua oferta: R$ ${calcular2.toFixed(2)}`;
}