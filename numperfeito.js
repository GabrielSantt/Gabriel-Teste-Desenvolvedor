let input = document.getElementById('input')


function verificar(){
    let ress = document.getElementById('ress')
    let valor= input.value 

    if(valor == ""){
        ress.innerHTML= 'Por favor, digite um número no campo acima.'
        input.focus()
        return input
    }

    function numeroPerfeito(valor) {
        let sum = 0;
      
        for (let x = 1; x <= (valor / 2); x++) {
          if (!(valor % x)) {
            sum += x;
          }
        }
      
        return sum == valor;
        }
        
       
    let texto = ress.innerHTML= numeroPerfeito(valor)
    
    if(texto == true){
        ress.innerHTML=  valor +' é um número  perfeito, pois a soma dos seus divisores é igual a ele mesmo.'
            
    }else{
        ress.innerHTML=  valor +' não é um número perfeito. Por favor insira outro número!'
    }
    input.value='';
}

function liimpar(){
    input.value='';
    ress.innerHTML= ''
}
