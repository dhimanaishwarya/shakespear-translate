const inputText = document.querySelector("#input");
const translateBtn = document.querySelector("#translate");
const outputText = document.querySelector("#output");

const serverUrl = "https://api.funtranslations.com/translate/yoda.json";



const newUrl = () => {
    return `${serverUrl}?text=${inputText.value}`
};




translateBtn.addEventListener("click", () => {

    fetch(newUrl())
        .then(response => response.json())
        .then(json => {
            outputText.innerText = json.contents.translated;

        })
        .catch(error => {
            console.log(error.message);
            alert("server is down ! try again later")
        })


})