
import cover from '../images/newocv.jpg'

import { BsCalendarEvent } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
function Header() {
    return (
        <div className=' h-128 w-full mt-2 flex flex-col items-center justify-around '

            style={{
                backgroundImage: `url(${cover})`,

                backgroundColor: '#0000FF1A',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',

                // height: '500px',
            }}
        >
            <div className='flex flex-col '>
                <h1 className='text-center font-inter text-7xl text-white p-auto gap-y-0 '
                    style={
                        { "color": "#FFFFFF", "fontWeight": "600", "textShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)", "backdropFilter": "blur(7.5px)" }
                    }
                >OSM Hack 2023</h1>
                <h2 className='text-center font-inter  text-5xl text-white mt-5'
                    style={{ "textShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)", "backdropFilter": "blur(7.5px)", "fontWeight": "700", "font-style": "italic" }}
                > Hacking for a good cause</h2>

            </div>

            <div className=' flex flex-col justify-center items-center gap-y-5 w-full pl-10 pr-10'>

                <div className='flex flex-row items-center gap-x-2'>
                    {/* <img src={location} className='h-'></img> */}
                    <GoLocation className='text-white text-5xl'></GoLocation>
                    <h1 className='text-3xl'
                        style={
                            { "fontWeight": "600", "lineHeight": "53px", "color": "#FFFFFF", "textShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)", "backdropFilter": "blur(5.5px)" }
                        }

                    >Greenfield National College</h1>
                </div>

                <div className='flex flex-row items-center gap-x-4'>
                    {/* <img src={calender}></img> */}

                    <BsCalendarEvent className='text-white text-5xl'></BsCalendarEvent>
                    <h1 className='text-3xl'
                        style={
                            { "fontWeight": "600", "lineHeight": "53px", "color": "#FFFFFF", "textShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)", "backdropFilter": "blur(5.5px)" }
                        }
                    >June 6 and 7</h1>
                </div>

            </div>

        </div >
    )
}
export default Header;