function popUPOpen(){
    const popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.style.display = 'block';
    document.body.style.overflow = "hidden";
}

const myTimeOut = setTimeout(popUPOpen,5000);

function popUPClose(){
    const popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.style.display = 'none';
    document.body.style.overflow = "auto";
}

document.addEventListener('change',function(){
    this.body.classList.toggle("dark-mode")
})