const somar = document.querySelector('#resultado');
const botao = document.querySelector('.botao');
const fechar = document.querySelector('.fechar')



function calcularSoma() {
   
    let inputOne = parseFloat(document.querySelector(".inputOne").value);
    let inputTwo = parseFloat(document.querySelector(".inputTwo").value);
    let inputTres = parseFloat(document.querySelector(".inputTres").value);
    let inputQuatro = parseFloat(document.querySelector(".inputQuatro").value);
    let inputQuinto = parseFloat(document.querySelector(".inputQuinto").value);
    
    //soma notas;

    let soma = (inputOne + inputTwo + inputTres + inputQuatro + inputQuinto) / 5;

    //Id Resultado
    let resultadoFinal = document.getElementById("resultado").textContent = " " + soma;

}



botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    let modal = document.querySelector('.modal');
    let fechar = document.querySelector('.fechar');

    if (modal.style.display = 'd-none') {
        modal.classList.add('d-block');
        calcularSoma()
    }
})

fechar.addEventListener("click", function () {
    let modal = document.querySelector('.modal');
    if (modal.style.display = 'd-block'); {
        modal.classList.remove('d-block');
    }

})



/*
//Mudança de Cores conforme o Resultado
   let trocarCor = document.querySelector('.cor-change');
   const valor = 500;
 
treino teste if(soma >= 0 && soma <= 500){
       trocarCor.style.backgroundColor = 'red';
   }if(soma >= 500 && soma <= 800){
       trocarCor.style.backgroundColor = 'blue';
   }else{
       trocarCor.style.backgroundColor = 'black';
   }*/



