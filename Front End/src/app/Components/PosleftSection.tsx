import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'


const PosleftSection = () => {
    return (
        <div className='PosleftSection h-full flex flex-col'>
            <div className="customerInfo flex items-center p-3 gap-3">
                <div className="avatar rounded-[100%] border-2 border-black">
                    <Image src={"/images/User.png"} alt='' width={35} height={50} />

                </div>
                <Input type='number' className='w-[220px]' placeholder='Mobile Number' />

            </div>

            <div className="billingList h-[60%]">

                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-muted text-muted-foreground">
                            <th className="px-4 py-3 text-left font-medium">#</th>
                            <th className="px-4 py-3 text-left font-medium">Code</th>
                            <th className="px-4 py-3 text-left font-medium">Product</th>
                            <th className="px-4 py-3 text-left font-medium">Quantity</th>
                            <th className="px-4 py-3 text-left font-medium">Unit</th>
                            <th className="px-4 py-3 text-left font-medium">Unit Price</th>
                            <th className="px-4 py-3 text-left font-medium">Discount</th>
                            <th className="px-4 py-3 text-left font-medium">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-background even:bg-muted/20">
                            <td className="px-4 py-3">1</td>
                            <td className="px-4 py-3">ABC123</td>
                            <td className="px-4 py-3">Acme Widget</td>
                            <td className="px-4 py-3">10</td>
                            <td className="px-4 py-3">pcs</td>
                            <td className="px-4 py-3">$9.99</td>
                            <td className="px-4 py-3">10%</td>
                            <td className="px-4 py-3">$89.91</td>
                        </tr>
                        <tr className="bg-background even:bg-muted/20">
                            <td className="px-4 py-3">2</td>
                            <td className="px-4 py-3">XYZ456</td>
                            <td className="px-4 py-3">Mega Gadget</td>
                            <td className="px-4 py-3">5</td>
                            <td className="px-4 py-3">pcs</td>
                            <td className="px-4 py-3">$19.99</td>
                            <td className="px-4 py-3">15%</td>
                            <td className="px-4 py-3">$84.95</td>
                        </tr>
                        <tr className="bg-background even:bg-muted/20">
                            <td className="px-4 py-3">3</td>
                            <td className="px-4 py-3">LMN789</td>
                            <td className="px-4 py-3">Super Doohickey</td>
                            <td className="px-4 py-3">3</td>
                            <td className="px-4 py-3">pcs</td>
                            <td className="px-4 py-3">$29.99</td>
                            <td className="px-4 py-3">20%</td>
                            <td className="px-4 py-3">$71.97</td>
                        </tr>
                        <tr className="bg-background even:bg-muted/20">
                            <td className="px-4 py-3">4</td>
                            <td className="px-4 py-3">PQR012</td>
                            <td className="px-4 py-3">Fancy Thingamajig</td>
                            <td className="px-4 py-3">2</td>
                            <td className="px-4 py-3">pcs</td>
                            <td className="px-4 py-3">$39.99</td>
                            <td className="px-4 py-3">25%</td>
                            <td className="px-4 py-3">$59.98</td>
                        </tr>
                        <tr className="bg-background even:bg-muted/20">
                            <td className="px-4 py-3">5</td>
                            <td className="px-4 py-3">STU345</td>
                            <td className="px-4 py-3">Deluxe Whatchamacallit</td>
                            <td className="px-4 py-3">1</td>
                            <td className="px-4 py-3">pcs</td>
                            <td className="px-4 py-3">$49.99</td>
                            <td className="px-4 py-3">30%</td>
                            <td className="px-4 py-3">$34.99</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="total h-[80px] flex justify-between px-5">Total Discount Totol pcs <span>3600.00 LKR</span></div>
            <div className="bottomFeatures h-[25%] grid grid-cols-4 p-3 place-items-center w-[70%]">
                <div className="feature1 h-[70px] w-[140px] bg-slate-400"></div>
                <div className="feature1 h-[70px] w-[140px] bg-slate-400"></div>
                <div className="feature1 h-[70px] w-[140px] bg-slate-400"></div>
                <div className="feature1 h-[70px] w-[140px] bg-slate-400"></div>
                <div className="feature1 h-[70px] w-[140px] bg-slate-400"></div>
                <div className="feature1 h-[70px] w-[140px] bg-slate-400"></div>
            </div>
        </div>
    )
}
export default PosleftSection
