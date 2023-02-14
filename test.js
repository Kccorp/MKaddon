function checkpref(){
    // menu=
    // hour=
    // minute=
    // chrome.storage.sync.get(["Saved_menu"]).then((result) => {
    //     if (result.Saved_menu){
    //         document.getElementById("radio-"+result.Saved_menu).setAttribute("checked","");
    //     }
    // });
    chrome.storage.sync.get(["Saved_hour"]).then((result) => {
        if (result.Saved_hour){
            document.getElementById("input-hour").value=result.Saved_hour;
        }
    });
    chrome.storage.sync.get(["Saved_minute"]).then((result) => {
        if (result.Saved_minute){
            document.getElementById("input-minutes").value=result.Saved_minute;
        }
    });
}

function savepref(){
    // chrome.storage.sync.set({"Saved_menu": getMenu()});
    chrome.storage.sync.set({Saved_hour: document.getElementById("input-hour").value});
    chrome.storage.sync.set({Saved_minute: document.getElementById("input-minutes").value});
}
function getMenu() {

    let time = "error";


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
    if (time==="error"){
        ErrorTime("vous n'avez pas choisi de menu")
    }

    return parseFloat(time);
}

function getInputTime(idH,idM){
    let hour = document.getElementById(idH).value;
    //if hour value is empty
    if (hour<0 || hour >23){
        ErrorTime("l'heure choisi n'est pas correct");
    }
    let minute = document.getElementById(idM).value;
    if (minute<0 ||  minute>59){
        ErrorTime("l'heure choisi n'est pas correct");
    }
    if(hour === "" || minute === ""){
        ErrorTime("vous n'avez pas choisi d'heure de depart")
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

        decimal = (Math.round(decimal))+MealTime()

    }

    // get minute and hours to add
    let howManyHoursToAdd = Math.floor(decimal / 60)

    let minute = (decimal % 60) / 100

    //recreate the time
    return (Math.floor(somme) + howManyHoursToAdd + minute).toFixed(2)

}

function MealTime(){
    let tdh= parseInt(document.getElementById("input-Dhour").value);
    let tdm= parseInt(document.getElementById("input-Dminutes").value);

    let tfh= parseInt(document.getElementById("input-Fhour").value);
    let tfm= parseInt(document.getElementById("input-Fminutes").value);


    let tm = (tfh*60+tfm)-(tdh*60+tdm);

    if (tm <45){
        ErrorTime("vous ne pouvez pas avoir moins de 45 min de pause ! ")
    }
    return parseInt(tm);
}

function setMeal(){
    if (checkFastMeal()){
        document.getElementById('fuck10').setAttribute("disabled","");
        document.getElementById('fuck20').setAttribute("disabled","");
        document.getElementById('fuck11').setAttribute("disabled","");
        document.getElementById('fuck21').setAttribute("disabled","");
    }else {
        document.getElementById('fuck10').removeAttribute("disabled");
        document.getElementById('fuck20').removeAttribute("disabled");
        document.getElementById('fuck10').removeAttribute("disabled");
        document.getElementById('fuck20').removeAttribute("disabled");
    }

}

function ErrorTime(tanga){
    document.getElementById('error').removeAttribute("disabled");
    document.getElementById('error').innerHTML=tanga;
    throw new Error("my error message");
}

function engineController(){
    document.getElementById("error").setAttribute("disabled","");
    const testDiv = document.getElementById("inputGo");


    const menu = getMenu();
    const time = getInputTime("input-hour","input-minutes");




    testDiv.value = calculator(time, menu);
    savepref();
}
document.getElementById("BtnRun").addEventListener("click", engineController);
document.getElementById("checkbox").addEventListener("click", setMeal);
setMeal();
checkpref();

