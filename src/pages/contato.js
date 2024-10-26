import * as React from "react"
import Layout from "../components/layout"
import GlobalNews from "../images/global_news.png"
import Formulario from "../components/formulario"

export default function Contato(){
    return(
        <Layout>
            <div className="ml-12">
                <div >
                    <img src={GlobalNews} alt="Global News" width="130" className="border-solid border-2 border-green-500"></img>
                </div>
                <Formulario/>
            </div>
        </Layout>
    )
}

export const Head = () => <title>Contato</title>