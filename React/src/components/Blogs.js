import { useState, useEffect } from "react"
import axios from 'axios';
import CardBlog from './CardBlog';
import {Link} from 'react-router-dom';


const baseURL = 'https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs?select=*'

const Blogs = () => {
    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(baseURL, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
            }
        }).then((response) => {
            setBlogs(response.data)     
            setLoading(false)
            console.log('data', response)
        });
    }, [])

    return (
        <div className="container">
            <button><Link to="/addblog">Add Blog</Link></button>
            <div className="row" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
            {
                loading ? <h1>Loading...</h1> :
                    <>
                        {
                            
                            blogs.map((blog, index) => {
                                console.log(blog)
                                return CardBlog(blog)
                            })
                        }
                    </>
            }
            </div>

        </div>
    )
}

export default Blogs