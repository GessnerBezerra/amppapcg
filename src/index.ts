let btnAcessar = document.getElementById('btn-acessar') as HTMLButtonElement;
let btnCadastrar = document.getElementById('btn-cadastrar') as HTMLButtonElement;
let container = document.getElementById('container') as HTMLDivElement;
let linkWelcomeLogin = document.getElementById('welcomepg-login') as HTMLButtonElement;
let linkWelcomeCadast = document.getElementById('welcomepg-cadast') as HTMLButtonElement;

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
let formularioCadastro = document.querySelector('#formulario-cadastro') as HTMLFormElement;
let inputCadastroNomeC = document.querySelector('#input-cadastro-nome') as HTMLInputElement;
let inputCadastroEmailC = document.querySelector('#input-cadastro-email') as HTMLInputElement;
let inputCpfC = document.querySelector('#input-cadastro-cpf') as HTMLInputElement;
let inputCadastroSenhaC = document.querySelector('#input-cadastro-senha') as HTMLInputElement;
let inputLoginC = document.querySelector("#login") as HTMLInputElement;

let inputSenhaconfirmaC = document.querySelector("#senha-confirm") as HTMLInputElement;
let inputIdadeC = document.querySelector(
  "#idade"
) as HTMLInputElement;
let inputRuaC = document.querySelector("#rua") as HTMLInputElement;
let inputNumRuaC = document.querySelector("#numRua") as HTMLInputElement;
let inputBairroC= document.querySelector("#bairro") as HTMLInputElement;
let inputCidadeC = document.querySelector("#cidade") as HTMLInputElement;
let inputFoneC = document.querySelector("#fone") as HTMLInputElement;
let inputCnhC = document.querySelector("#cnh") as HTMLInputElement;
let inputCatCnhC = document.querySelector("#categCnh") as HTMLInputElement;
let inputDataCnhC = document.querySelector("#dataCnh") as HTMLInputElement;
let inputValidCnhC = document.querySelector("#validadecnh") as HTMLInputElement;
let inputModCarroC = document.querySelector("#modlCarro") as HTMLInputElement;
let inputCorCarroC = document.querySelector("#corCarro") as HTMLInputElement;
let inputAnoCarroC = document.querySelector("#anoCarro") as HTMLInputElement;
let inputPlacaC = document.querySelector("#placa") as HTMLInputElement;



formularioCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault();

    verificaCampos();
});

function verificaCampos(): void {

    if (inputCadastroNomeC.value === '' || inputCadastroNomeC.value.length < 3) {
        inputCadastroNomeC.focus();
        inputCadastroNomeC.setAttribute('style', 'outline-color: red');
        return
    }

    if (inputCadastroEmailC.value === '' || inputCadastroEmailC.value.length < 10) {
        inputCadastroEmailC.focus();
        inputCadastroEmailC.setAttribute('style', 'outline-color: red');
        return
    }

    if (inputCadastroSenhaC.value === '' || inputCadastroSenhaC.value.length < 8) {
        inputCadastroSenhaC.focus();
        inputCadastroSenhaC.setAttribute('style', 'outline-color: red');
        return
    }

    inputCadastroNomeC.removeAttribute('style');
    inputCadastroEmailC.removeAttribute('style');
    inputCadastroSenhaC.removeAttribute('style');

    let novoUsuario: Driver = {
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
                }
    

    cadastrarUsuario(novoUsuario);
}

let indiceDrv: string = "";

function cadastrarUsuario(novoUsuario: Driver) {
    let listaUsuarios: Driver[] = buscarUsuariosNoStorage();

    // for (let indice in listaUsuarios){
    //     indiceDrv = indice;
    // }

    // let indicDrvNumb = +indiceDrv;

    // let listaDriver = listaUsuarios[indicDrvNumb];

    let existe: boolean = listaUsuarios.some((usuario) => {
        return usuario.login === novoUsuario.login ||  usuario.cpf === novoUsuario.cpf
    });

    if (existe) {
        let confirma = confirm("Usuário já está cadastrado. Deseja ir para a página de login?");

        if (confirma) {
            container.classList.add('painel-direito-ativo');
            formularioCadastro.reset();
        }
        return
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

let formularioLogin = document.querySelector('#formulario-login') as HTMLFormElement;
let inputLoginEmail = document.querySelector('#input-login-email') as HTMLInputElement;
let inputLoginSenha = document.querySelector('#input-login-senha') as HTMLInputElement;

formularioLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();

    validarCamposLogin();
});

function validarCamposLogin() {
    if (inputLoginEmail.value === '') {
        inputLoginEmail.focus();
        inputLoginEmail.setAttribute('style', 'outline-color: red');
        return
    }

    if (inputLoginSenha.value === '') {
        inputLoginSenha.focus();
        inputLoginSenha.setAttribute('style', 'outline-color: red');
        return
    }

    inputLoginEmail.removeAttribute('style');
    inputCadastroSenhaC.removeAttribute('style');

    let usuarioLogando = {
        login: inputLoginEmail.value,
        senha: inputLoginSenha.value
    }

    logarNoSistema(usuarioLogando);
}

function logarNoSistema(usuarioLogando: any) {
    let listaUsuarios: Usuario[] = buscarUsuariosNoStorage();

    let existe: boolean = listaUsuarios.some((usuario) => {
        return usuario.login === usuarioLogando.login && usuario.senha === usuarioLogando.senha
    });

    let usuarioEmail: string = "";
    let usuarioNome: string = "";

    console.log(usuarioEmail);

        for (const indice in listaUsuarios) {
    if (listaUsuarios[indice].login == usuarioLogando.login) {
        usuarioNome = listaUsuarios[indice].nome;
        usuarioEmail = listaUsuarios[indice].login;
    }
    }


    if (!existe) {
        if (inputLoginEmail.value == "adm123@gmail.com" && inputLoginSenha.value == "senhaAdm123"){
         sessionStorage.setItem('usuarioLogado', inputLoginEmail.value);
        window.location.href = "../home.html";
    }

    else{
        let confirma = confirm("E-mail ou senha não existe, deseja criar conta?");

        if (confirma) {

            setTimeout(() => {
                container.classList.add('painel-direito-ativo');
                formularioCadastro.reset();
            }, 1000);
        }
        return
    }
    }

    else{
        sessionStorage.setItem('usuarioLogado', inputLoginEmail.value);
        window.location.href = '../user.html';

    }

    
}