const BtnReset = document.querySelector('#BtnReset');
const BtnCalc = document.querySelector('#BtnCalc');

 function Classificar(imc){
    let classificacao = '';

    if (imc <= 18.5){
        classificacao = 'Abaixo do peso';

    }
    else if (18.6 <= imc && imc < 25){
        classificacao = 'Normal';

    }
    else if (25 <= imc && imc < 30){
        classificacao = 'Sobrepeso';

    }
    else if (30 <= imc && imc < 35){
        classificacao = 'Obesidade 1';

    }
    else if (35 <= imc && imc < 40){
        classificacao = 'Obesidade 2';

    }
    else if (40 <= imc && imc < 200){
        classificacao = 'Obesidade 3';
    }

    else {classificacao = 'Digita namoral garai'}

     return classificacao;
}

 function Calcular(){
    let Peso = parseInt(document.querySelector('#iPeso').value);
    let Alt = parseInt(document.querySelector('#iAlt').value);
    let imc = Math.round((Peso/(Alt*Alt))*100000)/10;
    if(isNaN(Peso) && isNaN(Alt)){
        document.querySelector('#ResultIMC').textContent ='Ambos os valores indefinidos';
    }
    else if (isNaN(Peso) &&  typeof(Alt) == 'number'){
        document.querySelector('#ResultIMC').textContent ='Valor do peso indefinido';
    }
    else if(isNaN(Alt) &&  typeof(Peso) == 'number'){
        document.querySelector('#ResultIMC').textContent ='Valor da altura indefinido';
    }
    else{
        document.querySelector('#ResultIMC').textContent = imc + ' - ' + Classificar(imc);
    }
    
}

 function Resetar(){
    document.querySelector('#iPeso').value = '';
    document.querySelector('#iAlt').value = '';
}

BtnCalc.addEventListener('click',Calcular());   
BtnReset.addEventListener('click',Resetar());