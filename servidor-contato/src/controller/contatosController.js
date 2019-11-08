const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};
//  CONVERSOR DE DATA
const conversorData = (dataString) => {
  const dia = dataString.split("/")[0]
  const mes = dataString.split("/")[1]
  const ano = dataString.split("/")[2]

  const dataFormatada = new Date(ano, mes, dia)
  return dataFormatada
}

// FUNCAO DO SIGNO
function signo(request, response) {
  let obj = request.body
  let dataConvertida = conversorData(obj.dataNascimento)
  if (obj.dataNascimento == dataConvertida) {
    response.status(200).send("Olá" + obj.nome + "Seu signo é: " + "Aries. ")
  } else {
    response.status(400).send("Erro")
  }
}

// CADASTRO post
const add = (request, response) => {
  let baseDados = model.agenda.contatos
  let contato = request.body
  contato.id = Math.random().toString(36).substr(-8)//Criando ID UNICO
  if (!contato.nome || !contato.dataNascimento || !contato.celular) {
    response.status(400).send("Dados inválidos");
  } else {
    if (baseDados.find(dado => dado.nome === contato.nome)) {
      response.status(400).send("Contato já cadastrado")
    } else {
      model.agenda.contatos.push(contato)
      response.status(201).send(signo)
    }
  }

}
// O que fazer?
// - linkar data de nascimento com o signo (Fazer umanova funcao);
// - Depois de cadastrado linkar esta funcão nova  na função principal conforme propriedade dataNascimento.


module.exports = {
  getAll,
  add
}

