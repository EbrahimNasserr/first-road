import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
   <footer className=' pb-5'>
    <div className="container mx-auto flex pt-20 justify-center w-full items-center">
        <Image src="/Logo.png" width={200} height={200} alt="logo" />
    </div>
   </footer>
  )
}

export default Footer
