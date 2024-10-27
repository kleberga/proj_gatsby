import * as React from "react"
import { useState } from "react"

export default function Formulario(){

    const[inputs, setInputs] = useState({nome: "", email: "", assunto: "", mensagem: ""})

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs({...inputs, [name]: value})
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (event) => {
        if(inputs.nome && inputs.nome.length < 5){
            alert("O campo nome precisa ter pelo menos 5 caracteres.")
            return;
        } else if(!isEmail(inputs.email)){
            alert("E-mail inválido.")
            return;
        } else if(inputs.assunto && inputs.assunto.length < 10){
            alert("O campo assunto precisa ter pelo menos 10 caracteres.")
            return;
        } else if(inputs.mensagem && inputs.mensagem.length < 20){
            alert("O campo mensagem precisa ter pelo menos 20 caracteres.")
            return;
        } else {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "form_react",
                    nome: inputs.nome,
                    email: inputs.email,
                    assunto: inputs.assunto,
                    mensagem: inputs.mensagem
                })
            }).then(() => {
                    alert("Mensagem enviada com sucesso!")
                    setInputs({nome: "", email: "", assunto: "", mensagem: ""})
            }).catch(error => alert("Erro ao enviar a mensagem: " + error));
        }
    }

    const isEmail = (email) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    return(
        <div>
            <h2 className="text-lg font-bold my-6">Entre em contato:</h2>
            <div className="container">
                <form name="form_react" method="post" onSubmit={handleSubmit} 
                    className="bg-green-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-6/12"
                    data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="form_react"/>
                    <label className="font-semibold">
                        Nome
                        <input 
                        value={inputs.nome}
                        type="text" 
                        name="nome" 
                        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleInputChange}
                        required
                        />
                    </label>
                    <br/>
                    <br/>
                    <label className="font-semibold">
                        E-mail
                        <input 
                        type="email" 
                        name="email" 
                        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        />
                    </label>
                    <br/>
                    <br/>
                    <label className="font-semibold">
                        Assunto
                        <input 
                        type="text" 
                        name="assunto" 
                        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        />
                    </label>
                    <br/>
                    <br/>
                    <label className="font-semibold">
                        Mensagem
                        <textarea 
                        rows="5" 
                        name="mensagem" 
                        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        >
                        </textarea>
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" value="Enviar" />
                    <input type="reset" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" value="Limpar" />
                </form>
            </div>
        </div>
    )
}
