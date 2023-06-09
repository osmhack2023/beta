import logo from '../logo.png'

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect } from 'react';
import { useState } from 'react';
import "./style.css"
function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const [toggle, setToggle] = useState(0)
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
            setToggle(1);
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    const navToggle1 = () => {

        if (toggle == 1) {
            if (active === "nav__menu") {
                setActive("nav__menu nav__active");

            } else setActive("nav__menu");

            // Icon Toggler
            if (icon === "nav__toggler") {
                setIcon("nav__toggler toggle");
            } else setIcon("nav__toggler");
            setToggle(0);
        }

    };



    return (




        <nav className={"flex justify-between mt-2 nav"}>
            <div>
                <Link to="/"><img src={logo} className="h-20 "></img></Link>
            </div>
            <div className=' text-xl mt-5 font-inter'>
                <ul className={'list-none flex  justify-center md:justify-around gap-x-20 gap-y-24  px-10  items-center' + ' ' + active}>
                    <li className='font-semibold active:translate-y-1 hover:text-dgrey' onClick={navToggle1}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='font-semibold  active:translate-y-1 hover:text-dgrey' onClick={navToggle1}> <Link to="/teams">Teams</Link></li>
                    {/* <li className='font-semibold  active:translate-y-1 hover:text-dgrey' onClick={navToggle1}> <Link to="/">Pre-events</Link></li> */}
                    {/* <Link to="/redirect"> */}

                    <a href="https://register.osmhack.org/" target='_blank'><button onClick={navToggle1} className='bg-rednew text-white p-3  rounded-md hover:bg-dblue active:translate-y-1'
                        style={
                            { "borderRadius": "6px" }
                        }
                    >
                        Register Now</button></a>

                    {/* </Link> */}
                </ul>


            </div>


            <div onClick={navToggle} className={icon}>
                <GiHamburgerMenu className='m-5 text-4xl' />
            </div>
        </nav >

    )
}

export default Navbar;
