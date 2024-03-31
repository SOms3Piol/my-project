export default function Blogs(){
    return(
       <div className="py-5">
         <div className="leading-8">
          <h1 className="text-center text-5xl max-md:text-xl ">Read Journels</h1>
             <p className="text-center py-3 text-slate-400 text-xl max-md:text-base"> Latest trends and inspirations in fashion design. </p>
         </div>
          <div className="grid grid-cols-3 md:max-lg:grid-cols-2 max-md:grid-cols-1">
           <BlogItem 
             src={'https://alukas.presslayouts.com/wp-content/uploads/2023/02/How-to-Style-a-Quiff.jpg'} title={'How to Style A Quiff'} 
             desc={'pommy...'}
             status={'Fashion'}
           />
            
          <BlogItem 
             src={' https://alukas.presslayouts.com/wp-content/uploads/2023/02/Christmas-Gift-Guide.jpg'} 
             title={'Happy Day Guide'} 
             desc={'Oneness...'}
             status={'Accessories'}
             hide={'sm'}
           />
                <BlogItem 
                   src={'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Selective-Styles-Help-your-look.jpg'} 
                   title={'Selective Styles help your look'} 
                   desc={'Codeswallop...'}
                   status={'Collection'}
                   hide={'lg'}
                />
             
          </div>
          
       </div>
    )
 }
 
 function BlogItem({src , title , desc , status , hide}){
    return(
    <div className={`px-3 group ${(hide=='lg' && ' max-lg:hidden') || hide == 'sm' &&  ' max-md:hidden'}`}>
       <div className="overflow-hidden relative">
         <img src={src} 
         alt="" 
         className="group-hover:scale-110 transition ease-in duration-300"/>
         <h1 className="absolute bg-black text-white top-[15px] left-[15px] rounded px-3 py-1 ">{status}</h1>
       </div>
       <div className="flex flex-col gap-2 py-2 cursor-pointer">
          <p className="text-base font-medium">Alukas <span className="text-slate-400 text-base">- Feburary 1,2005</span></p>
          <h1 className="text-xl font-medium letter-wide">{title}</h1>
          <p className="text-base text-slate-400">{desc}</p>
          <span className="relative w-[122px] overflow-hidden group/text" >Continue Reading
          <span className="absolute w-full bg-slate-200 py-[1px] bottom-0 left-0 "></span>
             <span className="group-hover/text:absolute w-full group-hover/text:bg-black py-[1px] bottom-0 left-0 group-hover/text:translate-x-[125px] transition ease-linear duration-300"></span>
             <span className="group-hover/text:absolute w-full bg-black py-[1px] bottom-0 -left-[122px] group-hover/text:translate-x-[122px] transition ease-linear duration-300 group-hover:scale-100 delay-300 "></span>
             
          </span>
       </div>
   </div>
    )
 }