
const totalAmount = document.getElementById('total-amount');
const princpleInput = document.getElementById('principal');
const rateIn = document.getElementById('rate');
const yearsIn = document.getElementById('time');

function cal(){
   
    let principal = Number( princpleInput.value);
    let rate = Number(rateIn.value/100);
    let years = Number(yearsIn.value);
    
    if(principal < 0 || isNaN(principal)){
        principal = 0;
        princpleInput.value=0;
    }
    if(rate < 0 || isNaN (rate)){
        rate = 0;
        rateIn.value = 0;
    }
    if(years < 0 || isNaN (years)){
        years = 0;
        yearsIn.value = 0;
    }

    const result = principal+(principal* rate* years);

    totalAmount.textContent=result.toLocaleString("bn-BD", {
        style:"currency",
        currency: "BDT"
});

//})
    }
