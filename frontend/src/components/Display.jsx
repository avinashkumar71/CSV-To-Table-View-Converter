import React, {useContext } from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../App'

function Display() {
    const {Array,filename,HandlerUpload,setfilename} = useContext(UserContext)
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
                                <th><Link to={`/view/${item.id}`}><button className='btn btn-success'>View</button></Link></th>
                                <th scope="col"><Link to={`http://127.0.0.1:8000/${item.filename}`}><button className='btn btn-success'>Download</button></Link></th>
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