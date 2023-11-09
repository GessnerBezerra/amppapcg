"use strict";
let login = window.sessionStorage.getItem("usuarioLogado");
let usuario = document.querySelector("#userHome");
let dadosStorage = JSON.parse(localStorage.getItem("dados-usuario") || "[]");
let usuarioNome = "";
let usuarioEmail = "";
// if(usuarioEmail != 'teste123@gmail.com'){
//   alert("Pagina restrita!");
//   window.location.href = "../usuario.html";
// }
if (!login) {
    alert("Você deve logar antes!");
    window.location.href = "../index.html";
}
for (const indice in dadosStorage) {
    if (dadosStorage[indice].login == login) {
        usuarioNome = dadosStorage[indice].nome;
        usuarioEmail = dadosStorage[indice].login;
    }
}
usuario.innerHTML = `Bem vindo: <strong id="userHome2">${login}</strong>`;
let listaUsuarios = JSON.parse(window.localStorage.getItem("dados-usuario") || "[]");
let indiceUsuario = "";
for (const indice in listaUsuarios) {
    if (listaUsuarios[indice].login == login) {
        indiceUsuario = indice;
    }
}
let listaDriver = listaUsuarios[indiceUsuario];
let formulario = document.querySelector("#formCadastr"); //tag form do modal cadasdtrar
let BotnSalvarMdl = document.querySelector('#CadastrarRecados'); //submit do form do modal cadastrqr
let inputNome = document.querySelector("#nome");
inputNome.setAttribute('required', 'required');
let inputLogin = document.querySelector("#login");
inputLogin.setAttribute('required', 'required');
let inputCpf = document.querySelector('#input-cadastro-cpf');
inputCpf.setAttribute('required', 'required');
let inputSenha = document.querySelector("#senha");
inputSenha.setAttribute('required', 'required');
let inputSenhaconfirma = document.querySelector("#senha-confirm");
inputSenhaconfirma.setAttribute('required', 'required');
let inputIdade = document.querySelector("#idade");
inputIdade.setAttribute('required', 'required');
let inputRua = document.querySelector("#rua");
inputRua.setAttribute('required', 'required');
let inputNumRua = document.querySelector("#numRua");
inputNumRua.setAttribute('required', 'required');
let inputBairro = document.querySelector("#bairro");
inputBairro.setAttribute('required', 'required');
let inputCidade = document.querySelector("#cidade");
inputCidade.setAttribute('required', 'required');
let inputFone = document.querySelector("#fone");
inputFone.setAttribute('required', 'required');
let inputCompResid = document.querySelector("#residFile");
inputCompResid.setAttribute('required', 'required');
let inputCnh = document.querySelector("#cnh");
inputCnh.setAttribute('required', 'required');
let inputCatCnh = document.querySelector("#categCnh");
inputCatCnh.setAttribute('required', 'required');
let inputDataCnh = document.querySelector("#dataCnh");
inputDataCnh.setAttribute('required', 'required');
let inputValidCnh = document.querySelector("#validadecnh");
inputValidCnh.setAttribute('required', 'required');
let inputModCarro = document.querySelector("#modlCarro");
inputModCarro.setAttribute('required', 'required');
let inputCorCarro = document.querySelector("#corCarro");
inputCorCarro.setAttribute('required', 'required');
let inputAnoCarro = document.querySelector("#anoCarro");
inputAnoCarro.setAttribute('required', 'required');
let inputPlaca = document.querySelector("#placa");
inputPlaca.setAttribute('required', 'required');
let botaoSalvar = document.querySelector("#enviar_info");
let botaoAtualizar = document.querySelector("#botao_atualizar"); //botâo atualizar do modal cadastrar
let botaoCancelar = document.querySelector("#botao_cancelar"); //botâo cancelar do modal cadastrar
let botaoSair = document.querySelector("#botaoSair"); //botâo sair da pagina home
let botaoSairModal = document.querySelector("#modalsairCdst");
let tabelaDados = document.querySelector("#tabela-registros");
let ModApaga = document.querySelector("#modalApagarRecado");
let msgModal = document.querySelector("#msg");
let ModCadastr = document.querySelector("#modalCadastrar");
let BtnModalCadast = document.querySelector("#modalCadast");
let cardDados = document.querySelector("#row-card");
let ModalApaga = new bootstrap.Modal(ModApaga);
let ModalCadastr = new bootstrap.Modal(ModCadastr);
// interface Driver {
//   indice: string;
//   nome: string;
//   idade: string;
//   rua: string;
//   numRua: string;
//   bairro: string;
//   cidade: string;
//   fone: string;
//   cnh: string;
//   categCnh: string;
//   dataCnh: string;
//   validadecnh: string;
//   modlCarro: string;
//   corCarro: string;
//   anoCarro: string;
// }
// interface Usuario {
//   nome: string;
//   login: string;
//   senha: string;
//   Driver: Driver;
// }
/////////////////////*************EVENTOS****************///////////////////////////
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    adicionarNovoRegistro();
});
document.addEventListener("DOMContentLoaded", () => {
    if (!login) {
        alert("Você precisa estar logado para acessar essa página!");
        window.location.href = "../index.html";
        return;
    }
    // salvarNaTabela(listaDriver);
    salvarNoCard(listaUsuarios);
});
botaoSair.addEventListener("click", logOutAdm);
BtnModalCadast.addEventListener("click", modalCadastra);
//////////////////////*******FUNÇÕES**********////////////////////////////////////////////////
function adicionarNovoRegistro() {
    // let inputNome1 = document.querySelector("#nome") as HTMLInputElement;
    // let inputIdade1 = document.querySelector(
    //   "#idade"
    // ) as HTMLInputElement;
    // let inputRua1 = document.querySelector("#rua") as HTMLInputElement;
    // let inputNumRua1 = document.querySelector("#numRua") as HTMLInputElement;
    // let inputBairro1 = document.querySelector("#bairro") as HTMLInputElement;
    // let inputCidade1 = document.querySelector("#cidade") as HTMLInputElement;
    // let inputFone1 = document.querySelector("#fone") as HTMLInputElement;
    // let inputCnh1 = document.querySelector("#cnh") as HTMLInputElement;
    // let inputCatCnh1 = document.querySelector("#categCnh") as HTMLInputElement;
    // let inputDataCnh1 = document.querySelector("#dataCnh") as HTMLInputElement;
    // let inputValidCnh1 = document.querySelector("#validadecnh") as HTMLInputElement;
    // let inputModCarro1 = document.querySelector("#modlCarro") as HTMLInputElement;
    // let inputCorCarro1 = document.querySelector("#corCarro") as HTMLInputElement;
    // let inputAnoCarro1 = document.querySelector("#anoCarro") as HTMLInputElement;
    let nomeCadastro = inputNome.value;
    let loginCadastro = inputLogin.value;
    let senhaCadastro = inputSenha.value;
    let idadeCadastro = inputIdade.value;
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
    let placaCadastro = inputPlaca.value;
    let cpf = inputCpf.value;
    let residFile = inputCompResid.files;
    let Meufile = new Blob;
    if (residFile) {
        Meufile = residFile[0];
    }
    else {
        console.log("Nenhum arquivo foi selecionado");
    }
    let Driver = {
        id: "",
        nome: nomeCadastro,
        idade: idadeCadastro,
        cpf: cpf,
        login: loginCadastro,
        senha: senhaCadastro,
        placa: placaCadastro,
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
    listaUsuarios.push(Driver);
    window.location.reload();
    limparCampos();
    window.localStorage.setItem("dados-usuario", JSON.stringify(listaUsuarios));
}
//---------FUNÇÃO PARA CRIAÇÃO DE TABELA--------------------
function salvarNaTabela(dadosdriver) {
    if (dadosdriver.length > 0) {
        for (const indice in dadosdriver) {
            let indcString = dadosdriver[indice].id;
            let indcNumber = +indcString;
            indcNumber = Number(indice);
            indcNumber++;
            indcString = indcNumber.toString();
            dadosdriver[indice].id = indcString;
            window.localStorage.setItem("dados-usuario", JSON.stringify(listaUsuarios));
            let novaLinha = document.createElement("tr");
            let colunaRegistro = document.createElement("td");
            let colunaNome = document.createElement("td");
            let colunaIdade = document.createElement("td");
            let colunarua = document.createElement("td");
            let colunaNumRua = document.createElement("td");
            let colunaBairro = document.createElement("td");
            let colunaCidade = document.createElement("td");
            let colunaFone = document.createElement("td");
            let colunaCnh = document.createElement("td");
            let colunacategCnh = document.createElement("td");
            let colunadataCnh = document.createElement("td");
            let colunavalidadecnh = document.createElement("td");
            let colunamodlCarro = document.createElement("td");
            let colunacorCarro = document.createElement("td");
            let colunaanoCarro = document.createElement("td");
            let colunaAcoes = document.createElement("td");
            novaLinha.appendChild(colunaRegistro);
            novaLinha.appendChild(colunaNome);
            novaLinha.appendChild(colunaIdade);
            novaLinha.appendChild(colunarua);
            novaLinha.appendChild(colunaNumRua);
            novaLinha.appendChild(colunaBairro);
            novaLinha.appendChild(colunaCidade);
            novaLinha.appendChild(colunaFone);
            novaLinha.appendChild(colunaCnh);
            novaLinha.appendChild(colunacategCnh);
            novaLinha.appendChild(colunadataCnh);
            novaLinha.appendChild(colunavalidadecnh);
            novaLinha.appendChild(colunamodlCarro);
            novaLinha.appendChild(colunacorCarro);
            novaLinha.appendChild(colunaanoCarro);
            novaLinha.appendChild(colunaAcoes);
            tabelaDados.appendChild(novaLinha);
            novaLinha.setAttribute("class", "informacoes");
            novaLinha.setAttribute("id", dadosdriver[indice].id);
            colunaRegistro.innerHTML = dadosdriver[indice].id;
            colunaNome.innerHTML = dadosdriver[indice].nome;
            colunaIdade.innerHTML = dadosdriver[indice].idade;
            colunarua.innerHTML = dadosdriver[indice].rua;
            colunaNumRua.innerHTML = dadosdriver[indice].numRua;
            colunaBairro.innerHTML = dadosdriver[indice].bairro;
            colunaCidade.innerHTML = dadosdriver[indice].cidade;
            colunaFone.innerHTML = dadosdriver[indice].fone;
            colunaCnh.innerHTML = dadosdriver[indice].cnh;
            colunacategCnh.innerHTML = dadosdriver[indice].categCnh;
            colunadataCnh.innerHTML = dadosdriver[indice].dataCnh;
            colunavalidadecnh.innerHTML = dadosdriver[indice].validadecnh;
            colunamodlCarro.innerHTML = dadosdriver[indice].modlCarro;
            colunacorCarro.innerHTML = dadosdriver[indice].corCarro;
            colunaanoCarro.innerHTML = dadosdriver[indice].anoCarro;
            colunaAcoes.innerHTML = `
            <td><button type="button" value="" class="inf_botao" onclick="prepararEdicao(${indice})" id="inf_botao_editar">Editar</button></td>
            <td><button type="button" value="" class="inf_botao" onclick="apagando(${indice})" id="inf_botao_apagar">Apagar</button></td>
                                    `;
        }
    }
}
//-----------FUNÇÃO PARA CRIAR CARD---------------
function salvarNoCard(dadosdriver) {
    if (dadosdriver.length > 0) {
        for (const indice in dadosdriver) {
            let indcString = dadosdriver[indice].id;
            let indcNumber = +indcString;
            indcNumber = Number(indice);
            indcNumber++;
            indcString = indcNumber.toString();
            dadosdriver[indice].id = indcString;
            window.localStorage.setItem("dados-usuario", JSON.stringify(listaUsuarios));
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
            let divCardComprResid = document.createElement("div");
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
            let labelCompResid = document.createElement("label");
            let compResid = document.createElement("a");
            let compResidLink = document.createElement("link");
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
            divCardComprResid.setAttribute("class", "compResid");
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
            divCardComprResid.appendChild(labelCompResid);
            divCardComprResid.appendChild(compResid);
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
            compResid.appendChild(compResidLink);
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
            sectionCard.appendChild(divCardComprResid);
            sectionCard.appendChild(divCardCnh);
            sectionCard.appendChild(divCardcategCnh);
            sectionCard.appendChild(divCardDataCnh);
            sectionCard.appendChild(divCardValidadeCnh);
            sectionCard.appendChild(divCardModlCarro);
            sectionCard.appendChild(divCardCorCarro);
            sectionCard.appendChild(divCardAnoCarro);
            sectionCard.appendChild(divCardPlacaCarro);
            sectionCard.appendChild(divCardAcao);
            cardDados.appendChild(sectionCard);
            sectionCard.setAttribute("class", "card");
            if (indcNumber % 2 == 0) {
                sectionCard.setAttribute('style', 'background: linear-gradient(to right,rgba(144, 203, 44, 0.8),rgba(144, 203, 44, 0.6))');
            }
            if (indcNumber % 2 != 0) {
                sectionCard.setAttribute('style', 'background: linear-gradient(to right,rgba(44 203 190 / 80%),rgba(73, 44, 203, 0.6))');
            }
            labelRegistro.setAttribute("id", dadosdriver[indice].id);
            labelRegistro.innerHTML = `Id: `;
            registro.innerHTML = dadosdriver[indice].id;
            labelNome.innerHTML = `Motorista: `;
            nome.innerHTML = dadosdriver[indice].nome;
            labelIdade.innerHTML = `Idade: `;
            idade.innerHTML = dadosdriver[indice].idade;
            labelCpf.innerHTML = `CPF : `;
            cpf.innerHTML = dadosdriver[indice].cpf;
            labelRua.innerHTML = `Rua: `;
            rua.innerHTML = dadosdriver[indice].rua;
            labelNumRua.innerHTML = `Nº Rua: `;
            numRua.innerHTML = dadosdriver[indice].numRua;
            labelBairro.innerHTML = `Bairro: `;
            bairro.innerHTML = dadosdriver[indice].bairro;
            labelCidade.innerHTML = `Cidade: `;
            cidade.innerHTML = dadosdriver[indice].cidade;
            labelFone.innerHTML = `Fone: `;
            fone.innerHTML = dadosdriver[indice].fone;
            labelCompResid.innerHTML = `Compr Residencia: `;
            compResid.href = `${URL.createObjectURL(new Blob([dadosdriver[indice].residfile]))}`;
            compResid.rel = 'tylesheet';
            labelCnh.innerHTML = `CNH: `;
            cnh.innerHTML = dadosdriver[indice].cnh;
            labelcategCnh.innerHTML = `Ctg CNH: `;
            categCnh.innerHTML = dadosdriver[indice].categCnh;
            labelDataCnh.innerHTML = `Emissão: `;
            dataCnh.innerHTML = dadosdriver[indice].dataCnh;
            labelvalidadecnh.innerHTML = `Vld CNH: `;
            validadecnh.innerHTML = dadosdriver[indice].validadecnh;
            labelmodlCarro.innerHTML = `Mdl Veículo: `;
            modlCarro.innerHTML = dadosdriver[indice].modlCarro;
            labelcorCarro.innerHTML = `Cor Veículo: `;
            corCarro.innerHTML = dadosdriver[indice].corCarro;
            labelAnoCarro.innerHTML = `Ano Veículo: `;
            anoCarro.innerHTML = dadosdriver[indice].anoCarro;
            labelPlacaCarro.innerHTML = `Placa :`;
            placaCarro.innerHTML = dadosdriver[indice].placa;
            labelAcao.innerHTML = `Ações: `;
            acoes.innerHTML = `
             <td><button type="button" value="" class="inf_botao" onclick="prepararEdicao(${indice})" id="inf_botao_editar">Editar</button></td>
             <td><button type="button" value="" class="inf_botao" onclick="apagarRegistro(${indice})" id="inf_botao_apagar">apagar</button></td>
                                     `;
        }
    }
}
function limparCampos() {
    inputNome.value = "";
    inputAnoCarro.value = "";
    inputBairro.value = "";
    inputCatCnh.value = "";
    inputCidade.value = "";
    inputCnh.value = "";
    inputCorCarro.value = "";
    inputCpf.value = "";
    inputDataCnh.value = "";
    inputFone.value = "";
    inputIdade.value = "";
    inputLogin.value = "";
    inputModCarro.value = "";
    inputNumRua.value = "";
    inputPlaca.value = "";
    inputRua.value = "";
    inputSenha.value = "";
    inputSenhaconfirma.value = "";
    inputValidCnh.value = "";
    inputNome.focus();
}
function salvarNoStorage(lst_driver) {
    localStorage.setItem("dados-usuario", JSON.stringify(lst_driver));
}
function logOutAdm() {
    window.sessionStorage.removeItem("usuarioLogado");
    window.sessionStorage.removeItem("usuarioAdm");
    window.sessionStorage.removeItem("dados-usuario");
    window.location.href = "../index.html";
}
// function pegarDadosStorage() {
//   if (dadosStorage) {
//     for (let registro of dadosStorage) {
//       salvarNoCard(registro.Driver);
//     }
//   }
//   return;
// }
// ------------FUNÇÃO DE CADASTRAR COM MODAL------------
function modalCadastra() {
    botaoSairModal.setAttribute("style", "display:none");
    botaoCancelar.setAttribute("style", "display: inline-block");
    botaoCancelar.setAttribute("onclick", `cancelarEdicao()`);
    ModalCadastr.show();
}
//-------------- FUNÇÃO DE APAGAR DESABILITADA-----------
function apagando(indice) {
    ModalApaga.show();
    let Apagardriver = document.querySelector("#Apagardriver");
    // let ApagarRecado = document.querySelector(
    //   "#ApagarRecado"
    // ) as HTMLButtonElement;
    Apagardriver.addEventListener("click", () => {
        listaDriver.splice(indice, 1);
        salvarNoStorage(listaUsuarios);
        window.location.reload();
    });
    // ApagarRecado.addEventListener("click", () => {
    //   listaDriver.splice(indice, 1);
    //   salvarNoStorage(listaUsuarios);
    //   window.location.reload();
    // });
}
function cancelarEdicao() {
    botaoCancelar.setAttribute("onclick", `${limparCampos()}`);
    botaoSairModal.setAttribute("style", "display:none");
    botaoSalvar.setAttribute("style", "display: inline-block");
    botaoAtualizar.setAttribute("style", "display: none");
    botaoCancelar.setAttribute("style", "display: inline-block");
}
// function SairEdicao(){
//   botaoSairModal.setAttribute("onclick", `${limparCampos()}`);
//   // botaoSalvar.setAttribute("style", "display: inline-block");
//   botaoAtualizar.setAttribute("style", "display: none");
//   botaoCancelar.setAttribute("style", "display: none");
// }
function prepararEdicao(registroID) {
    BotnSalvarMdl.setAttribute("style", "display:none");
    botaoSairModal.setAttribute("style", "display:none");
    // botaoSalvar.setAttribute("style", "display: none");
    botaoAtualizar.setAttribute("style", "display: inline-block");
    botaoAtualizar.setAttribute("onclick", `atualizarRegistro(${registroID})`);
    botaoCancelar.setAttribute("style", "display: inline-block");
    botaoCancelar.setAttribute("onclick", `cancelarEdicao()`);
    inputNome.value = listaUsuarios[registroID].nome;
    inputIdade.value = listaUsuarios[registroID].idade;
    inputCpf.value = listaUsuarios[registroID].cpf;
    inputLogin.value = listaUsuarios[registroID].login;
    inputSenha.value = listaUsuarios[registroID].senha;
    inputRua.value = listaUsuarios[registroID].rua;
    inputNumRua.value = listaUsuarios[registroID].numRua;
    inputBairro.value = listaUsuarios[registroID].bairro;
    inputCidade.value = listaUsuarios[registroID].cidade;
    inputFone.value = listaUsuarios[registroID].fone;
    inputCompResid.value = listaUsuarios[registroID].Residfile;
    inputCnh.value = listaUsuarios[registroID].cnh;
    inputCatCnh.value = listaUsuarios[registroID].categCnh;
    inputDataCnh.value = listaUsuarios[registroID].dataCnh;
    inputValidCnh.value = listaUsuarios[registroID].validadecnh;
    inputModCarro.value = listaUsuarios[registroID].modlCarro;
    inputCorCarro.value = listaUsuarios[registroID].corCarro;
    inputAnoCarro.value = listaUsuarios[registroID].anoCarro;
    inputPlaca.value = listaUsuarios[registroID].placa;
    ModalCadastr.show();
    // inputNome.value = listaDriver[registroID].nome;
    // inputIdade.value = listaDriver[registroID].detalhamento;
}
function atualizarRegistro(registroID) {
    let idCadastro = registroID;
    let idNumber = +idCadastro;
    idNumber++;
    idCadastro = idNumber.toString();
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
    let residFile = inputCompResid.files;
    let Meufile = new Blob;
    if (residFile) {
        Meufile = residFile[0];
    }
    else {
        console.log("Nenhum arquivo foi selecionado");
    }
    let DriverEditado = {
        id: idCadastro,
        nome: nomeCadastro,
        idade: idadeCadastro,
        cpf: cpfCadastro,
        login: loginCadastro,
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
    listaUsuarios.splice(registroID, 1, DriverEditado);
    window.localStorage.setItem("dados-usuario", JSON.stringify(listaUsuarios));
    limparCampos();
    window.location.reload();
}
function apagarRegistro(indice) {
    let indcString = indice;
    let indcNumber = +indcString;
    indcNumber = Number(indice);
    indcNumber++;
    msgModal.innerHTML = `Tem certeza que deseja remover o recado de registro ID ${indcNumber}?`;
    ModalApaga.show();
    let Apagardriver = document.querySelector("#ApagarRecados");
    // let confirma:boolean=true;
    Apagardriver.addEventListener("click", () => {
        listaUsuarios.splice(indice, 1);
        // confirma = false;
        salvarNoStorage(listaUsuarios);
        window.location.reload();
    });
}
;
