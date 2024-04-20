import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'
function View() {
    const [tabledata,settabledata] = useState([])
    const [heading,setheading] = useState([])
    const {Id} = useParams()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/${Id}`)
        .then((response)=>{
            const value = response.data.table.map((item)=>{
                return Object.values(item)
            })
            settabledata(value)
            setheading(response.data.table[0])
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <table class="table">
                    <thead>
                        <tr>
                            <th>s.no</th>
                            {Object.keys(heading).map((hed)=>{
                                return(
                                    <th scope="col">{hed}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tabledata.map((item,index)=>{
                               return(
                                <tr>
                                    <td>{index+1}</td>
                                    {item.map((value)=>{
                                        return(
                                            <td>{value}</td>
                                        )                    
                                    })}
                                </tr>
                               )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default View