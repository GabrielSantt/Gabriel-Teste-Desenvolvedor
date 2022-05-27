
let numero= $('#valor')
let memoria= [];
let res = document.getElementById('resultado')
let valores = document.getElementById('valores')

function teste(){//coleta os dados e armazena dentro do array
    
   let valor= numero.val();
   memoria.push(valor);
   valores.innerHTML =`Você inseriu os números: `  + memoria; //mostra os dados coletados
   numero.val('')
}


function ordenação(a,b){
   return a-b
}

function escreve(){ //apresenta os dados na ordem crescente
   let down = res.innerHTML = `Colocando em ordem ficam:  ` + memoria.sort(ordenação)+ `.`;
}
function limpar(){
   res.innerHTML =''
   valores.innerHTML =''
   memoria.splice('') //Apaga dados do array
}
 
 function salvar() { //Download dos dados 
    
  
let blob = new Blob([JSON.stringify(memoria)], { type: "text/plain;charset=utf-8" });
    saveAs(blob,  "Números em ordem");

    
 }