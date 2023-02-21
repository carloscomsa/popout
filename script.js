function manipulareSubscribe(){
    const container = document.querySelector(".container")

    //Versiunea 1
    /*const propozitie = "<h2>Congratulations for your Subscribiton! You won't be sorry for your decision.</h2>";
    container.innerHTML = propozitie;*/

    //Versiunea 2
    const titlu = document.createElement("h2");
    titlu.textContent = "Congratulations for your Subscribiton! You won't be sorry for your decision."
    container.appendChild(titlu)
}

function manipulareNoThanks(){

    const container = document.querySelector(".container");
    container.style.display = "none";
    
}