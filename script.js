var qrdata = document.querySelector('#qr-data'); 
var data = qrdata.value   

var qrcode = new QRCode(document.getElementById('qrcode'))

function generateQR(){
    var data = qrdata.value
    qrcode.makeCode(data);
};

function enviarContenido(){
    var input1 = document.querySelector('#input1');
    var input2 = document.querySelector('#input2');
    var input3 = document.querySelector('#input3');
    var input4 = document.querySelector('#input4');
    var input5 = document.querySelector('#input5');
    var input6 = document.querySelector('#input6');
    var input7 = document.querySelector('#input7');

    console.log(input1.value);
    console.log(input2.value);
    console.log(input3.value);
    console.log(input4.value);
    console.log(input5.value);
    console.log(input6.value);
    console.log(input7.value);


    qrdata.textContent = ("Medicamento: " + input1.value)+("\n")
    + ("Dosis/dia(mg): " + input2.value)+("\n")
    + ("Tomas Por Dia: " + input3.value)+("\n")
    + ("Dosis/Horas(mg): " + input4.value)+("\n")
    + ("Duracion de TTO: " + input5.value)+("\n")
    + ("Fecha De Inicio: " + input6.value)+("\n")
    + ("Fecha De Finalizacion: " + input7.value);


    if(!input1.value){
        alert("No has escrito el Medicamento")
    }if(!input2.value){
        alert("No has escrito la Dosis7dia(mg)")
    }if(!input3.value){
        alert("No has escrito las Tomas Por Dia")
    }if(!input4.value){
        alert("No has escrito la Dosis/Horas(mg)")
    }if(!input5.value){
        alert("No has escrito la Duracion de TTO")
    }if(!input6.value){
        alert("No has escrito la Fecha De Inicio")
    }if(!input7.value){
        alert("No has escrito la Fecha De Finalizacion")
    }

}