import * as React from "react"
import { useState } from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import ReactPaginate from "react-paginate"
import '../styles/global.css'
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

  export default function HomePage({data}) {

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({selected: page}) => setCurrentPage(page);

    function convertToDate(dateString) {
      const [day, month, year] = dateString.split('/').map(Number);
      return new Date(year, month - 1, day); // Os meses são baseados em zero
    }

    const array_sorted = data.allMarkdownRemark.edges.sort((a, b) => {
      let da = convertToDate(a.node.frontmatter.date);
      let db = convertToDate(b.node.frontmatter.date);
      return db - da;
    });

    const newsPerPage = 10;
    const totalPages = Math.ceil(data.allMarkdownRemark.edges.length/10);
    const startIndex = currentPage * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    const currentItems = array_sorted.slice(startIndex, endIndex);

    return (
      <main lang="pt-br">
        <meta name="descricao" content="Página Home contendo o título, subtítulo e data de publicação das notícias."></meta>
        <Layout>
        {currentItems.map((valor, index) =>{
          const caminho = typeof window !== 'undefined' ? window.location.href + valor.node.frontmatter.slug : '';
          return(
            <div key={index}>
              <Link to={caminho} alt={valor.node.frontmatter.title} className="text-xl font-bold text-green-600">{valor.node.frontmatter.title}</Link>
              <h2 className="text-base">{valor.node.frontmatter.description}</h2>
              <h1 className="text-xs">Publicado em {valor.node.frontmatter.date}</h1><br/> 
            </div>
          )
          })}
            <ReactPaginate  className="place-content-center flex flex-row space-x-2 text-xl font-bold" 
              activeClassName={"active"}
              pageClassName={"page-item"}
              breakLabel={"..."}
              containerClassName={'pagination'}
              onPageChange={handlePageChange}
              pageCount={totalPages}         
              previousLabel={
                <IconContext.Provider value={{ color: "#31511E", size: "36px" }}>
                  <AiFillLeftCircle />
                </IconContext.Provider>
              }
              nextLabel={
                <IconContext.Provider value={{ color: "#31511E", size: "36px" }}>
                  <AiFillRightCircle />
                </IconContext.Provider>
              }
            />
        </Layout>
      </main>
    )
  }

  export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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


