import logo from '../logo.png'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="flex justify-between mt-2">
            <div>
                <img src={logo} className="h-20 "></img>
            </div>
            <div className='basis-1/2 text-xl mt-5 font-inter'>
                <ul className='list-none flex justify-around items-center'>
                    <li className='font-bold '>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='font-bold'>Teams</li>
                    <li className='font-bold'>Pre-events</li>
                    <button className='bg-rednew text-white p-3  rounded-md'
                        style={
                            { "border": "1px solid #0000FF", "borderRadius": "6px" }
                        }
                    >Register Now</button>
                </ul>

            </div>


        </nav>

    )
}

export default Navbar;
