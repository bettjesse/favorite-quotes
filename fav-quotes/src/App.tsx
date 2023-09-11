import LoginModal from "./components/modal/LoginModal";
import RegisterModal from "./components/modal/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import RandomQuote from "./components/RandomQuote";
import ToastProvider from "./providers/ToastProvider";
import CreateQuoteModal from "./components/modal/CreateQuoteModal";
import MyQuotes from "./components/MyQuotes";
import QuoteDetail from "./components/QuoteDetail";
import EditQuoteModal from "./components/modal/EditQuoteModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Providers } from "./Provider";

const HomeLayout = () => {
  return (
    <div className="">
      <Navbar />
      <ToastProvider />
      <RegisterModal />
      <LoginModal />
      <CreateQuoteModal />
    
      <div className="pt-[130px]">
        <Hero />
        <RandomQuote />
      </div>
    </div>
  );
};

const MyQuotesLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[130px]">
      <MyQuotes />
      </div>
    </div>
  );
};
const QuoteDetailLayout = ()=>{
  return (
    <div>
      <Navbar />
      <div className="pt-[130px]">
      <QuoteDetail/>
      <EditQuoteModal/>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Providers>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/myquotes" element={<MyQuotesLayout />} />
          <Route path="/quote/:id" element={<QuoteDetailLayout/>} /> 
        </Routes>
      </Providers>
    </Router>  
  );
};

export default App;
