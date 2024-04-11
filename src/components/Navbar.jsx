import { useState , useEffect} from "react";
import { FiCrosshair, FiHeart, FiPhone,  FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { VscLocation } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

function SideBar(){
    const [shown, setShown] = useState(false)
    const handleEvent = ()=>{
        setShown(!shown);
    }
    return(
        <motion.div 
         initial={{ width:0  , height:0, opacity:0 , borderRadius:'50%'}}
         animate={ { width:'250px', height:'100%' , opacity:1 , borderRadius:0 , transition:{ ease:'easeIn', duration:0.3 } } }
        className="flex flex-col gap-3 mt-3 rounded-lg shadow-md w-[250px] items-center  sm:max-md:w-[250px] sm:max-md:text-base bg-white fixed z-50 py-3 h-screen ">
            <div>
                <img 
                src="https://alukas.presslayouts.com/wp-content/themes/alukas/assets/images/logo.svg" 
                alt="" 
                className="py-3 px-3"/>
            </div>
            <div className="flex flex-col gap-6">
                
               <p className={`group 
                        text-base
                        flex items-center w-[190px]   cursor-pointer 
                        transition ease-in md:max-lg:text-base border-b`} onClick={handleEvent}>BROWSE CATEGORIES 
                        <span 
                        className={`
                            ${shown ? 'rotate-180' : null
                            } 
                            transition 
                            ease-in`} >
                        <IoIosArrowDown/></span>
                    </p>
                    {
                        shown && (<motion.div 
                            initial={ { opacity:0 , height:0} }
                            animate={ { opacity:1 , height:'100%' , transition:'easeIn' , transitionDuration:4} }
                            className="   w-full bg-white  flex flex-col text-left px-6  gap-3 text-slate-400 cursor-pointer transition ease-in" >
                            <p className="hover:text-black transition ease-in">Bracelets</p>
                            <p className="hover:text-black transition ease-in">Earings</p>
                            <p className="hover:text-black transition ease-in">Rings</p>
                            <p className="hover:text-black transition ease-in">Necklece</p>
                            <p className="hover:text-black transition ease-in">Watches</p>
                        </motion.div>)
                    }
                <div className="flex  gap-3 text-xl md:max-lg:text-base flex-col ">
                   <Link to={'/'}>Home</Link>
                   <Link to={'/shop'}>Shop</Link>
                   <Link to={'/About'}>About US</Link>
               </div>
            </div>
        </motion.div>
    )
}

export default function Navbar(){
    const [shown, setShown] = useState(false)
    const [onClick, setOnClick] = useState(false)
    const handleEvent = ()=>{
        setShown(!shown);
    }
     const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
     const [top, setTop] = useState(0);
    useEffect(() => {
        // Function to handle scroll events
            const handleScroll = () => {
                const currentScrollPos = window.pageYOffset;
                console.log('current: ' + currentScrollPos);
                if (prevScrollpos > currentScrollPos) {
                    setTop(0); // Show navbar
                } else {
                    setTop(-70); // Hide navbar
                }
                setPrevScrollpos(currentScrollPos);
            };
            console.log('prev: ' + prevScrollpos)
            // Add scroll event listener when the component mounts
            window.addEventListener('scroll', handleScroll);
            // Clean up by removing the event listener when the component unmounts
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, [prevScrollpos]);
        
    return(
        <>
        <header className={` bg-white z-30 w-full transition duration ${ top < 0 ? 'fixed' : 'relative'}`} style={ {  top:`${top}px` }}>
            <nav className="grid grid-cols-3 p-3">
                <div className="border h-[45px] flex  box-border w-[27vw] text-slate-400 max-lg:hidden">
                    <input type="text" placeholder="Search Products" className="outline-none w-full px-2"/>
                    <button className="px-3 text-black"><FiSearch/></button>
                </div>
                {!onClick ? <button className="hidden max-lg:flex text-3xl" onClick={()=>setOnClick(!onClick)}><FiMenu /></button> : <button className="px-3 text-3xl " onClick={()=>setOnClick(!onClick)}><RxCross1/></button>}
                <div className="flex w-[25vw] justify-center">
                    <img src="https://alukas.presslayouts.com/wp-content/themes/alukas/assets/images/logo.svg" alt="" className="w-[150px] "/>
                </div>
                <div className="text-2xl grid justify-items-end place-items-center">
                    <div className="flex gap-3">
                        <button className="max-lg:hidden"><FiUser /></button>
                        <button className="max-lg:hidden"><FiHeart /></button>
                        <Link  to={'/cart'} className=""><FiShoppingCart /></Link>
                    </div>
                </div>
            </nav>

            <nav className="flex justify-between border p-3 items-center max-lg:hidden">
            <div className=" relative w-[23vw] text-center hover:text-white " onMouseEnter={handleEvent} onMouseLeave={handleEvent}>
                    <p className={`group 
                        text-xl py-3 ${shown ? ' bg-zinc-800' : null } 
                        flex items-center gap-3 justify-center cursor-pointer 
                        transition ease-in md:max-lg:text-base`} >BROWSE CATEGORIES 
                        <span 
                        className={`
                            ${shown ? 'rotate-180' : null
                            } 
                            transition 
                            ease-in`}>
                        <IoIosArrowDown/></span>
                    </p>
                    {
                        shown && (<motion.div 
                            initial={ { opacity:0 , y:10} }
                            animate={ { opacity:1 , y:0 , transition:'easeIn' , transitionDuration:0.5} }
                            className=" absolute  w-full bg-white  flex flex-col text-left px-3 py-5 gap-3 text-slate-400 cursor-pointer transition ease-in" >
                            <p className="hover:text-black transition ease-in">Bracelets</p>
                            <p className="hover:text-black transition ease-in">Earings</p>
                            <p className="hover:text-black transition ease-in">Rings</p>
                            <p className="hover:text-black transition ease-in">Necklece</p>
                            <p className="hover:text-black transition ease-in">Watches</p>
                        </motion.div>)
                    }
                </div>
               <div className="flex mr-[73px] gap-3 text-xl md:max-lg:text-base">
                   <Link to={'/'}>Home</Link>
                   <Link to={'/shop'}>Shop</Link>
                   <Link to={'/About'}>About US</Link>
               </div>
               <div className="flex gap-3 ">
                 <div className="flex items-center gap-3 text-xl "><span><FiPhone/></span> +(123) 4567 890</div>
                 <div className="flex items-center gap-3 text-xl"><span><VscLocation /></span> Find Store</div>
               </div>
            </nav>
            {onClick && <SideBar /> } 
        </header>
        
        </>
    )
}


