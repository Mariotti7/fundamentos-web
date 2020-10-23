let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;


nome.style.width = "100%";
email.style.width = "100%";
assunto.style.width = "100%";

function validaNome() {
  let txtNome = document.querySelector("#txt-nome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome Inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome Válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txt-email");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "Email Inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "Email Válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector("#txt-assunto");
  if (assunto.value.length > 150) {
    txtAssunto.innerHTML = "Texto longo demais!";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = 'block';
  } else {
    txtAssunto.style.display = 'none';
    assuntoOk = true;
  }
}

function enviar(){
    let txtBotao = document.querySelector('#txt-botao');
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!");

    }else{
        alert("Preencha corretamente todos os campos!");
        txtBotao.innerHTML = 'Preencha todos os campos corretamente';
        txtBotao.style.color = 'red';
        
    }
}
