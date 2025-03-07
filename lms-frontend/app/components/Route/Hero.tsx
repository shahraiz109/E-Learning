import React, { FC } from 'react'
import Image from "next/image"
import Link from "next/link"
import { BiSearch } from 'react-icons/bi'

type Props = {}

const Hero: FC<Props> = (props) => {
    return (
        <div className="w-full 1000px:flex items-center">
          <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[40vh] left-5 w-[40vh] hero_animation rounded-[50%] 1100px:left-8 1500px:left-14"></div>
                <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
                    <Image
                                      src={require("../../../public/assets/banner-img-1.png")}
                                      width={400}
                                      height={400}

                        alt=""
                        className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
                    />
                </div>
                <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
                    <h2 className="dark:text-white text-black text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60%] 1100px:w-[78%]">
                        Imporove Your Online Learning Experience By Better Instantly
                    </h2>
                <br />
                <p className="dark:text-white text-black font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:w-[78%]">
                    We have 40k+ online courses & 5k+ online registered students. Find 
                    desired course from them
                </p>
                <br />
                <br />
                <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
                    <input
                    type='search'
                    placeholder='Search Courses...'
                    className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#fffffffd] rounded-[5px] p-2 w-full outline-none text-black dark:text-white text-[20px] font-[600] font-Josefin" 
                    />
                <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] top-0 right-0 bg-[#39c1f3] rounded-r-[5px]">
                <BiSearch className="text-white" size={30}/>
                </div>
                </div>
                <br />
                <br />
                <div className="1500px:w-[55%] 1100px:w-[78%] w-[95%] flex items-center">
              <Image
              src={require("../../../public/assets/client-1.jpg")}
              alt=''
              className="rounded-full"
              />
               <Image
                            src={require("../../../public/assets/client-2.jpg")}

              alt=''
              className="rounded-full ml-[20px]"
              />
               <Image
                            src={require("../../../public/assets/client-3.jpg")}

              alt=''
              className="rounded-full ml-[20px]"
              />
              <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
                500k+ people already trusted us.{""}
                <Link
                href="/courses"
                className="dark:text-[#46e256] text-[crimson] pl-4"
                >
                    View Courses
                </Link> {""}
              </p>
                </div>
                <br />
                </div>

            </div>

        
    )
}

export default Hero;