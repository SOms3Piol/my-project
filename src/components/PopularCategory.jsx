
import { IoIosArrowUp } from "react-icons/io";
import { useState ,useRef} from "react";
import { motion , useInView} from 'framer-motion'
function PopularCategory(){
    const [translate, setTranslate] = useState(0);
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(true);
    const Translate_Amount = 170;
    const containerRef  = useRef(null);
    const ref= useRef(null);

    const handleRightClick = ()=>{
        setTranslate(translate=>{
            if(containerRef.current === null){
                return 0;
            }
            const newTranslate  = translate + Translate_Amount;
            const edge = containerRef.current.scrollWidth;
            const width = containerRef.current.clientWidth;
            if(newTranslate + width >= edge){
                return edge - width;
            }
            return newTranslate;
        })
        checkShow();
    }
    const handleLeftClick = ()=>{
        setTranslate(translate=>{
            const newTranslate = translate - Translate_Amount;
            if(newTranslate <= 0 ) return 0;
            console.log(newTranslate)
            return newTranslate;
        })
        checkShow();
    }
    const checkShow = ()=>{
        setIsLeftVisible(translate > 0);
        setIsRightVisible(translate + containerRef.current.clientWidth < containerRef.current.scrollWidth)
    }
    return(
        <>
        <h1 className="text-4xl text-center py-10 max-sm:text-3xl font-Jost">Popular Categories</h1>
        <div 
        
        className="overflow-x-hidden scrollbar-hidden relative group font-Jost">
                {
                    isLeftVisible && (
                        <button className="group-hover:scale-100 transition ease-in duration-300 text-5xl absolute top-1/2 -translate-y-[50%]  rounded-full -rotate-90 scale-0 z-10 lg:hidden max-lg:scale-100"
                        onClick={handleLeftClick}
                    >
                    <IoIosArrowUp />
                    </button>
                    )

                }
                {
                    isRightVisible && (
                        <button className="group-hover:scale-100 transition ease-in duration-300 text-5xl absolute top-1/2 -translate-y-[50%] right-0  rounded-full rotate-90 scale-0 z-10 lg:hidden max-lg:scale-100"
                        onClick={handleRightClick}
                        ><IoIosArrowUp />
                        </button>
                    )
                }
                <div ref={containerRef} className="lg:grid lg:grid-cols-6 text-xl text-slate-800 cursor-pointer  flex  gap-5 px-3 transition " style={
                    {
                        transform: `translateX(-${translate}px)`
                    }
                }>
                    <motion.div 
                    initial={{translateX: -50 , opacity:0}}
                    whileInView={ { translateX:0 , opacity:1  , transition:'all' } }
                    className=" flex flex-col items-center gap-3 group/text">
                        <div className="w-[170px] h-[170px] rounded-full text-center">
                            <img 
                            src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-1-360x360.jpg" 
                            alt="" 
                            className="rounded-full"/>
                        </div>
                        <h1 className="text-center hover:text-black relative py-[1px] ">Necklaces
                        
                        <span className="bg-zinc-800 absolute  scale-0 transition ease-in group-hover/text:scale-100 group-hover/text:w-full bottom-0 left-0 py-[1px] rounded origin-left duration-500"></span></h1>
                    </motion.div>
                    <motion.div 
                    initial={{translateX: -100 , opacity:0}}
                    whileInView={ { translateX:0 , opacity:1  , transition:'all' } }
                    className="flex flex-col items-center gap-3 group/text">
                        <div className="w-[170px] h-[170px] rounded-full text-center">
                            <img 
                            src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Rings-360x360.jpg" 
                            alt="" 
                            className="rounded-full"/>
                        </div>
                        <h1 className="text-center hover:text-black relative py-[1px] group/text">Rings
                        <span className="bg-zinc-800 absolute  scale-0 transition ease-in group-hover/text:scale-100 group-hover/text:w-full bottom-0 left-0 py-[1px] rounded origin-left duration-500 "></span>
                        </h1>
                    </motion.div>
                    <motion.div 
                    initial={{translateX: -150 , opacity:0}}
                    whileInView={ { translateX:0 , opacity:1  , transition:'all' } }
                    className="flex flex-col items-center gap-3 group/text">
                        <div className="w-[170px] h-[170px] rounded-full text-center">
                            <img 
                            src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Rose-Gold-Bracelet-1-360x360.jpg" 
                            alt="" 
                            className="rounded-full"/>
                        </div>
                        <h1 className="text-center hover:text-black relative py-[1px]">Braclets
                        
                        <span className="bg-zinc-800 absolute  scale-0 transition ease-in group-hover/text:scale-100 group-hover/text:w-full bottom-0 left-0 py-[1px] rounded origin-left duration-500"></span>
                    </h1>
                    
                    </motion.div>
                    <motion.div 
                    initial={{translateX: -200 , opacity:0}}
                    whileInView={ { translateX:0 , opacity:1  , transition:'all' } }
                    className="flex flex-col items-center gap-3 group/text">
                        <div className="w-[170px] h-[170px] rounded-full text-center group/text">
                            <img 
                            src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1-360x360.jpg" 
                            alt="" 
                            className="rounded-full "/>
                        </div>
                        <h1 className="text-center hover:text-black relative py-[1px]">Braclets
                        <span className="bg-zinc-800 absolute  scale-0 transition ease-in group-hover/text:scale-100 group-hover/text:w-full bottom-0 left-0 py-[1px] rounded origin-left duration-500"></span></h1>
                    </motion.div>
                    <motion.div 
                    initial={{translateX: -250 , opacity:0}}
                    whileInView={ { translateX:0 , opacity:1  , transition:'all' } }
                    className="flex flex-col items-center gap-3 group/text">
                        <div className="w-[170px] h-[170px] rounded-full text-center">
                            <img 
                            src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Charm-Dangles-360x360.jpg" 
                            alt="" 
                            className="rounded-full "/>
                        </div>
                        <h1 className="text-center hover:text-black relative py-[1px] ">Charm & Dangles
                        <span className="bg-zinc-800 absolute  scale-0 transition ease-in group-hover/text:scale-100 group-hover/text:w-full bottom-0 left-0 py-[1px] rounded origin-left duration-500"></span></h1>
                    </motion.div>
                    <motion.div 
                    initial={ { translateX: -300 , opacity:0 } }
                    whileInView={ { translateX:0 , opacity:1  , transition:'all' , transitionDuration:1 } }
                    className="flex flex-col items-center gap-3 group/text">
                        <div className="w-[170px] h-[170px] rounded-full text-center">
                            <img 
                            src="https://alukas.presslayouts.com/wp-content/uploads/2023/04/Gift-360x360.jpg" 
                            alt="" 
                            className="rounded-full"/>
                        </div>
                        <h1 className="text-center hover:text-black relative py-[1px] ">Gift Ideas
                        <span className="bg-zinc-800 absolute  scale-0 transition ease-in group-hover/text:scale-100 group-hover/text:w-full bottom-0 left-0 py-[1px] rounded origin-left duration-500"></span></h1>
                    </motion.div>
                </div>
        </div>
        </>
    )
}

export default PopularCategory;