import React from 'react'

function NewsItem({item}) {
const websiteUrl = item.url;
const website = websiteUrl.split("https://").pop().split('/')[0]

const date = item.publishedAt;
const formatDate = date.replace("T","");
const formatTime = formatDate.replace("Z","")
  return (
    <div className=''>
        <div>
            <img src={item.urlToImage} alt={item.title}/>
        </div>
        <div><h2 className='text-xl font-bold '>{item.title}</h2></div>
    </div>
  )
}

export default NewsItem