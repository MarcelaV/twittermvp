window.onload = function() {
    /*Esto es porque soy flojo, getElements... entrega arreglo y 
    solo queremos el primero de sus elementos que retorna porque 
    sabemos que existe al menos uno*/
    var sendButton = document.getElementsByName("enviar")[0];//se rescata con posiciones por que sta con clases no con id
    var thinkInput = document.getElementsByName("pensamiento")[0];
    var timeLine = document.getElementsByName("timeline")[0];//solo trae del html al js
    // var valor = thinkInput.value;
    // var contador = valor.length;

  

    thinkInput.onkeydown = function(e){ //función que cuenta los caracteres
        console.log(e)
        var total_caracter = 20;
        var carcateres = thinkInput.value.length;//.value me rescata lo que escribe el usuario
        var caracter_restante = total_caracter - carcateres;
        if(carcateres >= total_caracter && e.key != 'Backspace'){
            return false;
        } 
    }

    thinkInput.onkeyup = function(){

        var total_caracter = 20;
        var carcateres = thinkInput.value.length;
        var caracter_restante = total_caracter - carcateres;

        console.log(caracter_restante);
        document.getElementById('contador_text').innerHTML = caracter_restante
    }

    sendButton.onclick = function() {
        if (thinkInput.value == "") {
            alert("Debes ingresar al menos un carácter");
        } else {


            //creo mis elementos que son necesarios
            var tuitDiv = document.createElement("div");//cree mi elemento contenedor
            var nameSpan = document.createElement("span");//creo mi span mi usuario
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
                // var count = thinkInput.length

            //asigno padres a mis elementos    
            tuitDiv.appendChild(nameSpan);//asigno padres
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "twitt"



            nameSpan.textContent = "Usuario";
            dateSpan.textContent = new Date();
            tuitP.textContent = thinkInput.value;

            thinkInput.value = "";

            /* Usamos timeLine.children para obtener los hijos
             del nodo, este siempre es un arreglo, aunque venga
             vacío. 
             YYYYYYYY... como insertBefore recibe dos parámetros y
             el segundo es opcional, si, el primer nodo no existe en 
             el arreglo children, entonces nos dará undefined. Y eso hará 
             que insertBefore agregue el nodo al último */
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
        }
    }
}