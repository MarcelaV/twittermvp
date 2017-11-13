window.onload = function () {

    //Solo para nombrar los elementos del HTML
    var sendButton = document.getElementsByName("enviar")[0];//se rescata con posición por que en html es un elemento name, lo que lo transforma en un array.
    var thinkInput = document.getElementsByName("pensamiento")[0];
    var timeLine = document.getElementsByName("timeline")[0];
  

    thinkInput.onkeydown = function(e){ //función que cuenta los caracteres
        // console.log(e)
        var total_caracter = 140;
        var carcateres = thinkInput.value.length;//.value rescata el valor del elemento.
        var caracter_restante = total_caracter - carcateres;
        //FUNCIÓN PARA HACER QUE EL BOTÓN SE DESACTIVE
        var camposValidos = caracter_restante;
        var botonEnviar = document.getElementsByName("enviar")[0];
        var styles = total_caracter;

            if (camposValidos == false) {
                botonEnviar.disabled = true;
            }
            else if (botonEnviar.disabled = false){
                
            }

            else if (total_caracter >=15 && total_caracter <=20) {
                document.getElementById("contador_text").value.styles.backgroundColor = "blue";
            }else (total_caracter >=5 && total_caracter <=7) 
                document.getElementById("contador_text").value.styles.backgroundColor = "orange";
}

    
    thinkInput.onkeyup = function(){

        var total_caracter = 140;
        var carcateres = thinkInput.value.length;
        var caracter_restante = total_caracter - carcateres;

        document.getElementById('contador_text').innerHTML = caracter_restante
    }


    sendButton.onclick = function() {
        if (thinkInput.value == "") {
            alert("Debes ingresar al menos un carácter");
        } else {

            //creo cajas, hasta ahora vacías, para alojar 
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");


            //asigno padres a mis elementos
            tuitDiv.appendChild(nameSpan);
            "<br>"
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "twitt"



            nameSpan.textContent = "Marcela Vilches: ";//n
            "<br>"
            dateSpan.textContent = new Date();
            tuitP.textContent = thinkInput.value;

            thinkInput.value = "";


            /* Usamos timeLine.children para obtener los hijos
             del nodo, este siempre es un arreglo, aunque venga
             vacío. 
             YYYYYYYY... como insertBefore recibe dos parámetros y
             el segundo es opcional, si el primer nodo no existe en 
             el arreglo children, entonces nos dará undefined. Y eso hará 
             que insertBefore agregue el nodo al último */
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);

        }
    }
}





        // if(carcateres >= total_caracter){ ESTO SIRVE PARA DETENER EL CONTADORSH EN 0 Y QUE NO SIGA EN NEGATIVO
        //     return true;
        // } 

        // if else(carcateres >= 0){
    
        //     document.getElementsByName("enviar").disabled = true;
        // } 
       

        

// textarea.addEventListener("input", function(){
//   num.setAttribute("value", 140 - textarea.value.length)
// var styles = num.style
//   if (num.value > 30 && num.value <=140) {
//     styles.color = "#0DE8D2"
//   }else if (num.value >20 && num.value <=30) {
//     styles.color = "blue"
//   }else if (num.value >0 && num.value <=20) {
//     styles.color = "orange"
//   }else{
//     styles.color = "red"
//   }
// }