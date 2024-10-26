import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function NoticiaPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark

  let post = data.markdownRemark
  let featuredImg = getImage(post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)

  return (
    <div>
      <Layout>
        <h1 className="font-bold text-2xl">{frontmatter.title}</h1>
        <h2>{frontmatter.description}</h2>
        <h2 className="text-sm">Publicado em: {frontmatter.date}</h2>
        <br/>
        {featuredImg && (<><br/><GatsbyImage image={featuredImg} /><br/><br/></>)}
        <div className="text-lg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY", locale: "pt")
        slug
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`
export const Head = ({data}) => {
  return(
    <title>{data.markdownRemark.frontmatter.title}</title>
  )
}