import * as React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function Formulario(){

    const[inputs, setInputs] = useState({nome: "", email: "", assunto: "", mensagem: ""})
    const [validNome, setValidNome] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validAssunto, setValidAssunto] = useState(false)
    const [validMensagem, setValidMensagem] = useState(false)
    const [disabledButton, setDisabledButton] = useState(true)

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

    useEffect(() => {
        setValidNome(inputs.nome.length >= 5)
        setValidEmail(isEmail(inputs.email))
        setValidAssunto(inputs.assunto.length >= 10)
        setValidMensagem(inputs.mensagem.length >= 20)
        setDisabledButton(!(validNome && validEmail && validAssunto && validMensagem))
    }, [inputs, validNome, validEmail, validAssunto, validMensagem, disabledButton])


    const handleSubmit = () => {
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
                        {!validNome && <div><p className="text-red-500 text-sm">Nome precisa ter pelo menos 5 caracteres</p></div>}
                    </label>
                    {validNome && <br/>}
                    <br/>
                    <label className="font-semibold">
                        E-mail
                        <input 
                        type="email" 
                        name="email" 
                        onChange={handleInputChange}
                        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        />
                        {!validEmail && <p className="text-red-500 text-sm">E-mail inválido</p>}
                    </label>
                    {validEmail && <br/>}
                    <br/>
                    <label className="font-semibold">
                        Assunto
                        <input 
                        type="text" 
                        name="assunto" 
                        onChange={handleInputChange}
                        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        />
                        {!validAssunto && <p className="text-red-500 text-sm">Assunto precisa ter pelo menos 10 caracteres</p>}
                    </label>
                    {validAssunto && <br/>}
                    <br/>
                    <label className="font-semibold">
                        Mensagem
                        <textarea 
                        rows="5" 
                        name="mensagem" 
                        onChange={handleInputChange}
                        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        >
                        </textarea>
                        {!validMensagem && <p className="text-red-500 text-sm">Mensagem precisa ter pelo menos 20 caracteres</p>}
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" disabled={disabledButton}  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" value="Enviar" />
                    <input type="reset" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" value="Limpar" />
                </form>
            </div>
        </div>
    )
}
