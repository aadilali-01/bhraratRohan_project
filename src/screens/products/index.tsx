import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react'
import "./product.css"
import CuminBanner from './CuminBanner';

const PageProduct = () => {

  const box = useRef<any>()
  const image = useRef<any>()
  const rightBox = useRef<any>()
  const [activeSection, setActiveSection] = useState<string>('variant');

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };


  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const boxElement = rightBox.current;
    const rect = boxElement.getBoundingClientRect();
    const endPoint = rect.bottom;
    const selector = gsap.utils.selector(image)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: image.current,
          scrub: 1,
          start: 'top top',
          end: "bottom 64%",
          pin: true,
          pinSpacing: false,
          // markers: true,
        },
        
        
      })
      
    })
    return () => ctx.revert()

    

    
  })

  return (
    <>
      <CuminBanner/>
      
      <div ref={box} className='flex box relative min-h-screen'>
        <div ref={image} className='h-full w-5/12'>
          <img className='h-full w-full object-cover' src="/product.png" alt="Cumin image" />
        </div>
        <div ref={rightBox} className='w-7/12 pl-9 pr-16'>
          <div className='blade-top-margin'>
            <h4 className='font-bold text-emerald-900'>Cumin (Whole)</h4>
            <div className='w-9/12 leading-tight mt-4'><small className='leading-none font-medium'>Sourced from our partner farms from the Marwar region (Rajasthan, India), we bring you residue-free pungent-flavoured cumin seeds of different sizes and colours that are second to none. From tacos to curries, from soups to savouries, our range of cumin seeds adheres to global quality and food safety mandates.</small></div>
          </div>
          <div className='w-full h-px bg-gray-300 mt-5 mb-5'></div>
          <div>
            <h6 className='text-emerald-900 font-medium'>Origin</h6>
            <div className='flex items-center gap-14 mt-2'>
              <small className='font-medium'><span className='opacity-70'>Country:</span> India</small>
              <small className='font-medium'><span className='opacity-70'>State:</span> Rajasthan</small>
              <small className='font-medium'><span className='opacity-70'>Region:</span> Pali</small>
            </div>
          </div>
          <div className='w-full h-px bg-gray-300 mt-5 mb-5'></div>

          <button className='text-xs text-white py-2 px-11 rounded-3xl outline-none bg-emerald-900 hover:bg-emerald-700 transition duration-300 ease-in-out'>Buy now</button>
          
          <div className='bg-white' >
            <div className='flex items-center gap-14 blade-top-margin'>
              <h6 onClick={() => handleSectionClick('variant')} className={`text-sm font-medium cursor-pointer transition-opacity duration-400 ${activeSection === 'variant' ? 'opacity-100' : 'opacity-50'}`}>VARIENT DETAILS</h6>
              <h6 onClick={() => handleSectionClick('cancellation')} className={`text-sm font-medium cursor-pointer transition-opacity duration-400 ${activeSection === 'cancellation' ? 'opacity-100' : 'opacity-50'}`}>CANCELLATION & REFUND</h6>
              <h6 onClick={() => handleSectionClick('shipping')} className={`text-sm font-medium cursor-pointer transition-opacity duration-400 ${activeSection === 'shipping' ? 'opacity-100' : 'opacity-50'}`}>SHIPPING POLICY</h6>
            </div>
            <div className='w-full h-px bg-gray-300 mt-2 mb-5 flex items-center gap-12'>
              <div className={`h-full w-28 bg-black transition-opacity duration-400 ${activeSection === 'variant' ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`h-full w-44 ml-3 bg-black transition-opacity duration-400 ${activeSection === 'cancellation' ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`h-full w-32 ml-2 bg-black transition-opacity duration-400 ${activeSection === 'shipping' ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          </div>

          <div className='overflow-hidden relative'>

            {/* Varient Details Box */}
            <div className={`transition-all blade-bottom-margin ${activeSection === 'variant' ? 'translate-x' : '-translate-x-full'}`}>
              <div className="grid grid-cols-[1.5fr,1.4fr,repeat(2,1fr),2.7fr] grid-rows-[.1fr] gap-x-15 bg-gray-100 px-4 py-2">
                <div className='font-medium flex items-center'><small>Varient</small></div>
                <div className='font-medium opacity-40 flex items-center justify-center'><small>Package size</small></div>
                <div className='font-medium opacity-40 flex items-center justify-center'><small>Moisture</small></div>
                <div className='font-medium opacity-40 flex items-center justify-center'><small>Purity</small></div>
                <div className='font-medium opacity-40 flex items-center justify-start'><small>Description</small></div>
              </div>
  
              <div className="grid grid-cols-[1.5fr,1.4fr,repeat(2,1fr),2.7fr] grid-rows-[.1fr] gap-x-15 px-4 py-2">
                <div className='font-medium flex items-center'><small className='font-size'>Jeera Dolphin (R)</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>30 kg</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>8%</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>99%</small></div>
                <div className='font-medium flex items-center justify-start'><small className='font-size'>Regular colour & medium size seeds with cutting material, below 6% much,</small></div>
              </div>
  
              <div className="grid grid-cols-[1.5fr,1.4fr,repeat(2,1fr),2.7fr] grid-rows-[.1fr] gap-x-15 px-4 py-2 bg-fuchsia-50">
                <div className='font-medium flex items-center'><small className='font-size'>Jeera Dolphin (R) Sortex</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>30 kg</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>8%</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>99.75%</small></div>
                <div className='font-medium flex items-center justify-start'><small className='font-size'>Machine clean packing quality good colour & medium size seeds with cutting material</small></div>
              </div>
  
              <div className="grid grid-cols-[1.5fr,1.4fr,repeat(2,1fr),2.7fr] grid-rows-[.1fr] gap-x-15 px-4 py-2">
                <div className='font-medium flex items-center'><small className='font-size'>Jeera Gold (G) Sortex</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>30 kg</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>8%</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>99.5%</small></div>
                <div className='font-medium flex items-center justify-start'><small className='font-size'>Bold bright colour & bold size seeds with cutting material, below 6% much. 0.50% max.impurity</small></div>
              </div>
              
              <div className="grid grid-cols-[1.5fr,1.4fr,repeat(2,1fr),2.7fr] grid-rows-[.1fr] gap-x-15 px-4 py-2 bg-fuchsia-50">
                <div className='font-medium flex items-center'><small className='font-size'>Jeera Heritage (F)</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>25 kg</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>8%</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>99.5%</small></div>
                <div className='font-medium flex items-center justify-start'><small className='font-size'>Machine clean packing quality good colour & medium size seeds</small></div>
              </div>
              
              <div className="grid grid-cols-[1.5fr,1.4fr,repeat(2,1fr),2.7fr] grid-rows-[.1fr] gap-x-15 px-4 py-2">
                <div className='font-medium flex items-center'><small className='font-size'>Jeera JP Silver (P)</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>30 kg</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>8%</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>99.5%</small></div>
                <div className='font-medium flex items-center justify-start'><small className='font-size'>Premium packing bright colour & medium size seeds with cutting material</small></div>
              </div>
              
              <div className="grid grid-cols-[1.5fr,1.4fr,repeat(2,1fr),2.7fr] grid-rows-[.1fr] gap-x-15 px-4 py-2 bg-fuchsia-50">
                <div className='font-medium flex items-center'><small className='font-size'>Jeera Sunflower(S)</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>30 kg</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>10%</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>99%</small></div>
                <div className='font-medium flex items-center justify-start'><small className='font-size'>Average colour & size seeds 1% max.impurity</small></div>
              </div>
              
              <div className="grid grid-cols-[1.5fr,1.4fr,repeat(2,1fr),2.7fr] grid-rows-[.1fr] gap-x-15 px-4 py-2">
                <div className='font-medium flex items-center'><small className='font-size'>Jeera Taj</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>30 kg</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>10%</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>98%</small></div>
                <div className='font-medium flex items-center justify-start'><small className='font-size'>Average colour & size seeds lowest machine clean quality</small></div>
              </div>
              
              <div className="grid grid-cols-[1.5fr,1.4fr,repeat(2,1fr),2.7fr] grid-rows-[.1fr] gap-x-15 px-4 py-2 bg-fuchsia-50">
                <div className='font-medium flex items-center'><small className='font-size'>Jeera Tiptop (V)</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>30 kg</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>8%</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>99.5%</small></div>
                <div className='font-medium flex items-center justify-start'><small className='font-size'>Semi bold bright colour & medium bold size seeds with cutting material</small></div>
              </div>
              
              <div className="grid grid-cols-[1.5fr,1.4fr,repeat(2,1fr),2.7fr] grid-rows-[.1fr] gap-x-15 px-4 py-2">
                <div className='font-medium flex items-center'><small className='font-size'>Jeera VA (O)</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>25 kg</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>8%</small></div>
                <div className='font-medium flex items-center justify-center'><small className='font-size'>99.5%</small></div>
                <div className='font-medium flex items-center justify-start'><small className='font-size'>Extra bold bright colour & extra bold size seeds with cutting material</small></div>
              </div>
            </div>
            
            {/* Cancel Details Box */}
            <div className={`flex flex-col	gap-3 absolute top-0 transition-all ${activeSection === 'cancellation' ? 'translate-x' : 'translate-x-full'} ${activeSection === 'shipping' ? '-translate-x-full' : 'translate-x'}`}>
              <div className='flex text-sm gap-2 font-medium'>
                <small>1.</small>
                <small>Orders cannot be cancelled after confirmation and successful payment. Customers are not eligible for a refund.</small>
              </div>
              <div className='flex text-sm gap-2 font-medium'>
                <small>2.</small>
                <small>We always stand for quality. Please reach out to us directly at <span className='text-emerald-900 border-b border-emerald-900 border-solid'>sales@bharatrohan.in</span> in case of any quality issues. We will be glad to assist you and resolve the issue.</small>
              </div>
              <div className='flex text-sm gap-2 font-medium'>
                <small>3.</small>
                <small>For any cancellation-related queries, please write to us at <span className='text-emerald-900 border-b border-emerald-900 border-solid'>info@bharatrohan.in</span>.</small>
              </div>
            </div>

            {/* Shipping Details Box */}
            <div className={`flex flex-col	gap-3 absolute top-0 transition-all ${activeSection === 'shipping' ? 'translate-x' : 'translate-x-full'}`}>
              <div className='flex text-sm gap-2 font-medium'>
                <small>1.</small>
                <small>All orders are subject to availability and confirmation of order price. We inform our customers by SMS or e-mail on order confirmation.</small>
              </div>
              <div className='flex text-sm gap-2 font-medium'>
                <small>2.</small>
                <small>Orders are shipped in 7 business days after confirmation. The shipping address can not be altered after the order is shipped.</small>
              </div>
              <div className='flex text-sm gap-2 font-medium'>
                <small>3.</small>
                <small>For any shipping-related questions and queries, please contact us at <span className='text-emerald-900 border-b border-emerald-900 border-solid'>info@bharatrohan.in</span>.</small>
              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default PageProduct