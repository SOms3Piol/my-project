import { Link } from "react-router-dom";
import { IoIosArrowForward , IoIosArrowDown } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { FcInfo } from "react-icons/fc";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import CartContext from "../context/carContext";
import NewsLatter from "./NewLatter";
import { TfiPinterestAlt } from "react-icons/tfi";
export default function Cart(){
    const [shown, setShown] = useState(false);
    const [Total, setTotal] = useState(0)
    const  { cartItems , setCartItems } = useContext(CartContext);
    useEffect(() => {
           let total = 0;
            for(let i = 0 ; i < cartItems.length ; i++){
                total += (+cartItems[i].price)
            }  
            setTotal(total);
      }, [cartItems]);
    const handleClick = (title) =>{
        setCartItems(
            (prev) =>{ 
                const result = prev.filter((cartItem ) => cartItem.title!= title)
                return result
            }
        )
    }
    if(cartItems.length == 0){
        return(
            <>
            <div className="flex  items-center p-5">
                 <Link to={'/'}>Home </Link>
                 <IoIosArrowForward className="text-slate-400" />
                 <Link to={'/shop'}>Shop </Link>
                 <IoIosArrowForward className="text-slate-400" />
                <h1 className="text-slate-400">Cart</h1>
             </div>
            <h1 className="text-5xl text-center py-9">Cart </h1>
            <div className=" flex flex-col justify-center px-3  gap-9 ">
               <div className="text-base flex gap-4 items-center px-5  h-[78px] bg-[#F7F6F7] border-t-4 mt-5 border-t-[#1E85BE]">      
                    <span><FcInfo/></span><h1>Your cart is currently empty.</h1> 
               </div>
               <div>
                    <Link to={'/shop'} className=" px-6 py-2 hover:bg-black text-white w-[34px] bg-zinc-800 transition duration ease-in">Proceed To Shop!</Link>
               </div>
               <NewsLatter />
            </div>
            </>
        )
    }

    const animationVarients = {
        show:{ height:'100%' , opacity:1 , transition: {
            ease: 'easeIn',
            duration: .5
        } },
        hidden:{height:0 , opacity:0 , transition: {
            ease: 'easeIn',
            duration: .5
        }}
    }
    return(
        <>
        <div>
             <div className="flex  items-center p-5">
                 <Link to={'/'}>Home </Link>
                 <IoIosArrowForward className="text-slate-400" />
                 <Link to={'/shop'}>Shop </Link>
                 <IoIosArrowForward className="text-slate-400" />
                <h1 className="text-slate-400">Cart</h1>
             </div>
            <h1 className="text-5xl text-center">Cart </h1>
            <div className="w-full flex max-[810px]:flex-col">
                <div className="w-full mr-3 ml-3 px-3">
                    <table className="border-collapse table-auto  text-left m-3 w-full">
                       
                            <th><div className="product-remove w-[43px] h-[43px]"></div></th>
                            <th><div className="product-thumnail bg-zinc-800 min-w-[32px] max-w-[80px]"></div></th>
                            <th className="py-[15px] px-[12px]">Product </th>
                            <th className="py-[15px] px-[12px]">Price</th>
                            <th className="py-[15px] px-[12px]">Subtotal</th>
                        
                        <tbody>
                            {
                              cartItems.length > 0 && cartItems.map((cartItem , index)=>(
                                    <tr className="py-8 border-b border-b-slate-200 " key={index}>
                                        <td><button className="p-3" onClick={() => handleClick(cartItem.title)}><RxCrossCircled /></button></td>
                                        <td><div className="py-[12px] product-thumnail  min-w-[32px] max-w-[80px]"><img src={cartItem.src1} alt="" /></div></td>
                                        <td className="py-[12px] px-[15px]">{cartItem.title}</td>
                                        <td className="py-[12px] px-[15px]">${cartItem.price}</td>
                                        <td className="py-[12px] px-[15px]">${cartItem.price}</td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-5 py-9 px-3 w-1/2 border border-black h-full max-[810px]:w-full">
                    <h1 className="tracking-normal px-3">Cart Total</h1>
                    <div className="flex justify-between  items-center  text-base tracking-tighter  px-3">
                        <h1>Subtotal</h1>
                        <p>${Total}</p>
                    </div>
                    <div className="tracking-tighter flex gap-9 py-3 px-3 items-center border-t border-t-slate-400">
                        <h1>Shipping To</h1>
                        <div>
                            <h1>Flate Rate</h1>
                            <p className="text-slate-400">California to CA</p>
                            <p className="flex items-center gap-1 font-medium text-[17px]">change Addreas <button onClick={()=>{
                                setShown(!shown)
                            }}><IoIosArrowDown/></button></p>
                            {
                                
                                    <motion.div 
                                     
                                     variants={animationVarients}
                                     animate = { shown ? 'show' : 'hidden' }
                                      
                                    className="flex gap-3 flex-col overflow-hidden">
                                        <input className="border p-3" type="text" name="contry" id="" placeholder="Contary Name" />
                                        <input className="border p-3" type="text" name="city" id="" placeholder="City" />
                                        <input className="border p-3" type="text" name="zipcode" id="" placeholder="Zip Code" />
                                       <div>
                                            <button className="py-2 px-8 bg-zinc-800 hover:bg-black transition ease-in duration text-white">Update</button>
                                       </div>
                                    </motion.div>
                                
                            }
                        </div>
                    </div>
                    <div className="flex justify-between px-3 border-t border-t-slate-400 py-3">
                        <h1>Total</h1>
                        <p>${Total}</p>
                    </div>
                    <div>
                        <button className="bg-black text-white w-auto px-3 py-3">Proceed To checkout</button>
                    </div>
                </div>
            </div>

            
        </div>
        <NewsLatter />
        </>
    )
}