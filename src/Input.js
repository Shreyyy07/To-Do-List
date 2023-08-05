import {useState} from 'react'
function Input({onAdd}){
    const [text,setText]=useState("")
    return(
        <div id="Input" className='flex flex-row justify-between place-items-center drop-shadow-2xl'>
            <input
            className='rounded-lg p-5'
            type='text' value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder={"Enter the Task...."}
            />
            <div className='w-10'></div>
            <div onClick={()=>onAdd(text)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 -6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokekidth={2}>
            <path color="green" strokeLinecaps="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /> 
              </svg>
            </div>
            <div>

            </div>

        </div>
    )
}
export default Input