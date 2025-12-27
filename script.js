const income=document.querySelector(".income-input");
const results=document.querySelector(".results-input");
const calculate=document.querySelector("#calculate");
const reset=document.querySelector("#reset");

//reset page
reset.addEventListener("click", () => {
    income.value = "";
    results.value = "";
});


//calculate button
calculate.addEventListener("click",()=>
{
    const salary = Number(income.value);
    if (!salary || salary < 0) {
        results.value = "Invalid";
        return;
    }
    if (salary <= 53359) 
    {
        results.value = salary * 0.15;
    } else if (salary <= 106717) {
        results.value = salary * 0.20;
    } else if (salary <= 165430) {
        results.value = salary * 0.26;
    } else if (salary <= 235675) {
        results.value = salary * 0.29;
    } else {
        results.value = salary * 0.33;
   }

    numRounded();
});

//round results
const numRounded = () => {
    results.value = (Math.round(results.value * 100) / 100).toFixed(2);
};
