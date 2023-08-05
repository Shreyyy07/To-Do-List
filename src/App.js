import Item from './Item'
import Input from './Input'
import{useState} from 'react'

 function App() {
  const [openAdd, setOpenAdd]= useState(false)
  const [items,setItems]=useState([])
  const [all,setAll] = useState(true)
async  function onAdd(txt){
    if(txt!==""){
      const exist=items.find(el=>el.text===txt)
      if(!exist){
        await setItems([...items,{text:txt,check:false}])
      }else{
        await alert("The task is already exist")
      }
      await setOpenAdd(false)
    }else{
      alert("Enter the title")
    }
  }

  function onCheck(txt){
    setItems(
      items.map((el)=>(
        el.text===txt?
        {text: el.text , check : !el.check}
        :
        el
      ))
    )
  }
  return (
    <div id="app" className="grid h-screen w-screen place-items-center">
      {openAdd?
      <Input onAdd={onAdd}/>
      :
      <div id="body" className="rounded-lg bg-sky-500 h-5/6 w-5/12 drop shadow 2x1 max-w-xl">
        <div id="title" className="m-5 text-center text-2xl font-bold text-white">
          <h1>To Do List</h1>
          </div>
          <div id="container" className="rounded-lg bg-white h-5/6 mx-5">
            <div id="container" className="rounded-t h-1/6 w-6/6 flex justify-around">
              <button className="rounded m-1 w-full bg-sky-700 text-white text-lg"onClick={()=>setAll(!all)}>
                {all? "Show Undone" : "Show All"}
              </button>
              <button className="rounded m-1 w-full bg-sky-700 text-white text-lg" onClick={()=>setOpenAdd(true)}>
                Add New
              </button>
            </div>
            <div id="divideLine" className="w-full border-t border-b border-gray-300"></div>
            <div id="toDoItems" className="overflow-y-scroll h-5/6 bg-white">
              {all?
                items.map((el)=>(
                  <Item text={el.text} check={el.check} onCheck={onCheck}/>
                ))
                :
                items.map((el)=>(
                  !el.check?
                  <Item text={el.text} check={el.check} onCheck={onCheck}/>
                  :
                  ""
                ))
                }
            </div>
          </div>
          {/* <div className="text-center text-white font-bold">Be Productive</div>  */}
      </div>
}
    </div>
  );
}
 
export default App;
