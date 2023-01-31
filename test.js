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

    return time;
}

function getInputTime(){
    let hour = document.getElementById("input-hour").value;
    let minute = document.getElementById("input-minutes").value;

    let time = parseFloat(hour+"."+minute);

    return time;
}

function calculator(time, menu){

}

function engineController(){
    const testDiv = document.getElementById("inputGo");


    const menu = getMenu();
    const time= getInputTime();

    calculator(time, menu);

    testDiv.value = time;


}
document.getElementById("BtnRun").addEventListener("click", engineController);

