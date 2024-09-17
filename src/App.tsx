import Dashboard from "./components/Dashboard/Dashboard"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import TransactionList from "./components/TransactionList/TransactionList"

function App() {

  return (
    <>
      <Header />
      <main>
        <Dashboard />
        <TransactionList />
      </main>
      <Footer />
    </>
  )
}

export default App
