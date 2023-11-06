"use strict";
let btnAcessar = document.getElementById('btn-acessar');
let btnCadastrar = document.getElementById('btn-cadastrar');
let container = document.getElementById('container');
let linkWelcomeLogin = document.getElementById('welcomepg-login');
let linkWelcomeCadast = document.getElementById('welcomepg-cadast');
document.addEventListener("DOMContentLoaded", () => {
    container.classList.add('painel-direito-ativo');
});
linkWelcomeCadast.addEventListener('click', () => {
    window.location.href = "../welcome.html";
});
linkWelcomeLogin.addEventListener('click', () => {
    window.location.href = "../welcome.html";
});
btnAcessar.addEventListener('click', () => {
    container.classList.remove('painel-direito-ativo');
});
// teste
btnCadastrar.addEventListener('click', () => {
    container.classList.add('painel-direito-ativo');
});
// CADASTRO DE UM USUARIO
let formularioCadastro = document.querySelector('#formulario-cadastro');
let inputCadastroNomeC = document.querySelector('#input-cadastro-nome');
let inputCadastroEmailC = document.querySelector('#input-cadastro-email');
let inputCpfC = document.querySelector('#input-cadastro-cpf');
let inputCadastroSenhaC = document.querySelector('#input-cadastro-senha');
let inputLoginC = document.querySelector("#login");
let inputSenhaconfirmaC = document.querySelector("#senha-confirm");
let inputIdadeC = document.querySelector("#idade");
let inputRuaC = document.querySelector("#rua");
let inputNumRuaC = document.querySelector("#numRua");
let inputBairroC = document.querySelector("#bairro");
let inputCidadeC = document.querySelector("#cidade");
let inputFoneC = document.querySelector("#fone");
let inputCnhC = document.querySelector("#cnh");
let inputCatCnhC = document.querySelector("#categCnh");
let inputDataCnhC = document.querySelector("#dataCnh");
let inputValidCnhC = document.querySelector("#validadecnh");
let inputModCarroC = document.querySelector("#modlCarro");
let inputCorCarroC = document.querySelector("#corCarro");
let inputAnoCarroC = document.querySelector("#anoCarro");
let inputPlacaC = document.querySelector("#placa");
formularioCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault();
    verificaCampos();
});
function verificaCampos() {
    if (inputCadastroNomeC.value === '' || inputCadastroNomeC.value.length < 3) {
        inputCadastroNomeC.focus();
        inputCadastroNomeC.setAttribute('style', 'outline-color: red');
        return;
    }
    if (inputCadastroEmailC.value === '' || inputCadastroEmailC.value.length < 10) {
        inputCadastroEmailC.focus();
        inputCadastroEmailC.setAttribute('style', 'outline-color: red');
        return;
    }
    if (inputCadastroSenhaC.value === '' || inputCadastroSenhaC.value.length < 8) {
        inputCadastroSenhaC.focus();
        inputCadastroSenhaC.setAttribute('style', 'outline-color: red');
        return;
    }
    inputCadastroNomeC.removeAttribute('style');
    inputCadastroEmailC.removeAttribute('style');
    inputCadastroSenhaC.removeAttribute('style');
    let novoUsuario = {
        nome: inputCadastroNomeC.value,
        login: inputCadastroEmailC.value,
        senha: inputCadastroSenhaC.value,
        cpf: inputCpfC.value,
        id: "",
        idade: inputIdadeC.value,
        rua: inputRuaC.value,
        numRua: inputNumRuaC.value,
        bairro: inputBairroC.value,
        cidade: inputCidadeC.value,
        fone: inputFoneC.value,
        cnh: inputCnhC.value,
        categCnh: inputCatCnhC.value,
        dataCnh: inputDataCnhC.value,
        validadecnh: inputValidCnhC.value,
        modlCarro: inputModCarroC.value,
        corCarro: inputCorCarroC.value,
        anoCarro: inputAnoCarroC.value,
        placa: inputPlacaC.value,
    };
    cadastrarUsuario(novoUsuario);
}
let indiceDrv = "";
function cadastrarUsuario(novoUsuario) {
    let listaUsuarios = buscarUsuariosNoStorage();
    // for (let indice in listaUsuarios){
    //     indiceDrv = indice;
    // }
    // let indicDrvNumb = +indiceDrv;
    // let listaDriver = listaUsuarios[indicDrvNumb];
    let existe = listaUsuarios.some((usuario) => {
        return usuario.login === novoUsuario.login || usuario.cpf === novoUsuario.cpf;
    });
    if (existe) {
        let confirma = confirm("Usuário já está cadastrado. Deseja ir para a página de login?");
        if (confirma) {
            container.classList.add('painel-direito-ativo');
            formularioCadastro.reset();
        }
        return;
    }
    listaUsuarios.push(novoUsuario);
    localStorage.setItem('dados-usuario', JSON.stringify(listaUsuarios));
    alert('Conta criada com sucesso!');
    formularioCadastro.reset();
    setTimeout(() => {
        container.classList.remove('painel-direito-ativo');
    }, 1000);
}
function buscarUsuariosNoStorage() {
    return JSON.parse(localStorage.getItem('dados-usuario') || '[]');
}
// LOGAR O USUARIO NA APLICAÇÃO
let formularioLogin = document.querySelector('#formulario-login');
let inputLoginEmail = document.querySelector('#input-login-email');
let inputLoginSenha = document.querySelector('#input-login-senha');
formularioLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();
    validarCamposLogin();
});
function validarCamposLogin() {
    if (inputLoginEmail.value === '') {
        inputLoginEmail.focus();
        inputLoginEmail.setAttribute('style', 'outline-color: red');
        return;
    }
    if (inputLoginSenha.value === '') {
        inputLoginSenha.focus();
        inputLoginSenha.setAttribute('style', 'outline-color: red');
        return;
    }
    inputLoginEmail.removeAttribute('style');
    inputCadastroSenhaC.removeAttribute('style');
    let usuarioLogando = {
        login: inputLoginEmail.value,
        senha: inputLoginSenha.value
    };
    logarNoSistema(usuarioLogando);
}
function logarNoSistema(usuarioLogando) {
    let listaUsuarios = buscarUsuariosNoStorage();
    let existe = listaUsuarios.some((usuario) => {
        return usuario.login === usuarioLogando.login && usuario.senha === usuarioLogando.senha;
    });
    let usuarioEmail = "";
    let usuarioNome = "";
    console.log(usuarioEmail);
    for (const indice in listaUsuarios) {
        if (listaUsuarios[indice].login == usuarioLogando.login) {
            usuarioNome = listaUsuarios[indice].nome;
            usuarioEmail = listaUsuarios[indice].login;
        }
    }
    if (!existe) {
        if (inputLoginEmail.value == "adm123@gmail.com" && inputLoginSenha.value == "senhaAdm123") {
            sessionStorage.setItem('usuarioLogado', inputLoginEmail.value);
            window.location.href = "../home.html";
        }
        else {
            let confirma = confirm("E-mail ou senha não existe, deseja criar conta?");
            if (confirma) {
                setTimeout(() => {
                    container.classList.add('painel-direito-ativo');
                    formularioCadastro.reset();
                }, 1000);
            }
            return;
        }
    }
    else {
        sessionStorage.setItem('usuarioLogado', inputLoginEmail.value);
        window.location.href = '../user.html';
    }
}
