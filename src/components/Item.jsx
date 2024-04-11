import { motion }  from 'framer-motion'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/carContext'
export default function Item({src1 , src2 , title , category , price}){
    return(
       <Link to={'/SingleProduct'}>
             < motion.div 
         initial={ { y:100 , opacity:0 } }
         whileInView={ { y:0  , opacity:1 , transition:'all' , transitionDuration:3 } }
        className="Card group  overflow-hidden  font-Jost">
                    <div className="relative text-center flex justify-center items-center ">
                        <img src={src1} 
                        alt="" className="group-hover:right-0"/>
                        <img src={src2} 
                        alt="" 
                        className="invisible absolute  group-hover:absolute  group-hover:visible group-hover:opacity-100 transition ease-linear opacity-0 duration-300"/>
                    </div>
                    <div className="text-center">
                        <p className="text-slate-700 py-1">{category}</p>
                        <h1 className="text-[17px] font-normal min-[810px]:max-lg:text-xs whitespace-nowrap">{title}</h1>
                        <div className="overflow-hidden box-border  ">
                        <p className=" group-hover:-translate-y-5 transition ease-in delay-75 font-semibold max-md:text-base">{price}</p>
                        <button className="group-hover:visible
                        group-hover:-translate-y-5 opacity-0 max-[810px]:opacity-100 group-hover:opacity-100 transition ease-in delay-75 border-b uppercase md:font-semibold max-md:text- " >Add to Cart</button>
                    </div>
            </div>
        </motion.div>
       </Link>
    )
}