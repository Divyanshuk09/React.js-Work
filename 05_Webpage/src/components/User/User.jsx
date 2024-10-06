import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-500 p-2 text-center max-w-md mx-auto'>
      User:{userid}
    </div>
  )
}

export default User
