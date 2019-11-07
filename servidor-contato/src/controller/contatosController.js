const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const add = (request, response) =>{
 let teste1 = model.agenda.contatos
 let nome = request.body.nome
  let contato = request.body
  
  // let adicionar = model.agenda.contatos.push(contato)

  for(let i=0 ; i < teste1.lenght; i++){
    console.log(teste1[i])
    if ( nome == teste){
      console.log("ta dando certo mulher")
    } else{
      console.log("Erro")
    }
  }
  
  // contato.id = Math.random().toString(36).substr(-8)// CRIANDO ID NO POST 

  response.status(200).send()

}

module.exports = {
  getAll,
  
  add
}

