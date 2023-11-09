let loginUsuario = window.sessionStorage.getItem("usuarioLogado");
let user: Element | null = document.querySelector(
  "#userHome"
) as HTMLFormElement;

let dataStorage: Driver[] = JSON.parse(localStorage.getItem("dados-usuario") || "[]");

let userNome: string = "";
let userEmail: string = "";
let indiceUser: string = "";
let dadosUser: Driver;

// let formUsuario = document.querySelector("#formCadastrUsuario") as HTMLFormElement;

let DadosDriver = document.querySelector("#formUser") as HTMLDivElement;

let botaoSairUser = document.querySelector("#botaoSairUser") as HTMLButtonElement;

let cardDadosUser = document.querySelector("#row-cardUser") as HTMLDivElement;

let formularioUser = document.querySelector("#formCadastrUsuario") as HTMLFormElement; //tag form do modal cadasdtrar
let BotnSalvarMdlUser = document.querySelector('#CadastrarRecadosUser') as HTMLButtonElement; //submit do form do modal cadastrqr

let inputCadastroNomeU = document.querySelector('#nomeU') as HTMLInputElement; //OK
let inputCadastroEmailU = document.querySelector('#input-cadastro-emailU') as HTMLInputElement;
let inputCpfU = document.querySelector('#cpfU') as HTMLInputElement; //ok
let inputCadastroSenhaU = document.querySelector('#input-cadastro-senhaU') as HTMLInputElement;
// let inputLoginU = document.querySelector("#login") as HTMLInputElement;

let inputSenhaconfirmaU = document.querySelector("#senha-confirmU") as HTMLInputElement;
let inputIdadeU = document.querySelector(
  "#idadeU"
) as HTMLInputElement; //ok
let inputRuaU = document.querySelector("#ruaU") as HTMLInputElement;
let inputNumRuaU = document.querySelector("#numRuaU") as HTMLInputElement;
let inputBairroU= document.querySelector("#bairroU") as HTMLInputElement;
let inputCidadeU = document.querySelector("#cidadeU") as HTMLInputElement;
let inputFoneU = document.querySelector("#foneU") as HTMLInputElement;
let inputCnhU = document.querySelector("#cnhU") as HTMLInputElement;
let inputCatCnhU = document.querySelector("#categCnhU") as HTMLInputElement;
let inputDataCnhU = document.querySelector("#dataCnhU") as HTMLInputElement;
let inputValidCnhU = document.querySelector("#validadecnhU") as HTMLInputElement;
let inputModCarroU = document.querySelector("#modlCarroU") as HTMLInputElement;
let inputCorCarroU = document.querySelector("#corCarroU") as HTMLInputElement;
let inputAnoCarroU = document.querySelector("#anoCarroU") as HTMLInputElement;
let inputPlacaU = document.querySelector("#placaU") as HTMLInputElement;

let botaoAtualizarUser = document.querySelector(
  "#botao_atualizarUser"
) as HTMLButtonElement; //botâo atualizar do modal cadastrar
let botaoCancelarUser = document.querySelector(
  "#botao_cancelarUser"
) as HTMLButtonElement; //botâo cancelar do modal cadastrar

let botaoSairUserModalApagar = document.querySelector("#modalsairUser") as HTMLButtonElement; //botâo sair do modal apagar

let botaoSairUserModalCdstr = document.querySelector("#modalsairU") as HTMLButtonElement;

let ModApagaUser = document.querySelector("#modalApagarRecado") as HTMLDivElement;
let msgModalUser = document.querySelector("#msgUser") as HTMLParagraphElement;

let ModCadastrUser = document.querySelector("#modalCadastrarUser") as HTMLDivElement;

let BtnModalCadastUser = document.querySelector("#modalCadast") as HTMLButtonElement;

let ModalApagaUser = new bootstrap.Modal (ModApagaUser);

let ModalCadastrUser = new bootstrap.Modal(ModCadastrUser);

// if(usuarioEmail != 'teste123@gmail.com'){
//   alert("Pagina restrita!");
//   window.location.href = "../usuario.html";
// }

 let existe: boolean = dataStorage.some((usuario) => {
        return usuario.login === loginUsuario;
    });

if (existe){
for (const indice in dataStorage) {
  if (dataStorage[indice].login == loginUsuario) {
    userNome = dataStorage[indice].nome;
    userEmail = dataStorage[indice].login;
    indiceUser = indice;
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
  let idcNumber = +indiceUser;
  salvarNoCardUser(dataStorage);
  console.log(dataStorage[idcNumber].nome);
});

botaoSairUser.addEventListener("click", logOutUser);

function logOutUser(): void {
  window.sessionStorage.removeItem("usuarioLogado");
  window.sessionStorage.removeItem("usuarioAdm");
  window.sessionStorage.removeItem("dados-usuario");
  window.location.href = "../index.html";
}

function salvarNoCardUser(dadosdriver: Driver[]) {
  let indiceUser = "";
  for (const indice in dadosdriver) {
  if (dadosdriver[indice].login == loginUsuario) {
    indiceUser = indice;
  }
}

      let indcString = indiceUser;
      let indcString2 = indiceUser;
     

      let indcNumber = +indcString;
      let indcNumber2 = +indcString;
      
      indcNumber++;
      indcString = indcNumber.toString();
  
      dadosdriver[indcNumber2].id = indcString;
      window.localStorage.setItem(
        "dados-usuario",
        JSON.stringify(dataStorage)
      );

      
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

      labelRegistro.setAttribute("id", dadosdriver[indcNumber2].id);
      labelRegistro.innerHTML = `Id: `;
      registro.innerHTML = dadosdriver[indcNumber2].id;
      labelNome.innerHTML = `Motorista: `;
      nome.innerHTML = dadosdriver[indcNumber2].nome;
      labelIdade.innerHTML = `Idade: `;
      idade.innerHTML = dadosdriver[indcNumber2].idade;
      labelCpf.innerHTML = `CPF : `;
      cpf.innerHTML = dadosdriver[indcNumber2].cpf;
      labelRua.innerHTML = `Rua: `;
      rua.innerHTML = dadosdriver[indcNumber2].rua;
      labelNumRua.innerHTML = `Nº Rua: `;
      numRua.innerHTML = dadosdriver[indcNumber2].numRua;
      labelBairro.innerHTML = `Bairro: `;
      bairro.innerHTML = dadosdriver[indcNumber2].bairro;
      labelCidade.innerHTML = `Cidade: `;
      cidade.innerHTML = dadosdriver[indcNumber2].cidade;
      labelFone.innerHTML = `Fone: `;
      fone.innerHTML = dadosdriver[indcNumber2].fone;
      labelCnh.innerHTML = `CNH: `;
      cnh.innerHTML = dadosdriver[indcNumber2].cnh;
      labelcategCnh.innerHTML = `Ctg CNH: `;
      categCnh.innerHTML = dadosdriver[indcNumber2].categCnh;
      labelDataCnh.innerHTML = `Emissão: `;
      dataCnh.innerHTML = dadosdriver[indcNumber2].dataCnh;
      labelvalidadecnh.innerHTML = `Vld CNH: `;
      validadecnh.innerHTML = dadosdriver[indcNumber2].validadecnh;
      labelmodlCarro.innerHTML = `Mdl Veículo: `;
      modlCarro.innerHTML = dadosdriver[indcNumber2].modlCarro;
      labelcorCarro.innerHTML = `Cor Veículo: `;
      corCarro.innerHTML = dadosdriver[indcNumber2].corCarro;
      labelAnoCarro.innerHTML = `Ano Veículo: `;
      anoCarro.innerHTML = dadosdriver[indcNumber2].anoCarro;
      labelPlacaCarro.innerHTML = `Placa :`;
      placaCarro.innerHTML = dadosdriver[indcNumber2].placa;
      labelAcao.innerHTML = `Ações: `;
      acoes.innerHTML = `
             <td><button type="button" value="" class="inf_botao" onclick="prepararEdicaoUser(${indiceUser})" id="inf_botao_editar">Editar</button></td>
             <td><button type="button" value="" class="inf_botao" onclick="apagarRegistroUser(${indiceUser})" id="inf_botao_apagar">apagar</button></td>
                                     `;
    }
  
function prepararEdicaoUser(registroID: string) {
  BotnSalvarMdlUser.setAttribute("style", "display:none");
  // botaoSalvar.setAttribute("style", "display: none");
  botaoAtualizarUser.setAttribute("style", "display: inline-block");
  botaoAtualizarUser.setAttribute("onclick", `atualizarRegistroUser(${registroID})`);
  botaoCancelarUser.setAttribute("style", "display: inline-block");
  botaoCancelarUser.setAttribute("onclick", `cancelarEdicaoUser()`);

      let indcString = registroID;
      
      let indcNumber2 = +indcString;
      
  inputCadastroNomeU.value = dataStorage[indcNumber2].nome;
  inputIdadeU.value = dataStorage[indcNumber2].idade;
  inputCpfU.value = dataStorage[indcNumber2].cpf;
  // inputLoginU.value = dataStorage[indcNumber2].login;
  inputCadastroSenhaU.value = dataStorage[indcNumber2].senha;
  inputRuaU.value = dataStorage[indcNumber2].rua;
  inputNumRuaU.value = dataStorage[indcNumber2].numRua;
  inputBairroU.value = dataStorage[indcNumber2].bairro;
  inputCidadeU.value = dataStorage[indcNumber2].cidade;
  inputFoneU.value = dataStorage[indcNumber2].fone;
  inputCnhU.value = dataStorage[indcNumber2].cnh;
  inputCatCnhU.value = dataStorage[indcNumber2].categCnh;
  inputDataCnhU.value = dataStorage[indcNumber2].dataCnh;
  inputValidCnhU.value = dataStorage[indcNumber2].validadecnh;
  inputModCarroU.value = dataStorage[indcNumber2].modlCarro;
  inputCorCarroU.value = dataStorage[indcNumber2].corCarro;
  inputAnoCarroU.value = dataStorage[indcNumber2].anoCarro;
  inputPlacaU.value = dataStorage[indcNumber2].placa;

  // let Driver: Driver = {
  //   id: "",
  //   nome: nomeCadastro,
  //   idade: idadeCadastro,
  //   cpf: cpf,
  //   login:  loginCadastro, 
  //   senha: senhaCadastro, 
  //   placa: placaCadastro,
  //   rua: ruaCadastro,
  //   numRua: numeroruaCadastro,
  //   bairro: bairroCadastro,
  //   cidade: cidadeCadastro,
  //   fone: foneCadastro,
  //   cnh: cnhCadastro,
  //   categCnh: catcnhCadastro,
  //   dataCnh: dataCnhCadastro,
  //   validadecnh: validCnhCadastro,
  //   modlCarro: modlCarroCadastro,
  //   corCarro: corCarroCadastro,
  //   anoCarro: anoCarroCadastro,
  // };

ModalCadastrUser.show();

  // inputNome.value = listaDriver[registroID].nome;
  // inputIdade.value = listaDriver[registroID].detalhamento;
}

function atualizarRegistroUser(registroID: string) {

   let indcString = registroID;
      
      let indcNumber2 = +indcString;

  let idCadastro = dataStorage[indcNumber2].id;
  let idNumber = +idCadastro;
  // let idNumber2 = +idCadastro;
  // idNumber++;
  // idCadastro = idNumber.toString();
  
  let nomeCadastro = inputCadastroNomeU.value;
  let idadeCadastro = inputIdadeU.value;
  let cpfCadastro = inputCpfU.value;
  let loginCadastro = inputCadastroEmailU.value;
  let senhaCadastro = inputCadastroSenhaU.value;
  let ruaCadastro = inputRuaU.value;
  let numeroruaCadastro = inputNumRuaU.value;
  let bairroCadastro = inputBairroU.value;
  let cidadeCadastro = inputCidadeU.value;
  let foneCadastro = inputFoneU.value;
  let cnhCadastro = inputCnhU.value;
  let catcnhCadastro = inputCatCnhU.value;
  let dataCnhCadastro = inputDataCnhU.value;
  let validCnhCadastro = inputValidCnhU.value;
  let modlCarroCadastro = inputModCarroU.value;
  let corCarroCadastro = inputCorCarroU.value;
  let anoCarroCadastro = inputAnoCarroU.value;
  let placaCadstro = inputPlacaU.value;

  let residFile = inputElement.files;
    let Meufile = new File([], 'filename.jpg', { type: 'image/jpeg' });
    if (residFile) {
       Meufile = residFile[0];
    } else {
    console.log("Nenhum arquivo foi selecionado");
    }

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
    residfile: Meufile,
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

  dataStorage.splice(indcNumber2, 1, DriverEditado);
  window.localStorage.setItem("dados-usuario", JSON.stringify(dataStorage));
  window.location.reload();
}

function apagarRegistroUser(registroID: string): void {
  
  let indcString = registroID;

  let indcNumber = +indcString;
  let indcNumber2 = +indcString;
  indcNumber++;

  msgModalUser.innerHTML = `Tem certeza que deseja remover o recado de registro ID ${indcNumber}?`;
  ModalApagaUser.show();

  let Apagardriver = document.querySelector(
    "#ApagarRecadosUser"
  ) as HTMLButtonElement;

    // let confirma:boolean=true;
  Apagardriver.addEventListener("click", () => {
    dataStorage.splice(indcNumber2, 1);
    
    // confirma = false;
    
    salvarNoStorage(dataStorage);
    window.location.reload();
    
  });

};

function modalCadastraUser (): void{
  ModalCadastrUser.show();
}

function apagandoUser (indice: Driver[]): void {
  ModalApagaUser.show();

  let Apagardriver= document.querySelector(
    "#ApagarRecadosUser"
  ) as HTMLButtonElement;

  // let ApagarRecado = document.querySelector(
  //   "#ApagarRecado"
  // ) as HTMLButtonElement;

  Apagardriver.addEventListener("click", () => {
    listaDriver.splice(indice, 1);
    salvarNoStorage(dataStorage);
    window.location.reload();
  });

  // ApagarRecado.addEventListener("click", () => {
  //   listaDriver.splice(indice, 1);
  //   salvarNoStorage(listaUsuarios);
  //   window.location.reload();
  // });
}

function cancelarEdicaoUser () {
  botaoCancelarUser.setAttribute("onclick", `${limparCamposUser()}`);
  botaoSalvar.setAttribute("style", "display: inline-block");
  botaoAtualizarUser.setAttribute("style", "display: none");
  botaoCancelarUser.setAttribute("style", "display: none");
}

function limparCamposUser(): void {
  inputCadastroNomeU.value = "";
  inputIdadeU.value = "";
  inputCadastroNomeU.focus();
}