import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <div className="w-full bg-black h-20 flex items-center gap-4">
      <div className="logo relative w-[160px] h-[50px] bg-white ">

      <Image src={"/images/logo.png"} alt="" fill={true} />
      </div>
      
     
      <Link href={"/"} className="salesBtn bg-white w-[140px] h-[30px]  flex justify-center items-center">Sales</Link>
      <Link href={"/"} className="salesBtn bg-white w-[140px] h-[30px]  flex justify-center items-center">Cash In/Out</Link>
      <Link href={"/"} className="salesBtn bg-white w-[140px] h-[30px]  flex justify-center items-center">Day End Close</Link>
      <Link href={"/"} className="salesBtn bg-white w-[140px] h-[30px]  flex justify-center items-center">Records</Link>
      
      
      </div>
  )
}

export default NavBar