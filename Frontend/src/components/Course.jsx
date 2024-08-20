import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
              We're delighted to have you <span className='text-pink-500'>Here! :)</span>
            </h1>
            <p className='mt-12 center'>
              Welcome to Bookstore, your premier online destination for all things literary! 
              Whether you're an avid reader, a curious learner, or just looking for your next great adventure, we have something for everyone. 
              Our carefully curated selection spans every genre, ensuring you'll find the perfect book to captivate your imagination. 
              With user-friendly navigation, personalized recommendations, and exceptional customer service, we're here to make your shopping experience seamless and enjoyable. 
              Dive into our world of books and discover your next favorite read today!
            </p>
            <Link to="/">
              <button className='mt-6 bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-700 duration-300'>
                Back
              </button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
              <Cards item={item} key={item.id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course