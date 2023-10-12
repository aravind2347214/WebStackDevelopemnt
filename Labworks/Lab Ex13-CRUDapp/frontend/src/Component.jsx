import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Component() {

    const [notes,setNotes]=useState([])
    const [showAddNote,setshowAddNote]=useState(false)
    const [formData,setFormData]=useState({
        title:'',
        content:''
    })

    useEffect(()=>{
        if(notes.length===0){
            axios.get("http://localhost:8000/get-all-notes").then((res)=>{
                console.log(res.data);
                setNotes(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[])

    const handleAddNote=()=>{
        setshowAddNote(true)


    }

    const handleAddCancel=()=>{
        setshowAddNote(false)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={
            title:formData.title,
            content:formData.content,
            timestamp:new Date.now()
        }
        axios.post("http://localhost:8000/add-note",data).then((res)=>{
            alert('Note added successfully')
            setFormData({ 
            title:'',
            content:''
          })
          setshowAddNote(false)

        }).catch((err)=>{
            console.log(err);
            alert("Could Not Add note")
        })

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      
    




  return (
    <div className='w-[50%] bg-slate-100 mx-auto p-2 mt-20 rounded-md flex flex-col gap-2'>
        <div className='text-[50px] text-center font-extrabold'>Notes App</div>


        <div className='text-[20px] font-bold'>All Notes</div>
        <div className='p-1 bg-slate-50 rounded-md'>
            <table>
                <thead>
                    <th>Note Title</th>
                    <th>Note Content</th>
                    <th>Timestamp</th>
                </thead>
                <tbody>
                   {notes?.map((node)=>(
                    <tr key={node?.id}>
                        <td>{node?.title}</td>
                        <td>{node?.content}</td>
                        <td>{node.timestamp}</td>
                        {/* <td>{new Date(node.timestamp)}</td> */}
                    </tr>
                   ))}
                </tbody>
            </table>
        </div>
        <div className='flex flex-row flex-end w-full justify-end  items-center my-2'>
            <button className='px-3 py-1 text-black bg-[#01010158]  hover:bg-[#010101] rounded-md hover:text-white font-bold '  onClick={handleAddNote}>+ Add Note</button>
        </div>

        {
            showAddNote&&
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label htmlFor="">Note Title</label>
                    <input
                    name="title"
                    onChange={handleInputChange} 
                    
                    type="text" className='p-2' placeholder='Enter a Title' required/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Note Content</label>
                    <input
                    name="content"
                    onChange={handleInputChange}
                    type="text" className='p-2' placeholder='Enter Some Content' required/>
                </div>
                <div className='flex flex-row gap-2 justify-end'>

                <button type='submit' className=' border-black w-fit px-3 py-1 text-black hover:bg-[#01010114]   rounded-md  font-bold ' onClick={handleAddCancel}>
                    Cancel
                </button>
                <button type='submit' className=' w-fit px-6 py-1 text-white bg-[#010101]   rounded-md  font-bold ' >
                    Add
                </button>
                </div>
                
            </form>
        }


    </div>
  )
}

export default Component