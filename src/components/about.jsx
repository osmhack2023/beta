import { Link } from "react-router-dom";
function About() {

    return (
        <div className=" p-16 md:p-32 flex flex-col justify-around gap-y-24 font-inter font-semibold text-xl" style={
            { backgroundColor: "#E7F5FF" }
        }>
            <div>


                <p className="mb-5">
                    OSMHack-2023 is an event for students in tech to unleash your creativity to build impactful solutions! This hackathon brings together students to harness the potential of OpenStreetMap (OSM) and create products that address social and environmental challenges.
                </p>

                <p className="mb-5">
                    Teams will work collaboratively, utilizing tools and geospatial data around OpenStreetMap to develop innovative solutions in areas like disaster response, community development, accessibility, and environmental sustainability. Mentorship from industry experts will guide participants throughout the event, providing valuable insights and refining their ideas.
                </p>
                <p>
                    At the end of the hackathon, projects will be judged based on their impact, creativity, and technical implementation, with prizes awarded to the most innovative and impactful solutions. Don't miss this opportunity to use OSM for a good cause and make a positive difference in the world. Join us and be part of the movement for change!
                </p>
            </div>
            <Link to="/redirect"><button className='bg-rednew text-white p-3 w-30 m-auto md:ml-auto hover:bg-dgreen active:translate-y-1'
                style={
                    { "borderRadius": "6px" }
                }
            >Register Now</button></Link>
        </div>
    )
}

export default About;

