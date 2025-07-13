import React, { use } from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const ans=userContext(UserDataContext)
  console.log(ans)
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/login' element={<UserLogin/>} />
        <Route  path='/signup' element={<UserSignup/>} />
        <Route  path='/captain-login' element={<CaptainLogin/>} />
        <Route  path='/captain-signup' element={<CaptainSignup/>} />
      </Routes>
    </div>
  )
}

export default App
