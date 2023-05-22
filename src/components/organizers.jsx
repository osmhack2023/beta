import osac from "../images/osac.png"
import greenfield from "../images/greenfield.png"
import mapping from "../images/mapping.png"
import knowledge from "../images/knowledge.png"
import human from "../images/human.png"
import opentech from "../images/opentech.png"

function Organizers() {
    return (
        <div className="flex flex-col font-inter"

        >

            <div className="flex flex-col w-full justify-around p-20 gap-y-20"
                style={{ backgroundColor: '#FFF5F5' }}>

                <h1 className="font-semibold  text-2xl md:text-5xl text-center tracking-wide">ORGANIZERS</h1>
                <div className="flex gap-y-10 flex-col md:flex-row justify-around items-center">
                    <img src={osac} className=" h-24 w-64 md:h-50"></img>
                    <img src={greenfield} className=" h-50 w-64 md:h-50"></img>
                </div>

            </div>
            <div className="flex flex-col w-full justify-around p-20 gap-y-20"
                style={{ backgroundColor: '#E7F5FF' }}>

                <h1 className="font-bold text-2xl md:text-5xl text-center tracking-wide">Sponsored By</h1>
                <div className="flex flex-row justify-around">
                    <img src={mapping} className=" h-40 w-72 md:h-auto"></img>

                </div>

            </div>

            <div className="flex flex-col w-full justify-around p-20 gap-y-20"
                style={{ backgroundColor: '#FFF5F5' }}>

                <h1 className="font-bold text-2xl md:text-5xl text-center tracking-wide ">Supporting Organizations</h1>
                <div className="flex flex-col gap-y-20  md:flex-row justify-around items-center">
                    <img src={human} className=" h-24 w-96 md:h-auto"></img>
                    <img src={knowledge} className=" h-30 w-72 md:h-auto"></img>
                </div>
                <div className="flex justify-center">
                    <img src={opentech} className=" h-30 w-72 md:h-auto"></img>
                </div>

            </div>
        </div>
    )
}

export default Organizers;