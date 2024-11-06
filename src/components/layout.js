import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Layout({children}) {
    
    return(
        <body className="flex flex-col min-h-screen bg-green-100" lang="pt-br">
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-12">
                        <Link to="/" className="flex items-center">
                            <StaticImage src="../images/economia3.png" className="w-full max-w-20 h-auto mr-3"  alt="Notícias de Economia" />
                            <span className="self-center text-xl font-bold whitespace-nowrap text-green-800">Notícias de Economia</span>
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"  aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ">Home</Link>
                                </li>
                                <li>
                                    <Link to="/sobre_nos" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sobre nós</Link>
                                </li>
                                <li>
                                    <Link to="/contato" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contato</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="mx-6 my-4 flex-grow">
                {children}
             </main>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <StaticImage src="../images/economia3.png" className="h-6 w-12" alt="Notícias de Economia" />
                            <span className="self-center text-1xl font-semibold whitespace-nowrap text-green-800">Notícias de Economia</span>
                        </div>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li >
                                <Link to="/sobre_nos" className="hover:underline me-4 md:me-6">Sobre nós</Link>
                            </li>
                            <li >
                                <Link to="/politica_privacidade" className="hover:underline me-4 md:me-6">Política de Privacidade</Link>
                            </li>
                            <li>
                                <Link to="/contato" className="hover:underline">Contato</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Global News&reg;. Todos os direitos reservados.</span>
                </div>
            </footer>    
        </body>
    )
}

