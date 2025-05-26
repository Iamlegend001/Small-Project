
import { Button } from "@/components/ui/button"
import MainRouter from "./routes/MainRouter"
import Navbar from "./components/Navbar"
import Footer from "./components/Fotter"

function App() {
  return (
    <div className="">
      <Navbar className=""/>
      <MainRouter/>
      <Footer/>
    </div>
  )
}

export default App
