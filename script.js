const inputE1=document.querySelector(".input");
const yearE1=document.querySelector(".years");
const monthE1=document.querySelector(".months");
const daysE1=document.querySelector(".days");
const btnE1=document.querySelector("button");

btnE1.addEventListener("click",calculateAge);

const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function calculateAge(){
    let today= new Date();
    let inputDateE1= new Date(inputE1.value);
    let resultMonth,resultDate,resultYear;

    let  inputYear = inputDateE1.getFullYear();
    let inputMonth = inputDateE1.getMonth()+1;
    let inputDate  = inputDateE1.getDate();

    let currentYear = today.getFullYear();
    let currentMonth= today.getMonth()+1;
    let currentDate = today.getDate();

    leapYearCheck(currentYear);
    
    if(
        (inputYear>currentYear)||
        (inputMonth>currentMonth && inputYear==currentYear)||
        (inputDate>currentDate && inputMonth==currentMonth && inputYear==currentYear)
    )
    {
        alert("You are not born Yet..!");
        displayResult("0","0","0");
        return;
    }

    resultYear = currentYear-inputYear;

    if(currentMonth >= inputMonth){
        resultMonth = currentMonth - inputMonth;
      
    }
    else{
        resultYear--;
        resultMonth = 12 + currentMonth - inputMonth;
       
        
    }
    if(currentDate >= inputDate){
        resultDate = currentDate - inputDate;
        
    }
    else{
        resultMonth--;
        let days = months[currentMonth];
        // console.log(days);
        resultDate = days + currentDate - inputDate;
        console.log(resultDate);
        if(resultMonth < 0){
            resultMonth = 11;
            resultYear--;
        }
    }
    displayResult(resultDate,resultMonth,resultYear);
}

function displayResult(resultDate,resultMonth,resultYear){
   
    daysE1.innerHTML=resultDate;
    monthE1.innerHTML=resultMonth;
    yearE1.innerHTML=resultYear;
   
}

function leapYearCheck(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}