import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles} lang="pt-br">
      <meta name="descricao" content="Página de erro ao acessar algum recurso da aplicação."></meta>
      <h1 style={headingStyles}>Página não encontrada</h1>
      <p style={paragraphStyles}>
        Desculpe 😔, não encontramos o que você estava procurando.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Tente criar uma página em <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Ir para a Home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
