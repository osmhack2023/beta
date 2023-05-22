function Flowchart(
) {

    return (
        <div className="flex flex-col bg-white py-16 px-28 w-full ">
            <div className="flex flex-row justify-around">
                <div className="h-76 w-76 flex flex-col rounded-full py-14 px-10 justify-around"
                    style={{ "background": "#FFF5F5", "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                    <p className="text-7xl text-rednew justify-center items-center text-center font-bold">8</p>
                    <p className="text-bluenew text-3xl text-center">teams compete for </p>
                    <h3 className="text-bluenew text-3xl text-center font-bold">OSMHack 2023</h3>
                </div>
                <div className="flex flex-col rounded-full py-14 px-10 gap-y-4 justify-between"
                    style={{ "background": "#FFF5F5", "height": "20rem", "width": "20rem", "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                    <p className="text-5xl text-rednew justify-center items-center text-center font-bold">TOP</p>
                    <p className="text-bluenew text-3xl text-center">teams compete in nationwide </p>
                    <h3 className="text-bluenew text-3xl text-center font-bold">OSM-Hackfest 2023</h3>
                </div>
            </div>


            <div className="flex flex-row justify-center">
                <div className="flex flex-col rounded-full py-14 px-10 gap-y-4 justify-between"
                    style={{ "background": "#FFF5F5", "height": "24rem", "width": "24rem", "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                    <p className="text-5xl text-rednew justify-center items-center text-center font-bold">WINNER</p>
                    <p className="text-bluenew text-2xl text-center">team competes in  </p>
                    <p className="text-black text-3xl text-center font-bold">ASIA PACIFIC REGION</p>
                    <h3 className="text-bluenew text-3xl text-center font-bold"> Regional OSM-Hackfest 2023</h3>
                </div>
            </div>


        </div>
    )
}
export default Flowchart;