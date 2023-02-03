function getMenu() {

    let time = "error";

    // get the menu time selected and return it
    switch (true){
        case document.getElementById("radio-7h").checked :
            time = 7.00;
            break;
        case document.getElementById("radio-7h30").checked :
            time = 7.30;
            break;
        case document.getElementById("radio-7h48").checked :
            time = 7.48;
            break;
        case document.getElementById("radio-8h20").checked :
            time = 8.20;
            break;
        case document.getElementById("radio-8h40").checked :
            time = 8.40;
            break;
    }
    if (time=="error"){
        ErrorTime("vous n'avez pas selectionné de menu")
    }

    return parseFloat(time);
}

function getInputTime(idH,idM){
    let hour = document.getElementById(idH).value;
    //if hour value is empty
    if (hour<0 || hour >23){
        ErrorTime("l'heure indiqué n'est pas correct");
    }
    let minute = document.getElementById(idM).value;
    if (minute<0 ||  minute>59){
        ErrorTime("l'heure indiqué n'est pas correct");
    }
    if(hour === "" || minute === ""){
        ErrorTime("vous n'avez pas indiqué d'heure de départ")
    }


    return parseFloat(hour + "." + minute);
}

function checkFastMeal(){
    return document.getElementById("checkbox").checked;
}

function calculator(time, menu) {



    let somme = time + menu


    // get the decimal of time
    let decimal = (somme - Math.floor(somme)) * 100

    // Add or not 45min for lunch break
    if (checkFastMeal()){
        decimal = (Math.round(decimal))+45
    } else {
        console.log("before"+decimal)
        decimal = (Math.round(decimal))+MealTime()
        console.log('mealtm '+MealTime())
        console.log(decimal)
    }

    // get minute and hours to add
    let howManyHoursToAdd = Math.floor(decimal / 60)
    console.log("how many hours :"+ howManyHoursToAdd)
    let minute = (decimal % 60) / 100

    //recreate the time
    return (Math.floor(somme) + howManyHoursToAdd + minute).toFixed(2)

}

function MealTime(){
    let tdh= document.getElementById("input-Dhour").value;
    let tdm= document.getElementById("input-Dminutes").value;

    let tfh= document.getElementById("input-Fhour").value;
    let tfm= document.getElementById("input-Fminutes").value;
    let tm = (tfh*60+tfm)-(tdh*60+tdm);
    if (tm <45){
        ErrorTime("vous ne pouvez pas avoir moins de 45 min de pause ! ")
    }
    return parseInt(tm);
}

function setMeal(){
    if (checkFastMeal()){
        document.getElementById('fuck1').setAttribute("hidden","");
        document.getElementById('fuck2').setAttribute("hidden","");
    }else {
        document.getElementById('fuck1').removeAttribute("hidden");
        document.getElementById('fuck2').removeAttribute("hidden");
    }

}

function ErrorTime(tanga){
    alert("Attention, il y a une erreur : "+tanga)
    location.reload();
    //create a red message in a red clearer box with the error in the var tanga
    let newDiv = document.createElement("div");

    // Set the div's text content to the input text
    newDiv.textContent = tanga;

    // Set the div's background color to red
    newDiv.style.backgroundColor = "red";

    // Set the div's position to fixed, so it stays on top of the page
    newDiv.style.position = "fixed";

    // Set the div's width and height to fit the text content
    newDiv.style.width = "fit-content";
    newDiv.style.height = "fit-content";

    // Center the div horizontally and vertically on the page
    newDiv.style.left = "50%";
    newDiv.style.top = "0";
    newDiv.style.transform = "translate(-50%, 0%)";

    // Add the new div to the page
    document.body.prepend(newDiv);

}

function engineController(){
    const testDiv = document.getElementById("inputGo");


    const menu = getMenu();
    const time = getInputTime("input-hour","input-minutes");




    testDiv.value = calculator(time, menu);

}
document.getElementById("BtnRun").addEventListener("click", engineController);
document.getElementById("checkbox").addEventListener("click", setMeal);

