import React from 'react';
import { TypeAnimation } from 'react-type-animation'

import Transition from '../Transition'; 
import { motion } from 'framer-motion';



 function Home(){
    return (
        
            <>
            
                  <motion.div 
                  initial = {{ y: "100%" }}
                  animate = {{ y: 0 }}
                  exit={{ y: "-100%"}}
                  transition={{ duration: 0.5, }}
                  className='text-white font-serif '>
                  <div className='grid place-content-center p-[12%]'>
                        <TypeAnimation
                        sequence={[
                              "I Am A Web Developer",
                              1000,
                              "I Am A Software Developer",
                              1000,
                              "I Am A Tech Enthusiast",
                              1000     
                        ]}
                        wrapper="span"
                        speed={30}
                        className="text-6xl font-bold"
                        repeat={Infinity}
                        />
                  </div>
                  </motion.div>
                  {/* <div className=''>
                        <h1 className='text-[#F1FAEE] grid place-items-center pt-[20%] pb-[4%] text-9xl font-serif animate-bounce animate-slidein300'>WELCOME</h1>

                  </div> */}



            {/* <div className='flex items-center justify-center pt-[80px] pb-[100px]'> */}
            {/* <img className='w-[90%] h-[60vh] bg-none rounded-xl transition-all duration-300 hover:scale-110'
                  src="https://drive.google.com/thumbnail?id=1COxYMHD0rrkpLi_WXH6Y4Q7vpa7PI_pR" 
                   alt="" /> */}
                  {/* </div> */}
            </>
              
    )

}

export default Transition(Home);