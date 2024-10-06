import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/divyanshuk09')
    //     .then(response =>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // }, [])

const data=useLoaderData()

  return (
    <div className='text-center bg-gray-700 mx-auto '>
        <div className="py-4 flex-col items-center flex mx-auto bg-gray-500/30 w-1/2 outline-none transparent text-lg font-mono">
        <img className='rounded-full' src={data.avatar_url} width={150} alt="gitprofile" />
        <div className='flex gap-4'>
        <p>Name:</p>
            <span className='text-white'>{data.name}</span>
        </div>
        <div className='flex gap-4'>
        <p>Username:</p>
            <span className='text-white'>{data.login}</span>
        </div>
        <div className='flex gap-4'>
        <p>Public Repository:</p>
            <span className='text-white'>{data.public_repos}</span>
        </div>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/divyanshuk09')
    return response.json()
}