let n = false
let e = false
let m = false

const nome = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
let btn = document.getElementById('submit');

nome.addEventListener('input', checkInput)
email.addEventListener('input', checkInput)
message.addEventListener('input', checkInput)

function checkInput() {
    let btn = document.getElementById('submit');
    
    if(nome.value.length < 1) {
        n = false
    }else{
        n = true 
    }

    const exclude=  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if((email.value).search(exclude) == -1){
        e = false
    }else{
        e = true 
    }

    if(message.value.length < 1) {
        m = false
    }else{
        m = true 
    }

    if(n && e && m) {
        btn.removeAttribute('disabled')
    }else{
        btn.setAttribute('disabled', 'disabled')
    }
}

const send = () => {
    fetch('https://emailsenderportifolio.vercel.app/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mensagem: message.value,
            nomeRemetente: nome.value,
            emailRemetente: email.value
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log('Resposta do servidor:', data);
    })
    .catch(err => {
        console.error('Erro ao enviar e-mail:', err);
    });
};

const sleep = (delay) => {
    return new Promise(resolve => setTimeout(resolve, delay));
}

const p = document.getElementById('text');
const frases = ['Precisa de um site?', 'Quer conversar sobre uma ideia?', 'Precisa de um Wep App?', 'Precisa de uma solução para seu negócio?']
const escreve = async (delayTexto, delayLetras) => {

    while(true){
        // escreve
        for(texto of frases){
            for(c of texto){ // escreve
                p.innerHTML += c;
                await sleep(delayLetras);
            }

            await sleep(delayTexto);

            for(c of texto){ // apaga
                p.innerHTML = p.innerHTML.slice(0, p.innerHTML.length-1);
                await sleep(delayLetras-50);
            }
        }
    }
}

escreve(1000, 100)