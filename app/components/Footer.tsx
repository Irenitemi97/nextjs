import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="max-w-[1240px] container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-8" src="./img/logo.png" alt="" />
          <span className="text-2xl font-bold text-white">1802 Schools.</span>
        </div>
        <span className="hidden md:block font-medium text-white"
          >© 2023 1802 SCHOOLS</span
        >
      </div>
    </div>
  )
}

export default Footer