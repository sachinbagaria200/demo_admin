import React from 'react'
import { Button } from "@/components/ui/button"


const App = () => {
  return (
    <div>
      <h1>Welcome to Manor & Ashbury</h1>
      <Button onClick={() => alert("hello")}>Click me</Button>
    </div>
  )
}

export default App