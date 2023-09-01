import LoginModal from "./components/modal/LoginModal"
import RegisterModal from "./components/modal/RegisterModal"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/Hero"
import RandomQuote from "./components/RandomQuote"


const App = () => {
 
  return (
    <div className="">
      <Navbar/>
      
      <RegisterModal/>
      <LoginModal/>
      <div className="pt-[150px]">
      <Hero/>
      <RandomQuote/>
      </div>
   
    
    </div>
  )
}

export default App