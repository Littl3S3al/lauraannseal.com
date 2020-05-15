const showText = document.querySelector('.show-text');
let i = 0;

setInterval(() => {
    if(i === textFields.length){
        i =0;
    }
    showText.innerText = textFields[i];
    i++;
}, 300)