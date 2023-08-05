function Item({text, check, onCheck}){
    return(
        <div id="item" className="flex flex-row bg-sky-200 m-1 p-2 rounded-md">
            <div id="item_text" className="basis-3/4 text-lg">
                {text}
            </div>
            <div id="item_icon" className="basis-1/4 grid" onClick={()=>onCheck(text)}>
            {check?
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 -6 place-self-end" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokekidth={2}>
              <path color="green" strokeLinecaps="round" strokeLinejoin="round" d="MS 1314 419 7" /> 
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 place-self-end" fill="none" viewBox="0 24 24" stroke="currentColor" strokeWidth={2}>
               <path color="#ff4747" strakelinecap="round" strokeLinejoin="round" d="M9 1212 2 4-4n6 289 9 @ 11-18990 0118 0z" />
               </svg>
}  
               </div>
            
        </div>
    )
}
export default Item