import * as React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

  export default function HomePage({data}) {

    function convertToDate(dateString) {
      const [day, month, year] = dateString.split('/').map(Number);
      return new Date(year, month - 1, day); // Os meses são baseados em zero
    }

    const array_sorted = data.allMarkdownRemark.edges.sort((a, b) => {
      let da = convertToDate(a.node.frontmatter.date);
      let db = convertToDate(b.node.frontmatter.date);
      return db - da;
    });

    return (
      <main>
        <Layout>
        {array_sorted.map((valor, index) =>{
          const caminho = typeof window !== 'undefined' ? window.location.href + valor.node.frontmatter.slug : '';
          return(
            <div key={index}>
              <Link to={caminho} alt={valor.node.frontmatter.title} className="text-xl font-bold text-green-600">{valor.node.frontmatter.title}</Link>
              <h2 className="text-base">{valor.node.frontmatter.description}</h2>
              <h1 className="text-xs">Publicado em {valor.node.frontmatter.date}</h1><br/> 
            </div>
          )
          })}
        </Layout>
      </main>
    )
  }

  export const query = graphql`
  query MyQuery {
    allMarkdownRemark(limit: 20, sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            date(formatString: "DD/MM/YYYY", locale: "pt")
          }
        }
      }
    }
  }
  `

export const Head = () => <title>Home</title>


