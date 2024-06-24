import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
    let navigate = useNavigate()
    let style = {
        backgroundColor: '#B235B2',
        borderRadius: '7px'
    }
    let path = useLocation().pathname
    let [index, setIndex] = useState(-1)
    let menuOptions = [
        {
            text: 'Home',
            to: '/'
        },
        {
            text: 'Hackathon',
            to: '/hackathon',
            child: [
                {
                    text: 'Past',
                    to: '/hackathon/past'
                },
                {
                    text: 'Current',
                    to: '/hackathon/current'
                },
                {
                    text: 'Upcoming',
                    to: '/hackathon/upcoming'
                }
            ]
        },
        {
            text: 'Explore',
            to: '/explore',
            child: [
                {
                    text: 'Ideas',
                    to: '/explore/ideas'
                },
                {
                    text:'Alumini',
                    to: '/explore/alumini'
                }
            ]
        },
        {
            text: 'Form',
            to: '/form'
        },
        {
            text: 'VJ HUb',
            to: '/vjhub'
        },
        {
            text: 'ED Cell',
            to: 'edcell'
        }
    ]
    return (
        <div className='d-flex justify-content-end p-2' style={{ backgroundColor: '#cfcfcf' }}>
            <ul className="nav text-center" style={{ fontSize: '1.3rem' }}>
                {menuOptions.map((ele, ind) => {
                    return (<li className="nav-item li px-1" style={{ position: 'relative' }} onMouseEnter={() => setIndex(ind)} onMouseLeave={() => { setIndex(-1) }}>
                        <div className='list-div'>
                        <NavLink className="nav-link text-primary p-1 px-3" to={ele.to} style={{cursor: 'pointer' }}>
                            {ele.text}
                        </NavLink>
                        {ele.child != undefined && index == ind && <div style={{ position: 'absolute', width: '100%', height: '40%', top: '100%', left: 0 }}></div>}
                        {ele.child != undefined && index == ind && <div className='p-2 rounded-2' style={{ backgroundColor: '#cfcfcf', position: 'absolute', width: '100%', top: '140%', left: '0', zIndex:10 }}>
                            {ele.child.map((ele2) => {
                                return <p className='text-start list-p fs-6 m-0 px-2 py-1' onClick={() => {
                                    navigate(ele2.to)
                                    setIndex(-1)
                                }} style={{ cursor: 'pointer' }}>{ele2.text}</p>
                            })}
                        </div>}
                        </div>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Navbar