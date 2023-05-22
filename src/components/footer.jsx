
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
function Footer() {
    return (
        <footer className="flex flex-row font-akshar bg-darkgrey text-white p-20 justify-between">
            <div className="flex flex-col gap-y-9 w-96">
                <h1 className="text-4xl underline-offset-8 font-bold underline">OSMHACK</h1>
                <p className="text-xl">
                    A platform for encouraging tech students in universities and colleges to build a product/solutions using OpenStreetMap with a motto “OSM for a good cause”.
                </p>
            </div>

            <div className="flex flex-col gap-y-9">
                <h1 className="text-4xl underline underline-offset-8 font-bold ">Contact Us</h1>
                <ul className="list-none text-xl flex flex-col gap-2">

                    <li className='flex flex-row gap-3'><BsFacebook></BsFacebook> OSAC: It Club of Amrit Science Campus ASCOL</li>
                    <li className='flex flex-row gap-3'><BsLinkedin></BsLinkedin>Open Source ASCOL Circle (OSAC)</li>
                    <li className='flex flex-row gap-3'><BsFacebook></BsFacebook>Open Source ASCOL Circle (OSAC)</li>
                    <li className='flex flex-row gap-3'><BsFacebook></BsFacebook>Open Source ASCOL Circle (OSAC)
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;