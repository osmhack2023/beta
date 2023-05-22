function Flowchart(
) {

    return (
        <div className="flex flex-col gap-y-20 bg-white py-10 px-18 md:py-16 md:px-28 w-full ">
            <div className="flex flex-col items-center gap-y-20 md:flex-row justify-around">
                <div className="flex flex-col rounded-full p-5 md:py-14 md:px-10 justify-center gap-y-10 md:gap-y-0 md:justify-around"
                    style={{ "background": "#FFF5F5", "height": "20rem", "width": "20rem", "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                    <p className=" text-4xl md:text-7xl text-rednew justify-center items-center text-center font-bold">8</p>
                    <p className="text-bluenew text-2xl md:text-3xl text-center">teams compete for </p>
                    <h3 className="text-bluenew text-2xl md:text-3xl text-center font-bold">OSMHack 2023</h3>
                </div>
                <div className="flex flex-col rounded-full py-14 px-10 gap-y-4 justify-between"
                    style={{ "background": "#FFF5F5", "height": "20rem", "width": "20rem", "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                    <p className="text-3xl md:text-5xl text-rednew justify-center items-center text-center font-bold">TOP</p>
                    <p className="text-bluenew text-2xl md:text-3xl text-center">teams compete in nationwide </p>
                    <h3 className="text-bluenew text-xl md:text-3xl text-center font-bold">OSM-Hackfest 2023</h3>
                </div>
            </div>


            <div className="flex flex-row justify-center">
                <div className="flex flex-col rounded-full py-14 px-10 gap-y-4 justify-between"
                    style={{ "background": "#FFF5F5", "height": "25rem", "width": "25rem", "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                    <p className="text-3xl md:text-5xl text-rednew justify-center items-center text-center font-bold">WINNER</p>
                    <p className="text-bluenew text-2xl md:text-3xl text-center">team competes in  </p>
                    <p className="text-black text-xl md:text-3xl text-center font-bold">ASIA PACIFIC REGION</p>
                    <h3 className="text-bluenew text-xl md:text-3xl p-5 text-center font-bold"> Regional OSM-Hackfest 2023</h3>
                </div>
            </div>


        </div>
    )
}
export default Flowchart;