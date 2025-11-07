import Image, { StaticImageData } from "next/image"
import { FaCheckCircle } from "react-icons/fa";
import { useStore } from "../store/store";

interface cardProps{
    id:number,
    channel:string,
    views:string,
    title:string,
    thumbnail:StaticImageData,
    age:string
}
export const Card = ({id, channel, views, title, thumbnail, age} : cardProps) => {
    const  {expanded, expand, collapse} = useStore()
    return <div className={expanded? ` flex flex-col sm:flex sm:flex-col sm:justify-start sm:w-full sm:h-full `:`flex flex-col sm:flex sm:flex-col sm:justify-start sm:w-full sm:h-full `}>

        {/* for outer div   */}
     <div className={expanded?`className=" hover:bg-zinc-700 sm:hover:bg-zinc-700 sm:w-100 sm:h-90 sm:rounded-xl sm:transition-all duration-500 ease-in-out"`:`className=" hover:bg-zinc-700 sm:hover:bg-zinc-700 sm:w-100 sm:h-90 sm:rounded-xl sm:transition-all duration-500 ease-in-out md:hover:bg-zinc-700 md:hover:bg-zinc-700"`}>
      <div className={expanded? ` sm:w-full p-1.5 `: ` p-1.5 sm:w-full `}>
        <Image className={expanded? `className=" sm:w-98 sm:h-55 p-1  pl-1" `:`className=" sm:w-98 sm:h-55 p-1 pl-1" `} src={thumbnail} alt={title}></Image>
       </div>
       {/* for channel image, title, and all other data */}

       {/* title */}
       <div className={expanded?`flex justify-center items-center`:`flex justify-center items-center`}>
        {/* channle */}
        <div className=" p-3">
           <Image className={expanded? `w-15 h-12 rounded-3xl sm:w-15 sm:h-15 ` : `w-15 h-12 rounded-3xl sm:w-15 sm:h-15 `}  src={thumbnail} alt={title} />
        </div>
        {/* for all divs for title, views, channel, age */}
        <div>
        {/* title */}
        <div >
            {title}
        </div>
        {/* channel ka nam */}
         <div className={expanded? `flex items-center gap-x-2.5` : `flex items-center gap-x-2.5`}>
          {channel} <FaCheckCircle />
         </div>
         <div className={expanded ? `flex gap-5 items-center` : `flex gap-5 items-center`}>
           <div>{age}</div>
           <div>{views}</div>
         </div>
        </div>
       </div>
     </div>
    </div>
}