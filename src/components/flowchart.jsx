function Flowchart(
) {

    return (
        <div className="flex flex-col  gap-y-16 md:gap-y-20 bg-[#202A44] py-10 px-18 md:py-16 md:px-28 w-full " id="d1">
            <div className="flex flex-col items-center gap-y-10 md:flex-row justify-around">
                <div className="flex flex-col rounded-full p-5 md:py-14 md:px-10 justify-center gap-y-10 md:gap-y-0 md:justify-around"
                    style={{ "background": "white", "height": "17rem", "width": "17rem", "boxShadow": "4px 4px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                    <p id="d2" className=" text-3xl md:text-5xl text-rednew justify-center items-center text-center font-bold">8</p>
                    <p className="text-bluenew text-xl md:text-2xl text-center">teams compete for </p>
                    <h3 className="text-bluenew text-xl md:text-2xl text-center font-bold">OSMHack 2023</h3>
                </div>

                <div className="flex flex-col rounded-full py-14 px-10 gap-y-4 justify-between"
                    style={{ "background": "#FFF5F5", "height": "18rem", "width": "18rem", "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                    <p className="text-2xl md:text-3xl text-rednew justify-center items-center text-center font-bold">TOP</p>
                    <p className="text-bluenew text-xl md:text-2xl text-center">teams compete in <b className="text-[#000000]">nationwide</b> </p>
                    <h3 className="text-bluenew text-xl md:text-2xl text-center font-bold">OSM-Hackfest 2023</h3>
                </div>
            </div>


            <div className="flex flex-row justify-center">

                <div className="flex flex-col rounded-full py-14 px-10 gap-y-2 justify-between items-center"
                    style={{ "background": "#FFF5F5", "height": "20rem", "width": "20rem", "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                    <p className="-mt-[4rem] p-2 rounded-xl text-center text-lg font-bold font-inter text-[#FFA500] bg-[#202A44] w-40" style={
                        { "filter": "drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25))" }
                    }>FULLY SPONSORED</p>
                    <p className="text-2xl md:text-3xl text-rednew justify-center items-center text-center font-bold">WINNER</p>
                    <p className="text-bluenew text-2xl md:text-3xl text-center">team competes in  </p>
                    <p className="text-black text-xl md:text-3xl text-center font-bold">ASIA PACIFIC </p>
                    <h3 className="text-bluenew text-xl md:text-2xl p-5 text-center font-bold"> Regional OSM-Hackfest 2023</h3>
                </div>
            </div>


        </div>
    )
}
export default Flowchart;