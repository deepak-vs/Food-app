import React, { useEffect } from 'react'

const Pagination = ({totalFood,foodPerPage,setCurrentPage,currentPage}) => {
   let pages=[];
   
   for(let i=1;i<=Math.ceil(totalFood/foodPerPage);i++){
        pages.push(i);
   }

  

  return (
      <div className='pages'>
        {pages.map((page,index)=>{
            return <button onClick={()=>setCurrentPage(page)} className={`page-button ${currentPage===page?"active":""}`} key={index}>{page}</button>
        })}
    </div>
  )
}

export default Pagination