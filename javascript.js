function calcular() {
    var campo1 = document.getElementById('campo1');
    var campo2 = document.getElementById('campo2');
    var res = document.getElementById('res');
    var res2 = document.getElementById('res2');

    var num1 = Number(campo1.value);
    var num2 = Number(campo2.value);

    var calcular = num1 / 10;
    var calcular2 = (num1 - calcular) / (100 / num2);

    res.innerHTML = `Seu dízimo: R$ ${calcular.toFixed(2)}`;
    res2.innerHTML = `Sua oferta: R$ ${calcular2.toFixed(2)}`;
}