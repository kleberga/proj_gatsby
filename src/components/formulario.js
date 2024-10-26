import * as React from "react"

export default function Formulario(){
    return(
        <div>
            <h2 className="text-lg font-bold my-6">Entre em contato:</h2>
            <div className="container">
                <form name="form_estatico" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className="bg-green-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-6/12" netlify>
                    <input type="hidden" name="form-name" value="form_estatico"/>
                    <label className="font-semibold">
                        Nome
                        <input type="text" name="nome" className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </label>
                    <br/>
                    <br/>
                    <label className="font-semibold">
                        E-mail
                        <input type="email" name="email" className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </label>
                    <br/>
                    <br/>
                    <label className="font-semibold">
                        Assunto
                        <input type="text" name="assunto" className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </label>
                    <br/>
                    <br/>
                    <label className="font-semibold">
                        Mensagem
                        <textarea rows="5" className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
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
