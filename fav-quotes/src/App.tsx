import LoginModal from "./components/modal/LoginModal"
import RegisterModal from "./components/modal/RegisterModal"
import Navbar from "./components/navbar/Navbar"


const App = () => {
 
  return (
    <div className="">
      <Navbar/>
      <RegisterModal/>
      <LoginModal/>
    
    </div>
  )
}

export default App