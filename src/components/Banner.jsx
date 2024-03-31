import { motion } from "framer-motion"
export default function Banner(){
    return(
    <div className="w-full h-[569px] flex items-center font-Jost bg-[#F5F5F5] ">
        <div className="w-1/2  flex flex-col gap-3 px-5">
           <div className="line-height">
              <motion.h1 
                  initial={ { y:100 , opacity:0 ,} } 
                  animate={ { opacity:1 , y:0} } 
                  transition={ { ease:'linear' }}
                  className="text-5xl py-3 sm:max-md:text-2xl max-sm:text-2xl whitespace-nowrap origin-[0_0_-55px] transition ease-in">Introducing The <br /> Lost Day collection
              </motion.h1>
              <motion.p  
                  initial={ { y:100 , opacity:0 }} 
                  animate={ { opacity:1 , y:0 } }  
                  transition={ { ease:'linear' ,  delay:.5}}
                  className="text-slate-800 py-3 sm:whitespace-nowrap max-sm:text-xs">Ring, Occasion Pieces, Pandora & more collection
              </motion.p>
           </div>
           <div>
           < motion.button 
                   initial={ { y:100 , opacity:0 }} 
                   animate={ { opacity:1 , y:0 } }  
                   transition={ { ease:'circInOut',  delay:1}}
           className=" px-5 py-3 border-2 hover:bg-zinc-800 hover:text-white border-zinc-800 transition ease-in">Shop Now</motion.button>
           </div>
        </div>
     </div> 
    )
}