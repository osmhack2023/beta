
import { BsFacebook, BsFillTelephoneFill, BsTelephoneFill } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { SiWebmoney } from 'react-icons/si';
import { AiTwotoneMail } from 'react-icons/ai'
function Footer() {
    return (
        <footer className="flex  flex-col gap-y-20 md:flex-row font-akshar bg-darkgrey text-white p-10 md:p-20 justify-between">
            <div className="flex flex-col gap-y-9 w-96">
                <h1 className="text-4xl underline-offset-8 font-bold underline">OSMHACK</h1>
                <p className="text-xl">
                    A platform for encouraging tech students in universities and colleges to build a product/solutions using OpenStreetMap with a motto “OSM for a good cause”.
                </p>
            </div>

            <div className="flex flex-col gap-y-9">
                <h1 className="text-4xl underline underline-offset-8 font-bold ">Contact Us</h1>
                <ul className="list-none text-xl flex flex-col gap-4">

                    <a href="https://www.facebook.com/profile.php?id=100092362080835" target="_blank" ><li className='flex flex-row gap-3'><BsFacebook className='active:translate-y-1 hover:text-dgrey'></BsFacebook> OSAC: It Club of Amrit Science Campus ASCOL</li></a>
                    <a href="https://www.linkedin.com/company/open-source-ascol-circle-osac/" target="_blank"><li className='flex flex-row gap-3'><BsLinkedin className='active:translate-y-1 hover:text-dgrey'></BsLinkedin>Open Source ASCOL Circle (OSAC)</li></a>
                    <a href="https://www.osac.org.np" target="_blank" ><li className='flex flex-row gap-3'><SiWebmoney className='active:translate-y-1 hover:text-dgrey'></SiWebmoney>osac.org.np</li></a>
                    <a href="mailto:@osac2gether@gmail.com" target="_blank" ><li className='flex flex-row gap-3'><AiTwotoneMail className='active:translate-y-1 hover:text-dgrey'></AiTwotoneMail>osac2gether@gmail.com
                    </li></a>
                    <a href="tel:+9779869938356" target="_blank" ><li className='flex flex-row gap-3'><BsTelephoneFill className='active:translate-y-1 hover:text-dgrey'></BsTelephoneFill>9869938356, 9814285622
                    </li></a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;