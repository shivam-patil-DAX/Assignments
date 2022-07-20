import axios from 'axios';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';


const baseURL='https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs';
const AddBlog=()=>{
    
    const [data,setData]=useState({
        title:"",
        description:"",
        author:"",
        reading_time:""


    })

    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)

    }
    function postBlog(){
        console.log("YUEAHHHHHHHHHH")
        console.log(data)

         axios.post(
            baseURL,
            data,
            {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
                }
            }
        ).then(console.log("HHHHHHHH"))
    }



    return(
        <div>
            <form>
            <ul class="form-style-1">
                    <li>
                        <h2>Title</h2> 
                            <input onChange={(e)=>handle(e)} id='title' value={data.title} placeholder="Title"type="text"></input>
                    </li>
                <li>
                    <h2>Description</h2>
                <input onChange={(e)=>handle(e)} id='description' value={data.description} placeholder="Description"type="text"></input>
                </li>
                <li>
                        <h2>Author</h2>
                <input onChange={(e)=>handle(e)} id='author' value={data.author} placeholder="Author"type="text"></input>
                </li>
                <li>
                        <h2>Reading time</h2>
                <input onChange={(e)=>handle(e)} id='reading_time' value={data.reading_time} placeholder="Reading time"type="number"></input>
                </li>
                </ul>
                <button onClick={postBlog}><Link to="/">Submit</Link></button>
            </form>
        </div>
    )

}

export default AddBlog