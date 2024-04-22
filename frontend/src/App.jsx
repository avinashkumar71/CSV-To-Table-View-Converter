import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Display from './components/Display'
import View from './components/View'
import { createContext } from 'react'
import axios from 'axios'
import { useEffect , useState} from 'react'


export const UserContext = createContext();

function App() {
  const [Array,setArray] = useState([])
  const [filename,setfilename] = useState('')

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000')
        .then((response)=>{
            setArray(...Array,response.data)   
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    
    const HandlerUpload =()=>{
        console.log('click upload')
        let formData = new FormData();
            formData.append('filename', filename);
            // formData.append('otherParam', 'myValue');

            axios({
            method: 'post',
            url: 'http://127.0.0.1:8000',
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            }
            }).then((response)=>{
                window.location.reload();
            }).catch((error)=> {
                console.log(error) 
            });
        }
  return (
   <>
   <UserContext.Provider value={{Array,filename,HandlerUpload,setfilename}}>
      <BrowserRouter>
      <h1 className='text-center py-3'>Your Files are Here</h1>
        <Routes>
          <Route index element={<Display/>}/>
          <Route path='/view/:Id' element={<View/>}/>
        </Routes>
      </BrowserRouter>
   </UserContext.Provider>
      
   </>
  )
}

export default App
