import { BsFillTrophyFill } from 'react-icons/bs'
function PrizePool() {
    return (
        <div className="h-30 flex flex-col p-20 justify-around items-center gap-y-20"
            style={
                { backgroundColor: "#E7F5FF" }
            }
        >
            <h1 className="text-6xl text-center font-bold text-rednew">PRIZE POOL</h1>

            <div className='flex flex-col justify-center items-center text-black gap-y-5'>
                <div>
                    <BsFillTrophyFill className='text-9xl text-gold '></BsFillTrophyFill>
                </div>

                <h2 className='text-3xl'>FIRST</h2>
                <h1 className='text-4xl font-bold'>Rs 25,000</h1>
            </div>

            <div className='flex flex-row justify-around w-full '>

                <div className='flex flex-col justify-center items-center text-black gap-y-5'>
                    <div>
                        <BsFillTrophyFill className='text-9xl text-silver'
                        ></BsFillTrophyFill>
                    </div>

                    <h2 className='text-3xl'>SECOND</h2>
                    <h1 className='text-4xl font-bold'>Rs 15,000</h1>
                </div>
                <div className='flex flex-col justify-center items-center text-black gap-y-5'>
                    <div>
                        <BsFillTrophyFill className='text-9xl text-bronze '></BsFillTrophyFill>
                    </div>

                    <h2 className='text-3xl'>THIRD</h2>
                    <h1 className='text-4xl font-bold'>Rs 10,000</h1>
                </div>
            </div>
        </div>
    )
}

export default PrizePool;