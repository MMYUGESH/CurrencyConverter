
async function fetchurl(url) {
    let fetchres = await fetch(url);
    let data = await fetchres.json();
    return data;
}

var basecode = document.querySelector('.type');


var code = "";
basecode.addEventListener('change', (event) => {
    code = event.target.value
    var amount = document.querySelector('#value').value;
    var data = fetchurl('https://api.exchangeratesapi.io/latest?base=' + code + '&symbols=USD,INR,CAD,AUD');
    data.then((result) => {
        var cad = result.rates.CAD;
        var aud = result.rates.AUD;
        var usd = result.rates.USD;
        var inr = result.rates.INR;

        document.querySelector("#cad").innerText = "C$" + ((+amount) * (+cad)).toFixed(4);
        document.querySelector("#aud").innerText = "A$" + ((+amount) * (+aud)).toFixed(4);
        document.querySelector("#i").innerText = "Rs" + ((+amount) * (+inr)).toFixed(4);
        document.querySelector("#u").innerText = "$ " + ((+amount) * (+usd)).toFixed(4);

    });
});



