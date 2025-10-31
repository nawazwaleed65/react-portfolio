import About from "./about";
import Hero from "./component/hero";
import NavBar from "./component/Navbar";
import Starback from "./component/Star";
import ThemeToggle from "./component/ThemeToggle";
import Contact from "./contact";
import Projects from "./Projects";
import Skills from "./skill";



function Home(){
    return(
        <div className="">
            <Starback/>
            <NavBar/>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>

        </div>
    )
}

export default Home;