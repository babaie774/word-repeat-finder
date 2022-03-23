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
    const repeatTime = getValText().split(' ').filter((text) => {
        return text == getValWord().trim();
    }).length;
    console.log(repeatTime)
    document.getElementById('formResult').innerHTML = `you word repeated ${repeatTime} times`
});
