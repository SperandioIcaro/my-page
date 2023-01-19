import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/header"
import { SocialBar } from "./components/socialBar"
import { client } from "./lib/apollo"
import { Router } from "./Router"
import { Cafezinho } from "./components/cafezinho"

function App() {
  return(
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Cafezinho />
        <Header />
          <Router />
        <SocialBar />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App