function getValWord() {
    return document.getElementById('formWord').value;
}

function getValText() {
    return document.getElementById('formText').value;
}


const formButton = document.getElementById('formButton');
formButton.addEventListener('click', () => {
    const repeatTime = getValText().split(' ').filter((text) => {
        return text == getValWord().trim();
    }).length;
    console.log(repeatTime)
    document.getElementById('formResult').innerHTML = `you word repeated ${repeatTime} times`
})

