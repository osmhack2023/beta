import osac from "../images/osac.png"
import greenfield from "../images/greenfield.png"
import mapping from "../images/mapping.png"
import knowledge from "../images/knowledge.png"
import human from "../images/human.png"
import opentech from "../images/opentech.png"
import gupta from "../images/gupta.png"
function Organizers() {
    return (
        <div className="flex flex-col font-inter uppercase"

        >

            <div className="flex flex-col md:flex-row w-full justify-around p-20 gap-y-20"
                style={{ backgroundColor: '#F3F3F3' }}>

                <div className="flex flex-col items-center justify-around gap-y-24">
                    <h1 className="font-bold  text-2xl md:text-3xl text-center tracking-wide">Organized By</h1>
                    <div className="flex gap-y-10 flex-col md:flex-row justify-around items-center">
                        <img src={osac} className=" h-24 w-64 md:h-50"></img>

                    </div>
                </div>

                <div className="flex flex-col items-center justify-around gap-y-24">


                    <h1 className="font-bold text-2xl md:text-3xl text-center tracking-wide">Sponsored By</h1>
                    <div className="flex flex-row justify-around">
                        <img src={mapping} className=" h-36 w-72 md:h-auto"></img>

                    </div>
                </div>

            </div>
            {/* <div className="flex flex-col w-full justify-around p-20 gap-y-20"
                style={{ backgroundColor: '#E7F5FF' }}>



            </div> */}

            <div className="flex flex-col w-full justify-around p-20 gap-y-20"
                style={{ backgroundColor: 'white' }}>

                <h1 className="font-bold text-2xl md:text-3xl text-center tracking-wide ">Supporting Organizations</h1>
                <div className="flex flex-col gap-y-20  md:flex-row justify-around items-center">
                    <img src={human} className=" h-24 w-96 md:h-auto"></img>
                    <img src={knowledge} className=" h-30 w-72 md:h-auto"></img>
                </div>
                <div className="flex justify-center">
                    <img src={opentech} className=" h-30 w-72 md:h-auto"></img>
                </div>

            </div>
            <div className="flex flex-col w-full justify-around p-20 gap-y-20"
                style={{ backgroundColor: '#f3f3f3' }}>

                <h1 className="font-bold text-2xl md:text-3xl text-center tracking-wide ">Social Media Partner</h1>
                <div className="flex flex-col gap-y-20  md:flex-row justify-around items-center">
                    <img src={gupta} className=""></img>
                    {/* <img src={knowledge} className=" h-30 w-72 md:h-auto"></img> */}
                </div>


            </div>
        </div>
    )
}

export default Organizers;