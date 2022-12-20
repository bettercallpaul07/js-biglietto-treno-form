//Dichiariamo gli elementi del DOM
const fnameEl = document.getElementById("fname");
const lnameEl = document.getElementById("lname");
const kmEl = document.getElementById("km");
const ageEl = document.getElementById("age");
let newcpk = 1;
const price = 0.21;


submitButton.addEventListener ('click',
    function() {
        let cpk = price * kmEl.value;
        cpk = cpk.toFixed(2);


        if (ageEl.value < 18 ) {
            let newcpk = cpk*0.80;
            let discount = "Complimenti, essendo minorenne hai diritto ad uno sconto del 20% sul prezzo del biglietto;"
            let savedprice = cpk*0.20;
            savedprice = savedprice.toFixed(2) + '€'
            cpk = cpk + '€'
        
            // document.getElementById("nodiscountprice").innerHTML ="Prezzo del biglietto senza sconto: " + cpk + '.';
            // document.getElementById("savedprice").innerHTML = discount + " hai risparmiato: " + savedprice + '.';
        
            console.log("Sei minorenne, hai uno sconto!")
            console.log(fnameEl.value)
            console.log(lnameEl.value)
            console.log(kmEl.value)
            console.log(ageEl.value)
            console.log(cpk)
            console.log(newcpk)
            console.log(savedprice)

        }
        
        else if  (ageEl.value >= 65) {
            let cpk = kmEl.value * price;
            let newcpk = cpk*0.60;
            let discount = "Complimenti, essendo over 65 hai diritto ad uno sconto del 40% sul prezzo del biglietto;"
            let savedprice = cpk*0.40;
            savedprice = savedprice.toFixed(2) + '€'
            cpk = cpk + '€'
        
            // document.getElementById("nodiscountprice").innerHTML ="Prezzo del biglietto senza sconto: " + cpk + '.';
            // document.getElementById("savedprice").innerHTML = discount + " hai risparmiato: " + savedprice + '.';
        
            console.log("Sei Over 65, hai uno sconto!")
            console.log(fnameEl.value)
            console.log(lnameEl.value)
            console.log(kmEl.value)
            console.log(ageEl.value)
            console.log(cpk)
            console.log(newcpk)
            console.log(savedprice)
        
        }
        
        else {
            console.log("Non hai sconti!")
            cpk = cpk + '€'
            console.log(fnameEl.value)
            console.log(lnameEl.value)
            console.log(kmEl.value)
            console.log(ageEl.value)
            console.log(cpk)
        }
        

    
    }
)




// document.getElementById('km').innerHTML = km;
// document.getElementById('age').innerHTML = age;
// document.getElementById('cpk').innerHTML = newcpk;
// document.getElementById('cpkid').innerHTML = newcpk;




