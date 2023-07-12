import React from 'react'

function Menu({category,active,setActive,setCategory}) {
    const links = [
        {id:1,name:"General",value:"general"},
        {id:2,name:"Business",value:"business"},
        {id:3,name:"Entertainment",value:"entertainment"},
        {id:4,name:"Health",value:"health"},
        {id:5,name:"Science",value:"science"},
        {id:6,name:"Sports",value:"sports"},
        {id:7,name:"Technology",value:"technology"},
    ]

  function myclick(id,value){
    setActive(id)
    setCategory(value)
  }
  return (
    <nav className='container w-full flex flex-col h-70 mb-100 justify-center  md:items-center   md:flex-row md:h-16 bg-yellow-600 fixed top-0 left-0 right-0 md:mb-10 md:px-30 '>
    
        <ul className='flex  flex-col md:flex-row '>
        {links?.map((link,id)=>(
            <li key={link.id} className={active === link.id ? "text-green py-2  md:px-6 rounded bg-stone-600":"text-white border-r-gray-900 py-2 px-3 md:px-6 rounded "}
            onClick={()=> myclick(link.id,link.value)}>
           {link.name}
           </li>
           )) }
        </ul>
    </nav>
  )
}

export default Menu