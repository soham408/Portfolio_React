import { motion } from "framer-motion";


const Transition  = (OgComponents) => {
    return () => (
        <>
        <OgComponents/>
        <motion.dev
        classname="slide-in"
        initial={{ scaleY: 0}}
        animate={{ scaleY: 0}}
        exit={{ scaleY: 1}}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
        <motion.dev
        classname="slide-in"
        initial={{ scaleY: 0}}
        animate={{ scaleY: 0}}
        exit={{ scaleY: 1}}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
       </>
    );
};

export default Transition;