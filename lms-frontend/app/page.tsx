'use client'
import React,{FC, useState} from "react"
import Heading from "./utills/Heading";
import Header from "./components/Header"
import Hero from "./components/Route/Hero"

interface Props{}

const Page : FC<Props> = (props) => {

     const [open, setOpen ] = useState(false);
     const [activeItem, setActiveItem] = useState(0)
     const [route, setRoute] = useState("Login")

  return(

    <div>
      <Heading
      title="Lms Becodemy"
      description="Lms Becodemy is platform to leran and get knowledge about coding"
      keywords="Programming, nextjs, redux"
      />
      <Header
      open={open}
      setOpen={setOpen}
      activeItem={activeItem}
      setRoute= {setRoute}
      route={route}
      />
      <Hero/>
</div>
    
    
  )
}

export default Page;