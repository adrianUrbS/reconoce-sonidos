var sonidos = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/XI_Awx3Ed/model.json", listo);
navigator.mediaDevices.getUserMedia({ audio: true });

function listo() {
    console.log("estoy listo");
    sonidos.classify(respuesta);
}

function respuesta(error, resultados) {
    if (!error) {
        console.log(resultados);
       var sonido = resultados[0].label;
        imagen1 = document.getElementById("img1");
        imagen2 = document.getElementById("img2");
        imagen3 = document.getElementById("img3");
        imagen4 = document.getElementById("img4");
        if (sonido == "Ruido de fondo") {
            imagen1.src = "hamilton.gif";
            imagen2.src = "snorlas.png";
            imagen3.src = "anya.png";
            imagen4.src = "panda_minecraft.png";
        }
        else if (sonido == "aplausos") {
            imagen1.src = "hamilton.png";
            imagen2.src = "snorlax.gif";
            imagen3.src = "anya.png";
            imagen4.src = "panda_minecraft.png";
        }
       else if (sonido == "chiflido") {
            imagen1.src = "hamilton.png";
            imagen2.src = "snorlas.png";
            imagen3.src = "anya.gif";
            imagen4.src = "panda_minecraft.png";
        }
        else if (sonido == "ritmo con la mesa") {
            imagen1.src = "hamilton.png";
            imagen2.src = "snorlas.png";
            imagen3.src = "anya.png";
            imagen4.src = "panda.gif";
        }
    }
}