import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchData(id)
    }, [])

    const fetchData = async (rcvId) => {
        const blog = await fetch(`https://jsonplaceholder.typicode.com/users/${rcvId}`)
        const result = await blog.json()
        setBlog(result)
    }
console.log(blog)
   
  return (
    <div>
    <div className="card card-side bg-red-100 shadow-xl mx-auto container mt-3">
           <div className="card-body">
           <span className="badge badge-danger">{blog.username}</span>
      <h2 className="card-title">{blog.name}</h2>
      <p>{blog.email}</p>
      <p>{blog.phone}</p>
      <p>{blog.website}</p>
      <p>{blog?.address?.city}</p>
      <Link to={"/blog"}><button className="btn btn-secondary  bg-red-300 text-center block">Back</button></Link>
              </div>
        </div>
    </div>
  )
}

export default BlogDetails