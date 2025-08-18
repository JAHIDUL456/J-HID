'use client'
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const PageTransition = ({children}) => {
    const pathname=usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div initial={{opacity:1}} animate={{opacity:0, transition:{delay:0.4,duration:0.4,ease:"easeInOut"},}}
            
            className="fixed h-screen w-screen bg-[#222222] top-0 pointer-events-none"
            
            exit={{opacity:1}}>

            </motion.div>
            {children}
        </div>
        
        </AnimatePresence>
  )
}

export default PageTransition