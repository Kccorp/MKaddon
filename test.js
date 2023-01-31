function testFunction() {
    // get the div element from the popup and set its innerHTML
    var testDiv = document.getElementById("testDiv");
    testDiv.innerHTML = "Hello World!";
}
document.getElementById("DOMBtn").addEventListener("click", testFunction);


function OpenURL(){
    chrome.tabs.create({ url: "https://nicolas.brondin-bernard.com" });
}
document.getElementById("openBtn").addEventListener("click", OpenURL);

