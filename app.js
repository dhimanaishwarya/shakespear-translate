const inputText = document.querySelector("#input");
const translateBtn = document.querySelector("#translate");
const outputText = document.querySelector("#output");

const serverUrl = "https://api.funtranslations.com/translate/pirate.json";



const newUrl = () => {
    return `${serverUrl}?text="${inputText.value}"`
};




translateBtn.addEventListener("click", Url => {
    console.log(newUrl());
    fetch(newUrl(Url))
        .then(response => response.json())
        .then(json => json.contents.translated)
        .catch(error => {
            console.log(error.message);
            console.log("server is down ! try again later")
        })
})