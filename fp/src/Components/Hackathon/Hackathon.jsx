import React, { useEffect } from 'react'
import { Outlet,useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Hackathon() {
    let navigate=useNavigate()
    let path=useLocation().pathname.split('/')
    console.log(path)
    useEffect(()=>{
        if(path.length==2){
            navigate('past')
        }
        else{
            if(path[2]==''){
                navigate('past')
            }
        }
    })
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default Hackathon
