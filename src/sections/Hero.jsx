
import HeroText from "../componets/Htext";
import ParallaxBackground from "../componets/Pback";

const Hero = () => {

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space " id="Home">
      <HeroText />
      <ParallaxBackground />
      </section>
      )
      }
      export default Hero;