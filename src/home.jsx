import "./App.css";
import Navbar from "./components/navigation";
import Header from "./components/header";
import About from "./components/about";
import Flowchart from "./components/flowchart";
import PrizePool from "./components/prizepool";
import Organizers from "./components/organizers";
import Footer from "./components/footer";

function Home() {
    return (
        <div>

            <Header></Header>
            <About></About>
            <Flowchart></Flowchart>
            <PrizePool></PrizePool>
            <Organizers></Organizers>
            <Footer></Footer>
        </div>
    );
}

export default Home;