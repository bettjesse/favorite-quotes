import LoginModal from "./components/modal/LoginModal"
import RegisterModal from "./components/modal/RegisterModal"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/Hero"
import RandomQuote from "./components/RandomQuote"
import ToastProvider from "./providers/ToastProvider"
import CreateQuoteModal from "./components/modal/CreateQuoteModal"


const App = () => {
 
  return (
    <div className="">
      
      <Navbar/>
      <ToastProvider/>
      
      <RegisterModal/>
      <LoginModal/>
      <CreateQuoteModal/>
      <div className="pt-[150px]">
      <Hero/>
      <RandomQuote/>
      
      </div>
   
    
    </div>
  )
}

export default App