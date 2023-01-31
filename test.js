function getMenu() {

    let time = "error";

    switch (true){
        case document.getElementById("radio-7h").checked :
            time = "7H";
            break;
        case document.getElementById("radio-7h30").checked :
            time = "7H30";
            break;
        case document.getElementById("radio-7h48").checked :
            time = "7H48";
            break;
        case document.getElementById("radio-8h20").checked :
            time = "8H20";
            break;
        case document.getElementById("radio-8h40").checked :
            time = "8H40";
            break;
    }

    return time
}

function getInputTime(){
    const time = document.getElementById("input-arrive").value

    console.log(time)
    return time
}

function engineController(){
    const testDiv = document.getElementById("inputGo");


    const menu = getMenu();
    const time= getInputTime();

    testDiv.value = time;


}
document.getElementById("BtnRun").addEventListener("click", engineController);

