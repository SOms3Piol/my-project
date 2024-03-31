import { useState } from "react";
import { FiHeart, FiPhone, FiPhoneCall, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { VscLocation } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Navbar(){
    const [shown, setShown] = useState(false)
    const handleEvent = ()=>{
        setShown(!shown);
    }
    return(
        <header>
            <nav className="grid grid-cols-3 p-3">
                <div className="border h-[45px] flex  box-border w-[27vw] text-slate-400 max-lg:hidden">
                    <input type="text" placeholder="Search Products" className="outline-none w-full px-2"/>
                    <button className="px-3 text-black"><FiSearch/></button>
                </div>
                <button className="hidden max-lg:flex text-3xl"><FiMenu /></button>
                <div className="flex w-[25vw] justify-center">
                    <img src="https://alukas.presslayouts.com/wp-content/themes/alukas/assets/images/logo.svg" alt="" className="w-[150px] "/>
                </div>
                <div className="text-2xl grid justify-items-end">
                    <div className="flex gap-3">
                        <button className="max-lg:hidden"><FiUser /></button>
                        <button className="max-lg:hidden"><FiHeart /></button>
                        <button className=""><FiShoppingCart /></button>
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
                        shown && (<div className=" absolute  w-full bg-white  flex flex-col text-left px-3 py-5 gap-3 text-slate-400 cursor-pointer transition ease-in" >
                            <p className="hover:text-black transition ease-in">Bracelets</p>
                            <p className="hover:text-black transition ease-in">Earings</p>
                            <p className="hover:text-black transition ease-in">Rings</p>
                            <p className="hover:text-black transition ease-in">Necklece</p>
                            <p className="hover:text-black transition ease-in">Watches</p>
                        </div>)
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
        </header>
    )
}
