import React from 'react'
import NewsItem from "./NewsItem"
function NewsGrid({items}) {
  return (
    <div className='grid mt-60 md:mt-10  md:grid-cols-3 md:gap-6  '>
        {items?.map((item,i) =>(
            <NewsItem item={item} key={i}/>
        ))}
    </div>
  )
}

export default NewsGrid