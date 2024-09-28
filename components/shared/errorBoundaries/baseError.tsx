import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function BaseError({Error}:{Error?:string}) {
  return (
    <>
    <Head>
      {Error == "500" && <title>500 - Internal Server Error</title>}
      {Error == "400" && <title>400 - Page Not Found</title>}
      {!Error && <title>OOPS something went wrong</title>}
    </Head>
    <div className="h-screen flex justify-center items-center flex-col text-center bg-gray-100">
      {Error && <h1 className="text-9xl font-bold text-red-500 text-shadow-md">{Error}</h1>}
      {!Error && <h1 className="text-9xl font-bold text-red-500 text-shadow-md">OOPS !</h1>}
      {Error == "500" && <p className="text-lg text-gray-600 mb-4">Internal Server Error</p>}
      {Error == "400" && <p className="text-lg text-gray-600 mb-4">Page Not FOund</p>}
      {!Error && <p className="text-lg text-gray-600 mb-4">Something went wrong</p>}
      <p className="text-md text-gray-500 mb-8">Sorry, something went wrong. Please try again later.</p>
      <Link href="/" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
          Go Back
      </Link>
    </div>
    </>
  )
}

export default BaseError