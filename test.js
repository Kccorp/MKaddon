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

    return parseFloat(time);
}

function getInputTime(){
    let hour = document.getElementById("input-hour").value;
    let minute = document.getElementById("input-minutes").value;

    return parseFloat(hour + "." + minute);
}

function calculator(time, menu){

    // sum of time and menu
    let somme = time + menu
    console.log(somme)

    // get the decimal of time
    let decimal = (somme - Math.floor(somme))*100
    decimal = Math.round(decimal)

    // get minute and hours to add
    let howManyHoursToAdd = Math.floor(decimal/60)
    let minute = (decimal%60)/100

    //recreate the time
    return (Math.floor(somme) + howManyHoursToAdd + minute).toFixed(2)


}

function engineController(){
    const testDiv = document.getElementById("inputGo");


    const menu = getMenu();
    console.log(menu);
    const time= getInputTime();
    console.log(time)
    testDiv.value = calculator(time, menu);


}
document.getElementById("BtnRun").addEventListener("click", engineController);

