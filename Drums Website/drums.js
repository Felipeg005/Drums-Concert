
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`kbd[data-key="${e.keyCode}"]`);
    if (!audio){
        return;
    }else {
        audio.currentTime=0;
        audio.play();
        key.classList.add("playing");
    }
}

function removeTransition(e){
    if (e.propertyName !== "transform"){
        return;
    } else{
        this.classList.remove("playing");
    }
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll("kbd");
keys.forEach(key => key.addEventListener("transitionend", removeTransition ));