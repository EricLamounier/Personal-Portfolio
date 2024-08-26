import './style.css'
import { useState } from 'react';

export default function Contato(){

    const [message, setMessage] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [erroNome, setErroNome] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroMessage, setErroMessage] = useState('');

    const check = () => {
        let chk = true;
        if(nome.replace(/\s+/g, '').length === 0){
            setErroNome('*Campo obrigatorio!');
            setTimeout(()=>{
                setErroNome('');
            }, 5000)
            chk = false
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(email)){
            setErroEmail('*E-mail deve ser válido!');
            setTimeout(()=>{
                setErroEmail('');
            }, 5000)
            chk = false
        }

        if(message.replace(/\s+/g, '').length === 0){
            setErroMessage('*Campo obrigatorio!');
            setTimeout(()=>{
                setErroMessage('');
            }, 5000)
            chk = false
        }

        return chk
    }

    const sendEmail = () => {
        if(!check())
            return

        fetch('https://emailsenderportifolio.vercel.app/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mensagem: message,
                nomeRemetente: nome,
                emailRemetente: email
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log('Resposta do servidor:', data);
            alert('E-mail enviado!');
        })
        .catch(err => {
            console.error('Erro ao enviar e-mail:', err);
        });
    }
    return (
        <div id="contact">
            <h2 className="title">CONTACT <span> ME </span></h2>
            <div className="form">
                <div className="inputBox">
                    <label className="input" htmlFor="name">Name <span className='messageErro nome'>{erroNome}</span></label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={nome}
                        onChange={(e)=>setNome(e.target.value)}
                        required 
                    />
                    <div id="errorName"></div>
                </div>
                <div className="inputBox">
                    <label className="input" htmlFor="email">E-mail <span className='messageErro email'>{erroEmail}</span></label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required 
                    />
                    <div id="errorEmail"></div>
                </div>
                <div className="inputBox">
                    <label className="input" htmlFor="message">Message <span className='messageErro message'>{erroMessage}</span></label>
                    <textarea 
                        id="message" 
                        name="mensagem" 
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        required
                    ></textarea>
                    <div id="errorMessage"></div>
                </div>
                <button  id="submit" name="submit" onClick={()=>sendEmail()}>CONTACT ME</button>
            </div>
        </div>
    )
}