import { useState } from "react"
import Home from "./pages/Home/Home"
import Success from "./pages/Success/Success"

const App = () => {
  const [isSuccess, setIsSuccess] = useState(false)

  const handleClick = () => {
    setIsSuccess(!isSuccess)
  }

  return (
    <>
      {isSuccess ? <Success handleClick={handleClick}/> : <Home handleClick={handleClick}/>}
    </>
  )
}

export default App