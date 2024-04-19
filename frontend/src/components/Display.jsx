import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Display() {
    const [Array,setArray] = useState([])
    const [filename,setfilename] = useState('')
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000')
        .then((response)=>{
            console.log(response)
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
                console.log(response)
                window.location.reload();
            }).catch((error)=> {
                console.log(error) 
            });
        }

    const HandlerDownload =()=>{
        console.log('download click')
    }

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-5'>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setfilename(e.target.files[0])} />
                            </div>
                            <button class="btn btn-primary" onClick={HandlerUpload}>Upload</button>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                <table class="table my-5">
                <thead>
                    {Array.map((item)=>{
                        return(
                            <tr>
                                <th scope="col"><Link to={`http://127.0.0.1:8000/${item.filename}`}><button className='btn btn-success' onClick={()=>{HandlerDownload()}}>Download</button></Link></th>
                                <th>{item.filename.slice(7)}</th>
                            </tr>
                        )
                    })}
                </thead>
                </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Display