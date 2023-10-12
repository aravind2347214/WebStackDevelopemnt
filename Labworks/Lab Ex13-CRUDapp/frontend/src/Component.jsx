import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Component() {

    const [notes,setNotes]=useState([])

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

    




  return (
    <div className='w-[60%] bg-slate-100 mx-auto p-2 mt-20 rounded-md flex flex-col gap-2'>
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
        {/* <div className='flex flex-row justify-between'>
            <button onClick={handleAddNote}>Add Note</button>
        </div> */}


    </div>
  )
}

export default Component