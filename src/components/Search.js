import React from 'react'
import { useGlobalContext } from '../context/ApiContext'

function Search() {
  const {query, searchPost} = useGlobalContext();
  return (
    <div className='bg-red-00 w-full h-[50%] flex flex-col justify-center items-center mt-5 p-2'>
      <h1 className='text-3xl font-extrabold tracking-wide text-white text-center'>News On the Goo!</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input className='w-96 rounded-md flex px-4 py-2 mt-6 text-lg' type='text' placeholder='search here' value={query} onChange={(e) => searchPost(e.target.value)} />
      </form>
    </div>
  )
}

export default Search