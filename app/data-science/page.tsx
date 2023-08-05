import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const data2 = [
    {
      id: 0,
      title: "HTML",
      desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
      img: "/../public/971.jpg",
    },
    {
      id: 1,
      title: "CSS",
      desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
      img: "/../public/971.jpg",
    },
    {
      id: 2,
      title: "Javascript",
      desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
      img: "/../public/971.jpg",
    },
    {
      id: 3,
      title: "React",
      desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
      img: "/../public/971.jpg",
    },
    {
      id: 4,
      title: "Bootstrap",
      desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
      img: "/../public/971.jpg",
    },
    {
      id: 5,
      title: "Bootstrap",
      desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
      img: "/../public/971.jpg",
    },
  ];


const DATASCIENCE = () => {
    return (
        <div className='container'>
            <div className="bg-black h-[60vh] flex flex-col md:flex-row md:justify-between md:bg-[url('/ww.jpg')] md:h-[60vh] sm:h-[30vh]">
                {/* TEXT CONTAINER */}
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 pt-40">
                    <h1 className="text-white text-5xl font-bold xl:text-6xl">BACKEND DEVELOPMENT</h1>
                </div>
                {/* IMAGE CONTAINER */}
            </div>

            <div id="about" className="px-10 lg:px-32 dark:bg-white">
                <div
                    className="mx-auto py-20 flex flex-col-reverse lg:flex-row items-center gap-20"
                >
                    {/* left */}
                    <div className="relative">
                        <img
                            className="h-1/4 absolute top-0 left-0 -z-10"
                            src="./img/dots.png"
                            alt=""
                        />
                        <div className="h-full overflow-hidden">
                            <Image src="/../public/971.jpg" width={500} height={400} alt="" />
                        </div>
                    </div>
                    {/* right */}
                    <div className="my-auto flex flex-col gap-3">
                        <h1 className="text-indigo-600 text-3xl font-bold">What is Backend Development?</h1>
                        {/* <h1 className="text-3xl font-medium dark:text-white">Better Design</h1>
                        <h1 className="text-3xl font-medium dark:text-white">
                            Better Experience
                        </h1> */}
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eum repellendus similique ab, atque magni!
                        </p>
                    </div>
                </div>
            </div>


            <div id="services" className="lg:px-32 dark:bg-white">
                <div className="mx-auto">
                    {/* <!-- top --> */}
                    <div className="flex flex-col gap-3 items-center">
                        <h1 className="text-3xl dark:bg-white">Course Content</h1>
                        <p className="w-1/2 text-center text-gray-400">
                            My approach to website design is to create a website that
                            strengthens your company’s brand while ensuring ease of use and
                            simplicity for your audience.
                        </p>
                    </div>
                    {/* <!-- bottom --> */}
                    <div className="p-5 sm:p-0 flex flex-wrap justify-between">

                        {data2.map((el) => (
                            <div
                            className="w-full md:w-96 shadow-xl rounded-lg p-5 my-3 md:my-10 mx-1 flex flex-col gap-3"
                        >
                            <Image src={el.img} width={400} height={400} alt="" />
                            <h1 className="font-medium text-lg dark:bg-white">{el.title}</h1>
                            <p className="text-gray-400">
                                {el.desc}
                            </p>
                        </div>
                        ))}

                        
                        
                    </div>
                </div>
            </div>


            <div id="about" className="lg:px-32 dark:bg-white">
                <div
                    className="mx-auto py-20 flex flex-col-reverse lg:flex-row items-center gap-20"
                >
                    {/* left */}
                    <div className="relative">
                        {/* <img
                            className="h-1/4 absolute top-0 left-0 -z-10"
                            src="./img/dots.png"
                            alt=""
                        /> */}
                        <div className="h-full rounded-full overflow-hidden">
                            <Image src="/../public/971.jpg" width={200} height={200} alt="" />
                        </div>
                    </div>
                    {/* right */}
                    <div className="my-auto flex flex-col gap-2">
                        <h1 className="text-indigo-600 text-2xl font-bold">Adediran Sulyman</h1>
                        <p className="text-gray-400 text-xl">
                            Instructor
                        </p>
                        <h1 className="text-indigo-600 text-xl">100+ Students</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DATASCIENCE