import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import OverviewCounter from "./Components/OverviewCounter"
import BannerDetails from "./Components/BannerDetails"
import SimpleBanner from "./Components/SimpleBanner"
import Blogs from "./Components/Blogs"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <OverviewCounter/>
       <BannerDetails/>
       <BannerDetails reverse={true}/>
       <SimpleBanner/>
       <Blogs/>
       <Footer/>
    </>
  )
}

export default App
