"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salvarNoForm = void 0;
let formCadast = document.querySelector("#cadastro-container");
let listaUsuarios = JSON.parse(window.localStorage.getItem("dados-usuario") || "[]");
/* <form id="formulario-cadastro">
                <div id="img2"></div>
                <h3>Criar uma conta</h3>
                <span>Prencha os dados abaixo para realizar seu cadastro</span>

                <input type="text" placeholder="Nome Completo" id="input-cadastro-nome">
                <input type="email" placeholder="E-mail" id="input-cadastro-email">
                <input type="password" placeholder="Senha" id="input-cadastro-senha">

                <button type="submit">Cadastrar</button>
                <a href="/welcome.html">Clique para retornar à pagima principal</a>
            </form> */
function salvarNoForm(dadosdriver) {
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
            let divCardEmail = document.createElement("div");
            let divCardNome = document.createElement("div");
            let divCardIdade = document.createElement("div");
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
            let divCardAcao = document.createElement("div");
            let labelRegistro = document.createElement("label");
            let registro = document.createElement("p");
            let labelEmail = document.createElement("label");
            let email = document.createElement("p");
            let labelNome = document.createElement("label");
            let nome = document.createElement("p");
            let labelIdade = document.createElement("label");
            let idade = document.createElement("p");
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
            let labelAcao = document.createElement("label");
            let acoes = document.createElement("td");
            // divCardTtl.setAttribute("class", "titulo-card");
            divCardTRst.setAttribute("class", "registro");
            divCardEmail.setAttribute("class", "email");
            divCardNome.setAttribute("class", "nome");
            divCardIdade.setAttribute("class", "idade");
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
            divCardAcao.setAttribute("class", "acoes");
            divCardTRst.appendChild(labelRegistro);
            divCardTRst.appendChild(registro);
            divCardNome.appendChild(labelNome);
            divCardNome.appendChild(nome);
            divCardEmail.appendChild(labelEmail);
            divCardNome.appendChild(email);
            divCardIdade.appendChild(labelIdade);
            divCardIdade.appendChild(idade);
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
            divCardAcao.appendChild(labelAcao);
            divCardAcao.appendChild(acoes);
            sectionCard.appendChild(divCardTRst);
            // sectionCard.appendChild(divCardTtl);
            sectionCard.appendChild(divCardNome);
            sectionCard.appendChild(divCardEmail);
            sectionCard.appendChild(divCardIdade);
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
            sectionCard.appendChild(divCardAcao);
            cardDados.appendChild(sectionCard);
            sectionCard.setAttribute("class", "card");
            if (indcNumber % 2 == 0) {
                sectionCard.setAttribute("style", "background: linear-gradient(to right,rgba(144, 203, 44, 0.8),rgba(144, 203, 44, 0.6))");
            }
            if (indcNumber % 2 != 0) {
                sectionCard.setAttribute("style", "background: linear-gradient(to right,rgba(44 203 190 / 80%),rgba(73, 44, 203, 0.6))");
            }
            labelRegistro.setAttribute("id", dadosdriver[indice].id);
            labelRegistro.innerHTML = `Id: `;
            registro.innerHTML = dadosdriver[indice].id;
            labelNome.innerHTML = `Motorista: `;
            nome.innerHTML = dadosdriver[indice].nome;
            labelEmail.innerHTML = `E-mail: `;
            email.innerHTML = dadosdriver[indice].login;
            //   let indiceUsuario: string = "";
            for (const indice in listaUsuarios) {
                // indiceUsuario = indice;
                let listaDriver = listaUsuarios[indice].Driver;
                for (const indice in listaDriver) {
                    labelIdade.innerHTML = `Idade: `;
                    idade.innerHTML = listaDriver[indice].idade;
                    labelRua.innerHTML = `Rua: `;
                    rua.innerHTML = listaDriver[indice].rua;
                    labelNumRua.innerHTML = `Nº Rua: `;
                    numRua.innerHTML = listaDriver[indice].numRua;
                    labelBairro.innerHTML = `Bairro: `;
                    bairro.innerHTML = listaDriver[indice].bairro;
                    labelCidade.innerHTML = `Cidade: `;
                    cidade.innerHTML = listaDriver[indice].cidade;
                    labelFone.innerHTML = `Fone: `;
                    fone.innerHTML = listaDriver[indice].fone;
                    labelCnh.innerHTML = `CNH: `;
                    cnh.innerHTML = listaDriver[indice].cnh;
                    labelcategCnh.innerHTML = `Ctg CNH: `;
                    categCnh.innerHTML = listaDriver[indice].categCnh;
                    labelDataCnh.innerHTML = `Emissão: `;
                    dataCnh.innerHTML = listaDriver[indice].dataCnh;
                    labelvalidadecnh.innerHTML = `Vld CNH: `;
                    validadecnh.innerHTML = listaDriver[indice].validadecnh;
                    labelmodlCarro.innerHTML = `Mdl Veículo: `;
                    modlCarro.innerHTML = listaDriver[indice].modlCarro;
                    labelcorCarro.innerHTML = `Cor Veículo: `;
                    corCarro.innerHTML = listaDriver[indice].corCarro;
                    labelAnoCarro.innerHTML = `Ano Veículo: `;
                    anoCarro.innerHTML = listaDriver[indice].anoCarro;
                    labelAcao.innerHTML = `Ações: `;
                    acoes.innerHTML = `
             <td><button type="button" value="" class="inf_botao" onclick="prepararEdicao(${indice})" id="inf_botao_editar">Editar</button></td>
             <td><button type="button" value="" class="inf_botao" onclick="apagarRegistro(${indice})" id="inf_botao_apagar">apagar</button></td>
        `;
                }
            }
        }
    }
}
exports.salvarNoForm = salvarNoForm;
