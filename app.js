// const keyboardNumbers = document.getElementsByClassName('keyboard-numbers');
const operaciones = document.querySelectorAll('.operaciones');
const nums = document.querySelectorAll('.num');

const btnIzquierda = document.querySelectorAll('.btn-limpieza');

const displayOperacion = document.getElementById('display-operacion');
const displayResultado = document.getElementById('display-resultado');

const igual = document.getElementById('btn-equal');


console.log(displayResultado)


function agregarNumeros(numero){
    if(!isNaN(numero)){
        displayOperacion.value += numero;
    } 
}

function agregarSignos(simbolo){
    let valorDisplay = displayOperacion.value.length;
    console.log(displayOperacion.value.length)
    if(displayOperacion.value[valorDisplay - 1] === '/' ||
        displayOperacion.value[valorDisplay - 1] === 'x' ||
        displayOperacion.value[valorDisplay - 1] === '-' ||
        displayOperacion.value[valorDisplay - 1] === '+'){
        
    } else{
        displayOperacion.value += simbolo;
    }
}

function subirNumeros(){
    displayResultado.value += displayOperacion.value;
}


function calcularResultado() {
    try {
        let expresion = displayOperacion.value || '';
        expresion = displayOperacion.value.replace(/x/g, '*');
        
        if(expresion === ''){
            displayResultado.value = '';
        } else{
            const funcionEval = new Function(`return ${expresion};`);
            const resultado = funcionEval();
            displayResultado.value = resultado;
        }

    } catch (error) {
        displayResultado.value = 'Error';
    }
}

function borrarOperacion() {
    displayOperacion.value = '';
}

function borrarTodo(){
    displayOperacion.value = '';
    displayResultado.value = '';
}

function borrarDeUno(){
    let valorActual = displayOperacion.value;
    let valorNuevo = valorActual.substring(0, valorActual.length - 1);
    displayOperacion.value = valorNuevo;
}

// Eventos
for(let num of nums){
    num.addEventListener('click', (e)=> {
        if(displayOperacion.value.length < 10){
            let numero = e.target.innerText;
            agregarNumeros(numero);
        }
    });
}

for(let operacion of operaciones){
    if(displayOperacion.value.length < 10){
        operacion.addEventListener('click', ()=>{
            operacion.innerText
            agregarSignos(operacion.innerText);
        });
    }
}

igual.addEventListener('click',()=>{
  calcularResultado();
  console.log('hola')  
} );

for(let btn of btnIzquierda){
    btn.addEventListener('click', ()=>{
        switch(btn.innerText){
            case 'X':
                borrarDeUno();
                break;
            case 'C':
                borrarOperacion();
                break;
            case 'CE':
                borrarTodo();
                break;
        }
    });
}

// window.setInterval(calcularResultado, 1000);





