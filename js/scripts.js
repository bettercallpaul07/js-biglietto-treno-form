//Dichiariamo gli elementi del DOM
const fnameEl = document.getElementById("fname");
const kmEl = document.getElementById("km");
const ageEl = document.getElementById("age-type");

console.log(kmEl.value)
console.log(ageEl.value)

let newcpk = 1;
const price = 0.21;
let carrozza = Math.floor(Math.random() * 10);
let codice = Math.floor(Math.random() * 10000) + 90000;


generate.addEventListener ('click',
    function() {

    if ((fnameEl.value == "") || (kmEl.value == "")) {
            console.log(fnameEl.value)
            console.log("Meh")
            alert("Oooo inserisci i dati");
        }

    else if ((kmEl.value < 1)) {
        alert("Valore dei kilometri non valido");
    }

    else {
        document.getElementById("output-tab").style.display = "block";
        document.getElementById("my-ticket").style.display = "block";
        document.getElementById("savepdf").style.display = "inline-block";



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


    }
)

function clearInput() {
    let fNameEl = document.getElementById("fname");
    if (fNameEl.value !="") {
        fNameEl.value = "";
    }

    let kmEl = document.getElementById("km");
    if (kmEl.value !="") {
        kmEl.value = "";
    }

    document.getElementById("my-ticket").style.display = "none";
    document.getElementById("output-tab").style.display = "none";
    document.getElementById("savepdf").style.display = "none";
}

function generatePDF() {
    const element = document.getElementById('output-tab');
    var opt = {
       margin:       1,
       filename:     'ticket.pdf',
       image:        { type: 'jpeg', quality: 0.98 },
       html2canvas:  { scale: 2 },
       jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
     };

     html2pdf().set(opt).from(element).save();
    }


