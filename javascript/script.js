let n = false
let e = false
let m = false

const nome = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

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