import { useState , useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Reviews(){
    const [translate, setTranslate] = useState(0)
    const Translate_Amount = 370;
    const containerRef  = useRef(null);
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
    <div className="bg-[url('https://alukas.presslayouts.com/wp-content/uploads/2023/04/home-default-testimonial-bg.jpg')] bg-no-repeat py-[44px] bg-center  bg-cover mt-[70px] flex flex-col  ">
       <h1 className="w-full text-center text-5xl py-3 max-sm:text-3xl">Customer Reviews</h1>
       <div className="relative sm:overflow-hidden overflow-scroll  scrollbar-hidden">
         <button className="absolute left-0 top-1/2 max-sm:hidden -translate-y-[50%] text-3xl z-10" onClick={handleLeftClick}><FiArrowLeft /></button>
         <button className="absolute right-0 top-1/2 max-sm:hidden -translate-y-[50%] z-10 text-3xl" onClick={handleRightClick}><FiArrowRight /></button>
         <div ref={containerRef} className="flex gap-3 px-1 sm:px-5 py-5 scrollbar-hidden block relative transition duration-500 ease-in" style={{
            transform: `translateX(-${translate}px)`
         }}>
            <Block 
                author={'Donald Trump'}
                title={'Beautiful products'}
                desc={' Beautiful clothes. I always get complements. Good quality and items wash well. products and designs and such great.'}
            />
            <Block author={'Imran Khan'}
                title={'Alaska Is a good Store'}
                desc={'Great products and designs and such great quality, they always wash up well no matter how many times I wash them.'}
            />
            <Block author={'Borack Obama'} 
                title={'Lovely Products'}
                desc={'Great products and designs and such great quality, they always wash up well no matter how many times I wash them.'}
            />
            <Block author={'Viladmir Putin'}
                desc={' Great products and designs and such great quality, they always wash up well no matter how many times I wash the.'}
                title={'Beautiful Products'}
            />
         </div>
       </div>
     </div>
    )
 }

function Block({author , title , desc}){
    return(
       <div className="w-[420px] shrink-0  min-h-[170px]  leading-8 max-sm:w-[350px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg transition all duration-300">
         <div className="bg-white px-5 py-5 w-full rounded-lg">
          <h1 className="text-black ">{title}</h1>
             <p className="text-slate-700 py-1">{desc}</p>
             <p className="font-semibold">-{author}</p>
         </div>
       </div>
    )
 } 
 