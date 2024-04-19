import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Display from './components/Display'

function App() {

  return (
   <>
      <BrowserRouter>
      <h1 className='text-center py-3'>Your Files are Here</h1>
        <Routes>
          <Route index element={<Display/>}/>
          
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
