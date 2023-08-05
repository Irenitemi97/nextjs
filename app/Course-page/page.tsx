import React from 'react';
import Card from '../components/Card';
import Link from 'next/link';

const data = [
  {
    id: 0,
    title: "Frontend Development",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/f1.jpg",
    link: "/frontend"
  },
  {
    id: 1,
    title: "Backend Development",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/b1.jpg",
    link: "/backend"
  },
  {
    id: 2,
    title: "Python",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients ",
    img: "/python.png",
    link: "/python"
  },
  {
    id: 3,
    title: "Security+",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/c1.png",
    link: "/security"
  },
  {
    id: 4,
    title: "CCNA",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/c1.png",
    link: "/ccna"
  },
  {
    id: 5,
    title: "Data Science",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/c1.png",
    link: "/data-science"
  },
];

const page = () => {
  return (
    <div className="container">
      <div className="bg-black h-[60vh] flex flex-col md:flex-row md:justify-between md:bg-center bg-cover front-img md:h-[40vh] sm:h-[30vh]">
                {/* TEXT CONTAINER */}
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 pt-20">
                    <h1 className="text-white text-5xl font-bold xl:text-6xl">COURSE PAGE</h1>
                </div>
                {/* IMAGE CONTAINER */}
            </div>
      {/* <h1></h1> */}
      {/* <Heading title="My Projects" /> */}
      
      <div className="lg:px-32 pt-20 pb-20 grid gap-12 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        
          {data.map((el) => (
          <Link href={el.link}>
          <Card
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={[]}          />
          </Link>
        ))}
        
        
      </div>
      
    </div>
  )
}

export default page