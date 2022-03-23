//get least value word input
function getValWord() {
    return document.getElementById('formWord').value;
}

//get least value textarea input
function getValText() {
    return document.getElementById('formText').value;
}

//check logic code after onclick
const formButton = document.getElementById('formButton');
formButton.addEventListener('click', () => {
    let repeatTime =
        //if input was empty
        getValText() == '' & getValWord() == '' ? 'no' :
        //if input has value
        getValText().split(' ').filter((text) => {
        return text == getValWord().trim();
    }).length;
    document.getElementById('formResult').innerHTML = `your word repeated ${repeatTime} times`
});
