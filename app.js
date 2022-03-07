const bodY = document.getElementsByTagName("body")[0];
const switcH = document.getElementsByClassName("form-check-input")[0];
const containeR = document.getElementsByClassName("container")[0];
const carD = document.querySelectorAll(".card");

switcH.addEventListener("click", ()=>{
    bodY.className = (bodY.className=="bg-light") ? "bg-dark":"bg-light";

    containeR.classList.contains("text-dark") ? containeR.classList.replace("text-dark", "text-light") : containeR.classList.replace("text-light", "text-dark");

    carD.forEach(el => el.classList.contains("bg-dark") ? el.classList.replace("bg-dark", "bg-light") : el.classList.replace("bg-light", "bg-dark"));
});