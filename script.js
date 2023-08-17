const somar = document.querySelector('#resultado')

function calcularSoma(){
   
   //variaveis das notas
    let inputOne = parseFloat(document.querySelector(".inputOne").value);
    let inputTwo = parseFloat(document.querySelector(".inputTwo").value);
    let inputTres = parseFloat(document.querySelector(".inputTres").value);
    let inputQuatro = parseFloat(document.querySelector(".inputQuatro").value);
    let inputQuinto = parseFloat(document.querySelector(".inputQuinto").value);
    
    
   
    //soma notas;
    let soma = inputOne + inputTwo + inputTres + inputQuatro + inputQuinto / 5;//somar todos e dividir por 5
   
    //Id Resultado
    let resultadoFinal = document.getElementById("resultado").textContent = "resultado " + soma;

    //Mudança de Cores conforme o Resultado
   
    let trocarCor = document.querySelector('.cor-change');
    const valor = 500;
   
    /*if(soma >= 0 && soma <= 500){
        trocarCor.style.backgroundColor = 'red';
    }if(soma >= 500 && soma <= 800){
        trocarCor.style.backgroundColor = 'blue';
    }else{
        trocarCor.style.backgroundColor = 'black';
    }*/
}


const botao = document.querySelector('.btnn');
botao.addEventListener("click", function(){
    let modal = document.querySelector('.modal');
    let fechar = document.querySelector('.fechar');
    modal.style.display = 'block';
})

const fechar = document.querySelector('.fechar')

fechar.addEventListener("click", function(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
})