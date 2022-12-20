//Dichiariamo gli elementi del DOM
const fnameEl = document.getElementById("fname");
const kmEl = document.getElementById("km");
const ageEl = document.getElementById("age-type");
let newcpk = 1;
const price = 0.21;
let carrozza = Math.floor(Math.random() * 10);
let codice = Math.floor(Math.random() * 10000) + 90000;


console.log(ageEl.value)


generate.addEventListener ('click',
    function() {

        document.getElementById("output-tab").style.display = "block";
        document.getElementById("my-ticket").style.display = "block";


        let cpk = price * kmEl.value;
        cpk = cpk.toFixed(2);


        if (ageEl.value == "min" ) {
            let newcpk = cpk*0.80;
            newcpk = newcpk.toFixed(2);
            newcpk = newcpk + '€'

            document.getElementById("user-name").innerHTML = fnameEl.value;
            document.getElementById("ticket-type").innerHTML = "Riduzione Minorenne";
            document.getElementById("carrozza").innerHTML = carrozza;
            document.getElementById("codice").innerHTML = codice;
            document.getElementById("ticket-price").innerHTML = newcpk;
        }
        
        else if  (ageEl.value == "over") {
            let newcpk = cpk*0.60;
            newcpk = newcpk.toFixed(2);
            newcpk = newcpk + '€'

            document.getElementById("user-name").innerHTML = fnameEl.value;
            document.getElementById("ticket-type").innerHTML = "Riduzione Silver";
            document.getElementById("carrozza").innerHTML = carrozza;
            document.getElementById("codice").innerHTML = codice;
            document.getElementById("ticket-price").innerHTML = newcpk;
        }
        
        else {
            cpk = cpk + '€'

            document.getElementById("user-name").innerHTML = fnameEl.value;
            document.getElementById("ticket-type").innerHTML = "Biglietto Standard";
            document.getElementById("carrozza").innerHTML = carrozza;
            document.getElementById("codice").innerHTML = codice;
            document.getElementById("ticket-price").innerHTML = cpk;
        }
        

    
    }
)




// document.getElementById('km').innerHTML = km;
// document.getElementById('age').innerHTML = age;
// document.getElementById('cpk').innerHTML = newcpk;
// document.getElementById('cpkid').innerHTML = newcpk;




