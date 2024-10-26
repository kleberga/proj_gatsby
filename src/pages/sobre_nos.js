import * as React from "react"
import Layout from "../components/layout"
import GlobalNews from "../images/global_news.png"

export default function SobreNos(){
    return(
        <Layout>
            <div className="ml-12">
                <img src={GlobalNews} alt="Global News" width="130" className="border-solid border-2 border-green-500"></img>
                <br/>
                <p className="text-2xl font-semibold">A Global News é uma empresa de comunicação que tem por objetivo fornecer notícias sobre vários temas de forma rápida e acessível.</p>
                <br/>
                <p className="text-2xl font-semibold">Temos aplicações web prontas para fornecer notícias sobre economia, finanças, política e esportes.</p>
                <br/>

            </div>
        </Layout>
    )
}

export const Head = () => <title>Sobre nós</title>