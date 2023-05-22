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

                <h1 className="font-semibold text-5xl text-center tracking-wide">ORGANIZERS</h1>
                <div className="flex flex-row justify-around">
                    <img src={osac}></img>
                    <img src={greenfield}></img>
                </div>

            </div>
            <div className="flex flex-col w-full justify-around p-20 gap-y-20"
                style={{ backgroundColor: '#E7F5FF' }}>

                <h1 className="font-bold text-5xl text-center tracking-wide">Sponsored By</h1>
                <div className="flex flex-row justify-around">
                    <img src={mapping}></img>

                </div>

            </div>

            <div className="flex flex-col w-full justify-around p-20 gap-y-20"
                style={{ backgroundColor: '#FFF5F5' }}>

                <h1 className="font-bold text-5xl text-center tracking-wide ">Supporting Organizations</h1>
                <div className="flex flex-row justify-around">
                    <img src={human}></img>
                    <img src={knowledge}></img>
                </div>
                <div className="flex justify-center">
                    <img src={opentech}></img>
                </div>

            </div>
        </div>
    )
}

export default Organizers;