function tabuada(){
    let num= window.document.getElementById('txtn')
    let tab= window.document.getElementById('gerar')
    if(num.value.lenght == 0 || num.value =="" ){
        window.alert('Por Favor, digite um número!')    
    } else{
        let n= Number(num.value)
        let c= 1
        tab.innerHTML=''
        while(c<=10){
            let item= document.createElement('option')
            item.text= `${n} x ${c} = ${ n*c}`
            tab.appendChild(item)
            c++
            
        }
    }
    num.value='';
}
