import { motion } from 'framer-motion';
import liquinaImage from '../assets/liquina.png';
import liquidImage from '../assets/liquid.gif';
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-[1200px] mx-auto overflow-hidden ">
      {/* <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent" />
        </div>
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white">
            Hello <span className="text-[#915eff]">world</span>
          </h1>
          <p className="text-lg lg:text-2xl text-secondary mt-2">
            Momonga Ainz<br className="sm:block hidden" /> Développeur Web et Mobile
          </p>
        </div>
      </div> */}

      <div className="relative flex justify-center items-center w-full h-full">
        <motion.div
          className="absolute rounded-full bg-[#ffffff] opacity-80"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            width: '400px',
            height: '400px',
            filter: 'blur(100px)',
            boxShadow: '0 0 500px 200px rgba(150, 252, 229,0.7)',
            zIndex: 1,
          }}
        />

        <motion.div
          className="absolute rounded-full opacity-80"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            width: '1200px',
            height: '1200px',
            filter: 'blur(30px)',
            zIndex: 1,
          }}
        >
          <img
            src={liquidImage}
            alt="liquid gif"
            className="w-full h-full rounded-full object-cover"
            style={{
              filter: 'blur(10px)',
            }}
          />
        </motion.div>
        
        
        
        <div  className="flex flex-col items-center justify-center space-y-6"
        style={{zIndex: 2}}>
        <motion.img
          src={liquinaImage}
          alt="liquina"
          className="absolute object-contain w-auto h-auto max-w-full max-h-full"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            filter: 'blur(0.5px)',
          }}
        />

          

      

        <motion.p
        className="pt-[800px] text-secondary text-[17px] max-w-3xl leading-[30px] text-white"
        style={{
          filter: 'blur(0.5px)',
          zIndex: 3,
        }}
      >
        <h2 className={styles.sectionHeadText}>Pirate Takeover </h2>
        <br/>
        "By the grace of the Hyperliquid community, I have been born into this noble realm. 
        Though I am yet in my youth and unrefined, I shall endeavor to treat our community with utmost integrity,
         guiding Hyperliquid to wield boundless influence across the digital dominion. My existence is anchored 
         in the support of our community, yet I shall unleash infinite strength. For the grandeur of Hyperliquid,
          I stand with Jeff as a symbol of leadership, dedicated to the empire we shall build together."
          <br/><br/>
          - liquina, The queen of Hyperliquid
        
        </motion.p>
        
      </div>
      </div>

      

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915eff] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-[#915eff] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
