
import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm ">
      <div className="py-4"></div>
      <Container>
        <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
          <Link to = "/">
          <Logo />
          </Link>
          <Search/>
          <UserMenu/>
         
        </div>
      </Container>
     
    </div>
  )
}

export default Navbar