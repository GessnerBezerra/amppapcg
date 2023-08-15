let loginUsuario = window.sessionStorage.getItem("usuarioLogado");
let user: Element | null = document.querySelector(
  "#userHome"
) as HTMLFormElement;

let dataStorage: Driver[] = JSON.parse(localStorage.getItem("dados-usuario") || "[]");

let userNome: string = "";
let userEmail: string = "";
let indiceUser: string = "";
let dadosUser: Driver;

let formUsuario = document.querySelector("#formCadastrUsuario") as HTMLFormElement;

let DadosDriver = document.querySelector("#formUser") as HTMLDivElement;

let botaoSairUser = document.querySelector("#botaoSairUser") as HTMLButtonElement;

let cardDadosUser = document.querySelector("#row-cardUser") as HTMLDivElement;

// if(usuarioEmail != 'teste123@gmail.com'){
//   alert("Pagina restrita!");
//   window.location.href = "../usuario.html";
// }

 let existe: boolean = dataStorage.some((usuario) => {
        return usuario.login === loginUsuario;
    });

if (existe){
for (let usuario of dataStorage) {
  if (usuario.login == loginUsuario) {
    userNome = usuario.nome;
    userEmail = usuario.login;
    dadosUser = usuario;
  }
}
}
else{
    alert("Você deve logar antes!");
    window.location.href = "../index.html";
  }

  // salvarNaTabela(listaDriver);
  user.innerHTML = `Bem vindo: <strong id="userHome2">${userNome}</strong>`;

document.addEventListener("DOMContentLoaded", () => {
  
  salvarNoCardUser(dadosUser);
});

botaoSairUser.addEventListener("click", logOutUser);

function logOutUser(): void {
  window.sessionStorage.removeItem("usuarioLogado");
  window.sessionStorage.removeItem("usuarioAdm");
  window.sessionStorage.removeItem("dados-usuario");
  window.location.href = "../index.html";
}

function salvarNoCardUser(dadosdriver: Driver) {

      let indcString = dadosdriver.id;
      let indcNumber = +indcString;
      indcNumber++;
      // indcString = indcNumber.toString();
      // dadosdriver.id = indcString;
      // window.localStorage.setItem(
      //   "dados-usuario",
      //   JSON.stringify(dataStorage)
      // );

      
      let sectionCard = document.createElement("section");
      // let divCardTtl = document.createElement("div");
      let divCardTRst = document.createElement("div");
      let divCardNome = document.createElement("div");
      let divCardIdade = document.createElement("div");
      let divCardCpf = document.createElement("div");
      let divCardRua = document.createElement("div");
      let divCardnumRua = document.createElement("div");
      let divCardBairro = document.createElement("div");
      let divCardCidade = document.createElement("div");
      let divCardFone = document.createElement("div");
      let divCardCnh = document.createElement("div");
      let divCardcategCnh = document.createElement("div");
      let divCardDataCnh = document.createElement("div");
      let divCardValidadeCnh = document.createElement("div");
      let divCardModlCarro = document.createElement("div");
      let divCardCorCarro = document.createElement("div");
      let divCardAnoCarro = document.createElement("div");
      let divCardPlacaCarro = document.createElement("div");
      let divCardAcao = document.createElement("div");
      let labelRegistro = document.createElement("label");
      let registro = document.createElement("p");
      let labelNome = document.createElement("label");
      let nome = document.createElement("p");
      let labelIdade = document.createElement("label");
      let idade = document.createElement("p");
      let labelCpf = document.createElement("label");
      let cpf = document.createElement("p");
      let labelRua = document.createElement("label");
      let rua = document.createElement("p");
      let labelNumRua = document.createElement("label");
      let numRua = document.createElement("p");
      let labelBairro = document.createElement("label");
      let bairro = document.createElement("p");
      let labelCidade = document.createElement("label");
      let cidade = document.createElement("p");
      let labelFone = document.createElement("label");
      let fone = document.createElement("p");
      let labelCnh = document.createElement("label");
      let cnh = document.createElement("p");
      let labelcategCnh = document.createElement("label");
      let categCnh = document.createElement("p");
      let labelDataCnh = document.createElement("label");
      let dataCnh = document.createElement("p");
      let labelvalidadecnh = document.createElement("label");
      let validadecnh = document.createElement("p");
      let labelmodlCarro = document.createElement("label");
      let modlCarro = document.createElement("p");
      let labelcorCarro = document.createElement("label");
      let corCarro = document.createElement("p");
      let labelAnoCarro = document.createElement("label");
      let anoCarro = document.createElement("p");
      let labelPlacaCarro = document.createElement("label");
      let placaCarro = document.createElement("p");
      let labelAcao = document.createElement("label");
      let acoes = document.createElement("td");

      // divCardTtl.setAttribute("class", "titulo-card");
      divCardTRst.setAttribute("class", "registro");
      divCardNome.setAttribute("class", "nome");
      divCardIdade.setAttribute("class", "idade");
      divCardCpf.setAttribute("class", "cpf");
      divCardRua.setAttribute("class", "rua");
      divCardnumRua.setAttribute("class", "numrua");
      divCardBairro.setAttribute("class", "bairro");
      divCardCidade.setAttribute("class", "cidade");
      divCardFone.setAttribute("class", "fone");
      divCardCnh.setAttribute("class", "cnh");
      divCardcategCnh.setAttribute("class", "categCnh");
      divCardDataCnh.setAttribute("class", "datacnh");
      divCardValidadeCnh.setAttribute("class", "validadecnh");
      divCardModlCarro.setAttribute("class", "modlcarro");
      divCardCorCarro.setAttribute("class", "corcarro");
      divCardAnoCarro.setAttribute("class", "anocarro");
      divCardPlacaCarro.setAttribute("class", "placacarro");
      divCardAcao.setAttribute("class", "acoes");

      divCardTRst.appendChild(labelRegistro);
      divCardTRst.appendChild(registro);

      divCardNome.appendChild(labelNome);
      divCardNome.appendChild(nome);

      divCardIdade.appendChild(labelIdade);
      divCardIdade.appendChild(idade);

      divCardCpf.appendChild(labelCpf);
      divCardCpf.appendChild(cpf);

      divCardRua.appendChild(labelRua);
      divCardRua.appendChild(rua);

      divCardnumRua.appendChild(labelNumRua);
      divCardnumRua.appendChild(numRua);

      divCardBairro.appendChild(labelBairro);
      divCardBairro.appendChild(bairro);

      divCardCidade.appendChild(labelCidade);
      divCardCidade.appendChild(cidade);

      divCardFone.appendChild(labelFone);
      divCardFone.appendChild(fone);

      divCardCnh.appendChild(labelCnh);
      divCardCnh.appendChild(cnh);

      divCardcategCnh.appendChild(labelcategCnh);
      divCardcategCnh.appendChild(categCnh);

      divCardDataCnh.appendChild(labelDataCnh);
      divCardDataCnh.appendChild(dataCnh);

      divCardValidadeCnh.appendChild(labelvalidadecnh);
      divCardValidadeCnh.appendChild(validadecnh);

      divCardModlCarro.appendChild(labelmodlCarro);
      divCardModlCarro.appendChild(modlCarro);

      divCardCorCarro.appendChild(labelcorCarro);
      divCardCorCarro.appendChild(corCarro);

      divCardAnoCarro.appendChild(labelAnoCarro);
      divCardAnoCarro.appendChild(anoCarro);

      divCardPlacaCarro.appendChild(labelPlacaCarro);
      divCardPlacaCarro.appendChild(placaCarro);

      divCardAcao.appendChild(labelAcao);
      divCardAcao.appendChild(acoes);

      sectionCard.appendChild(divCardTRst);
      // sectionCard.appendChild(divCardTtl);
      sectionCard.appendChild(divCardNome);
      sectionCard.appendChild(divCardIdade);
      sectionCard.appendChild(divCardCpf);
      sectionCard.appendChild(divCardRua);
      sectionCard.appendChild(divCardnumRua);
      sectionCard.appendChild(divCardBairro);
      sectionCard.appendChild(divCardCidade);
      sectionCard.appendChild(divCardFone);
      sectionCard.appendChild(divCardCnh);
      sectionCard.appendChild(divCardcategCnh);
      sectionCard.appendChild(divCardDataCnh);
      sectionCard.appendChild(divCardValidadeCnh);
      sectionCard.appendChild(divCardModlCarro);
      sectionCard.appendChild(divCardCorCarro);
      sectionCard.appendChild(divCardAnoCarro);
      sectionCard.appendChild(divCardPlacaCarro);
      sectionCard.appendChild(divCardAcao);

      cardDadosUser.appendChild(sectionCard);

      sectionCard.setAttribute("class", "card");

      if(indcNumber%2==0){
        sectionCard.setAttribute('style', 'background: linear-gradient(to right,rgba(144, 203, 44, 0.8),rgba(144, 203, 44, 0.6))');
      }
      if(indcNumber%2!=0){
        sectionCard.setAttribute('style', 'background: linear-gradient(to right,rgba(44 203 190 / 80%),rgba(73, 44, 203, 0.6))');
      }

      labelRegistro.setAttribute("id", dadosdriver.id);
      labelRegistro.innerHTML = `Id: `;
      registro.innerHTML = dadosdriver.id;
      labelNome.innerHTML = `Motorista: `;
      nome.innerHTML = dadosdriver.nome;
      labelIdade.innerHTML = `Idade: `;
      idade.innerHTML = dadosdriver.idade;
      labelCpf.innerHTML = `CPF : `;
      cpf.innerHTML = dadosdriver.cpf;
      labelRua.innerHTML = `Rua: `;
      rua.innerHTML = dadosdriver.rua;
      labelNumRua.innerHTML = `Nº Rua: `;
      numRua.innerHTML = dadosdriver.numRua;
      labelBairro.innerHTML = `Bairro: `;
      bairro.innerHTML = dadosdriver.bairro;
      labelCidade.innerHTML = `Cidade: `;
      cidade.innerHTML = dadosdriver.cidade;
      labelFone.innerHTML = `Fone: `;
      fone.innerHTML = dadosdriver.fone;
      labelCnh.innerHTML = `CNH: `;
      cnh.innerHTML = dadosdriver.cnh;
      labelcategCnh.innerHTML = `Ctg CNH: `;
      categCnh.innerHTML = dadosdriver.categCnh;
      labelDataCnh.innerHTML = `Emissão: `;
      dataCnh.innerHTML = dadosdriver.dataCnh;
      labelvalidadecnh.innerHTML = `Vld CNH: `;
      validadecnh.innerHTML = dadosdriver.validadecnh;
      labelmodlCarro.innerHTML = `Mdl Veículo: `;
      modlCarro.innerHTML = dadosdriver.modlCarro;
      labelcorCarro.innerHTML = `Cor Veículo: `;
      corCarro.innerHTML = dadosdriver.corCarro;
      labelAnoCarro.innerHTML = `Ano Veículo: `;
      anoCarro.innerHTML = dadosdriver.anoCarro;
      labelPlacaCarro.innerHTML = `Placa :`;
      placaCarro.innerHTML = dadosdriver.placa;
      labelAcao.innerHTML = `Ações: `;
      acoes.innerHTML = `
             <td><button type="button" value="" class="inf_botao" onclick="prepararEdicaoUser(${dadosdriver})" id="inf_botao_editar">Editar</button></td>
             <td><button type="button" value="" class="inf_botao" onclick="apagarRegistroUser(${dadosdriver})" id="inf_botao_apagar">apagar</button></td>
                                     `;
    }
  
function prepararEdicaoUser(dadosdriver: Driver) {
  BotnSalvarMdl.setAttribute("style", "display:none");
  // botaoSalvar.setAttribute("style", "display: none");
  botaoAtualizar.setAttribute("style", "display: inline-block");
  botaoAtualizar.setAttribute("onclick", `atualizarRegistro(${dadosdriver})`);
  botaoCancelar.setAttribute("style", "display: inline-block");
  botaoCancelar.setAttribute("onclick", `cancelarEdicao()`);
  

inputNome.value = dadosdriver.nome;
inputIdade.value = dadosdriver.idade;
inputCpf.value = dadosdriver.cpf;
inputLogin.value = dadosdriver.login;
inputSenha.value = dadosdriver.senha;
inputRua.value = dadosdriver.rua;
inputNumRua.value = dadosdriver.numRua;
inputBairro.value = dadosdriver.bairro;
inputCidade.value = dadosdriver.cidade;
inputFone.value = dadosdriver.fone;
inputCnh.value = dadosdriver.cnh;
inputCatCnh.value = dadosdriver.categCnh;
inputDataCnh.value = dadosdriver.dataCnh;
inputValidCnh.value = dadosdriver.validadecnh;
inputModCarro.value = dadosdriver.modlCarro;
inputCorCarro.value = dadosdriver.corCarro;
inputAnoCarro.value = dadosdriver.anoCarro;
inputPlaca.value = dadosdriver.placa;

ModalCadastr.show();

  // inputNome.value = listaDriver[registroID].nome;
  // inputIdade.value = listaDriver[registroID].detalhamento;
}

function atualizarRegistroUser(dadosdriver: Driver) {

  let idCadastro = dadosdriver.id;
  let idNumber = +idCadastro;
  // let idNumber2 = +idCadastro;
  // idNumber++;
  // idCadastro = idNumber.toString();
  
  let nomeCadastro = inputNome.value;
  let idadeCadastro = inputIdade.value;
  let cpfCadastro = inputCpf.value;
  let loginCadastro = inputLogin.value;
  let senhaCadastro = inputSenha.value;
  let ruaCadastro = inputRua.value;
  let numeroruaCadastro = inputNumRua.value;
  let bairroCadastro = inputBairro.value;
  let cidadeCadastro = inputCidade.value;
  let foneCadastro = inputFone.value;
  let cnhCadastro = inputCnh.value;
  let catcnhCadastro = inputCatCnh.value;
  let dataCnhCadastro = inputDataCnh.value;
  let validCnhCadastro = inputValidCnh.value;
  let modlCarroCadastro = inputModCarro.value;
  let corCarroCadastro = inputCorCarro.value;
  let anoCarroCadastro = inputAnoCarro.value;
  let placaCadstro = inputPlaca.value;

  let DriverEditado: Driver = {
    id: idCadastro,
    nome: nomeCadastro,
    idade: idadeCadastro,
    cpf: cpfCadastro,
    login:  loginCadastro, 
    senha: senhaCadastro, 
    placa: placaCadstro,
    rua: ruaCadastro,
    numRua: numeroruaCadastro,
    bairro: bairroCadastro,
    cidade: cidadeCadastro,
    fone: foneCadastro,
    cnh: cnhCadastro,
    categCnh: catcnhCadastro,
    dataCnh: dataCnhCadastro,
    validadecnh: validCnhCadastro,
    modlCarro: modlCarroCadastro,
    corCarro: corCarroCadastro,
    anoCarro: anoCarroCadastro,
  };

  

  // let recadoEditado = listaUsuarios[registroID];

  
  // recadoEditado.nome = inputNome.value;
  // recadoEditado.idade = idadeCadastro;
  // recadoEditado.cpf = cpfCadastro;
  // recadoEditado.login = loginCadastro;
  // recadoEditado.senha = senhaCadastro;
  // recadoEditado.rua = ruaCadastro;
  // recadoEditado.numRua = numeroruaCadastro;
  // recadoEditado.bairro = bairroCadastro;
  // recadoEditado.cidade = cidadeCadastro;
  // recadoEditado.fone = foneCadastro;
  // recadoEditado.cnh = cnhCadastro;
  // recadoEditado.categCnh = catcnhCadastro;
  // recadoEditado.dataCnh = dataCnhCadastro;
  // recadoEditado.validadecnh = validCnhCadastro;
  // recadoEditado.modlCarro = modlCarroCadastro;
  // recadoEditado.corCarro = corCarroCadastro;
  // recadoEditado.anoCarro = anoCarroCadastro;
  // recadoEditado.placa = placaCadstro;

  dataStorage.splice(idNumber, 1, DriverEditado);
  window.localStorage.setItem("dados-usuario", JSON.stringify(listaUsuarios));
  window.location.reload();
}

function apagarRegistroUser(dadosdriver: Driver): void {
  let indcString = dadosdriver.id;
  let indcNumber = +indcString;
  let indcNumber2 = +indcString;
  indcNumber2--;

  msgModal.innerHTML = `Tem certeza que deseja remover o recado de registro ID ${indcNumber}?`;
  ModalApaga.show();

  let Apagardriver = document.querySelector(
    "#ApagarRecados"
  ) as HTMLButtonElement;

    // let confirma:boolean=true;
  Apagardriver.addEventListener("click", () => {
    dataStorage.splice(indcNumber2, 1);
    
    // confirma = false;
    
    salvarNoStorage(listaUsuarios);
    window.location.reload();
    
  });

};