import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function SobreNos(){
    return(
        <Layout>
            <div className="ml-12">
                <StaticImage src="../images/global_news.png" alt="Global News" width="130" height="60" className="border-solid border-2 border-green-500"/>
                <br/>
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