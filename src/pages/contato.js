import * as React from "react"
import Layout from "../components/layout"
import Formulario from "../components/formulario"
import { StaticImage } from "gatsby-plugin-image"

export default function Contato(){
    return(
        <Layout lang="pt-br">
            <meta name="descricao" content="Página contendo formulário para envio de críticas, dúvidas e sugestões."></meta>
            <div className="ml-12">
                <div >
                <StaticImage src="../images/global_news.png" alt="Global News" width="130" height="60" className="border-solid border-2 border-green-500"/>
                </div>
                <Formulario/>
            </div>
        </Layout>
    )
}

export const Head = () => <title>Contato</title>