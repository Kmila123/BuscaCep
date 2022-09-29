const cep = document.getElementById("cep");
cep.addEventListener("blur",function(e){
    let cep = document.getElementById("cep").value;
    let car = cep.replace('-','');
    fetch(`https://viacep.com.br/ws/${car}/json/`).then(function(response){
        response.json().then(data => {
            console.log(data);
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("localidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;
        } )
    })
} )
function enviar (){
   let bairro =  document.getElementById("bairro").value;
   let logradouro = document.getElementById("logradouro").value ;
   let localidade = document.getElementById("localidade").value;
   let uf=  document.getElementById("uf").value ;
   let json = {
    "bairro" : bairro,
    "logradouro" : logradouro,
    "localidade" : localidade ,
    "uf" : uf
   }
   console.log(json);
};
