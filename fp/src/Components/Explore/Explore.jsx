import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function Explore() {
    let navigate=useNavigate()
    let path=useLocation().pathname.split('/')
    console.log(path)
    useEffect(()=>{
        if((path.length==2)||(path.length==3&&path[2]=='')){
            navigate('ideas')
        }
    })
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default Explore
