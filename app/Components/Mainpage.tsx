import React from 'react'
import { youtubeData } from '../db/data'
import Link from 'next/link'
import { Card } from './Card'
import { useStore } from '../store/store'


const Mainpage = () => {
  const {expanded, expand, collapse } = useStore()
  return (
    <div>
      {
        youtubeData.map(({id, channel, views, title, thumbnail, age})=>{
           return (<div className={expanded? `px-3.5 pt-2` : `px-3.5 pt-2`} key={id}>
            <Link key={id} href={`/video/${id}`}>
              <Card id={id} channel={channel} views={views} title={title} thumbnail={thumbnail} age={age}></Card>
            </Link>
           </div>)
        })
      }
    </div>
  )
}

export default Mainpage