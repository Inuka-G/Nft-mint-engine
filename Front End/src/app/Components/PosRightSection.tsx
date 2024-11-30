import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
const PosRightSection = () => {
    return (
        <div className="rightSection  bg-slate-400">

            <div className="search flex gap-3 justify-center items-center" >
                <Image src={"/images/Barcode.png"} alt='' width={50} height={30} />
                <Input type='text' placeholder='Scan Bar code' className='w-[300px]' />
                <div className="searchManual cursor-pointer bg-white p-1 rounded-md"><Image src={"/images/search.png"} alt='' width={30} height={30} /></div>
            </div>
            <div className="productDeatils h-[60%] m-5 bg-white rounded-md"></div>
            <div className="paymentOptions grid grid-cols-3 place-items-center gap-5">
                <div className="Cash h-[80px] w-[130px] bg-white flex flex-col justify-center items-center text-[20px] rounded-md"><Image src={"/images/lkr 1.png"} alt='' width={50} height={50} /><span >Cash</span>
                </div>
                <div className="Cash h-[80px] w-[130px] bg-white flex flex-col justify-center items-center text-[20px] rounded-md"><Image src={"/images/Magnetic Card.png"} alt='' width={70} height={50} /><span >Card</span>
                </div>
                <div className="Cash h-[80px] w-[130px] bg-white flex flex-col justify-center items-center text-[20px] rounded-md"><Image src={"/images/Time to Pay.png"} alt='' width={40} height={50} /><span >Credit</span>
                </div>
                <div className="Cash h-[80px] w-[130px] bg-white flex flex-col justify-center items-center text-[20px] rounded-md"><Image src={"/images/Voucher.png"} alt='' width={60} height={50} /><span >Voucher</span>
                </div>

            </div>

        </div>
    )
}

export default PosRightSection