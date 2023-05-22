import { BsFillTrophyFill } from 'react-icons/bs'
import trophy1 from '../images/trophy1.png'
import trophy2 from '../images/trophy2.png'
import trophy3 from '../images/trophy3.png'
function PrizePool() {
    return (
        <div className="h-30 flex flex-col p-20 justify-around items-center gap-y-20"
            style={
                { backgroundColor: "#202A44 " }
            }
        >
            <h1 className=" text-3xl md:text-5xl text-center font-bold text-[#ffa600] font-inter tracking-wider">PRIZE POOL</h1>

            {/* <div className='flex flex-col justify-center items-center text-black gap-y-5'>
                <div>
                    <BsFillTrophyFill className='text-6xl md:text-9xl text-gold '></BsFillTrophyFill>
                </div>

                <h2 className='text-2xl md:text-3xl'>FIRST</h2>
                <h1 className='text-2xl md:text-4xl font-bold'>Rs 25,000</h1>
            </div> */}

            <div className='flex flex-col gap-y-16 md:flex-row justify-around w-full '>

                <div className='flex flex-col justify-center items-center text-black gap-y-5'>
                    <div>
                        <img src={trophy1}></img>
                    </div>


                    <h1 className='text-2xl md:text-5xl font-semibold text-white'
                    >Rs 25,000</h1>
                </div>
                <div className='flex flex-col justify-center items-center text-black gap-y-5'>
                    <div>
                        <img src={trophy2}></img>
                    </div>


                    <h1 className='text-2xl md:text-5xl font-bold text-white'>Rs 15,000</h1>
                </div>
                <div className='flex flex-col justify-center items-center text-black gap-y-5'>
                    <div>
                        <img src={trophy3}></img>
                    </div>


                    <h1 className='text-2xl md:text-5xl font-bold text-white' >Rs 10,000</h1>
                </div>

            </div>
        </div>
    )
}

export default PrizePool;