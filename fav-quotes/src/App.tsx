import Modal from "./components/modal/Modal"
import Navbar from "./components/navbar/Navbar"
import {useState}from "react"
import { closeRegisterModal } from "./slices/registerModalSlice"
import { useAppDispatch,useAppSelector } from "./hooks/useAppHooks"


const App = () => {
  const [isLoding, setIsLoading] = useState(false)
  const registerModalOpen = useAppSelector((state)=> state.toggleRegisterModal.isRegisterModalOpen)

  const dispatch = useAppDispatch()

  const handleClose = ()=> {
    dispatch(closeRegisterModal())

  }
  const handlesubmit = ()=> {
    setIsLoading(true)
  }

  const bodyContent = (
    <div>
      body
    </div>
  )
  
  const footerContent = (
    <div>
      body
    </div>
  )

  return (
    <div className="">
      <Navbar/>
      <Modal 
     isOpen={registerModalOpen}
      onClose={handleClose}
      onSubmit={handlesubmit}
      title="register"
      body={bodyContent}
      footer={footerContent}
      actionLabel=" continue"
      disabled={isLoding}


      />
    </div>
  )
}

export default App