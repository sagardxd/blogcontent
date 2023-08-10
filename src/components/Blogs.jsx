import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';

export const Blogs = () => {

  const { posts, loading } = useContext(AppContext);


  return (
    <div className='w-11/12 max-w-[600px] py-3 flex  flex-col mt-16 bg-white gap-y-7 mb-16'>

      {
        loading ? (<Spinner />) : (
          posts.length === 0 ? (<div> 
            <p>No post found</p>
          </div>) : 
          ( posts.map( (post) => (
            <div key={post.id}>
                <p className='font-bold text-sm'>{post.title}</p>
                <p className='text-xs italic'>
                  By <span>{post.author}</span> on <span className='font-bold'>{post.category}</span>
                </p>
                <p className='text-xs'>Posted on {post.date}</p>
                <p className='text-sm mt-3'>{post.content}</p>
                <div className='flex gap-x-2 mt-1 '>
                  {post.tags.map( (tag, index) => {
                    return <span key={index} className='text-blue-500 text-[10px] font-bold underline '>{`#${tag}`}</span>
                  } )}
                </div>
            </div>
          )))
        )
      }

    </div>
  )





}


