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
    return <div className={expanded? ``:`flex flex-col`}>
        {/* for image */}
       <div className={expanded? ``: ``}>
        <Image src={thumbnail} alt={title}></Image>
       </div>
       {/* for channel image, title, and all other data */}
       <div className=" flex justify-center items-center ">
        {/* channle */}
        <div className=" p-3">
           <Image className=" w-15 h-12 rounded-3xl "  src={thumbnail} alt={title} />
        </div>
        {/* for all divs for title, views, channel, age */}
        <div>
        {/* title */}
        <div>
            {title}
        </div>
        {/* channel ka nam */}
         <div className=" flex gap-2 items-center">
          {channel} <FaCheckCircle />
         </div>
         <div className=" flex gap-5 items-center">
           <div>{age}</div>
           <div>{views}</div>
         </div>
        </div>
        
       </div>
    </div>
}