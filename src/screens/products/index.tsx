import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react'
import "./product.css"
import CuminBanner from './CuminBanner';

const PageProduct = () => {

  const box = useRef<any>()
  const image = useRef<any>()
  const [activeSection, setActiveSection] = useState<string>('variant');
  const [translateClass, setTranslateClass] = useState<string>('');

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };


  // useEffect(()=>{
  //   if(window.innerWidth > 1024 ){
  //     gsap.registerPlugin(ScrollTrigger);
  //     // const selector = gsap.utils.selector(image)
  //     // const ctx = gsap.context(() => {
  //     //   const tl = gsap.timeline({
  //     //     scrollTrigger: {
  //     //       trigger: image.current,
  //     //       // scrub: 1,
  //     //       start: 'top top',
  //     //       end: "bottom -105vmax",
  //     //       pin: true,
  //     //       pinSpacing: false,
  //     //       // markers: true,
  //     //     },
          
          
  //     //   })

        
  //     // })

  //     // return () => ctx.revert()

  //     // gsap.to("#content",{
  //     //   scrollTrigger:{
  //     //     trigger: "#content",
  //     //     pin: true,
  //     //     start: "top top",
  //     //     end: "bottom top",
  //     //     markers: true
  //     //   },
  //     // })

  //   }    

    
  // })

  return (
    <>
      <CuminBanner/>
      
      <div ref={box} className={`flex relative min-h-screen md:h-full max-md:flex-col max-lg:flex-col`}>
        <div ref={image} className='sticky top-0 h-screen bg-black w-2/5 max-md:w-full max-sm:h-[25rem] max-lg:static max-lg:w-full max-lg:h-[40rem]'>
          <img className='h-full w-full object-cover max-lg:object-center max-sm:object-center' src="/frame.jpg" alt="Cumin image" />
        </div>
        <div className='w-3/5 pl-7 pr-16 max-md:w-full max-sm:pl-5 max-sm:pr-7 max-lg:w-full max-lg:pl-16'>
          <div className='blade-top-margin'>
            <h4 className='font-bold text-4xl text-emerald-900 max-sm:text-2xl max-md:text-3xl'>Cumin (Whole)</h4>
            <div className='w-full font-normal text-xl mt-4 max-md:w-full max-sm:text-sm max-md:text-lg max-lg:w-full'>Sourced from our partner farms from the Marwar region (Rajasthan, India), we bring you residue-free pungent-flavoured cumin seeds of different sizes and colours that are second to none. From tacos to curries, from soups to savouries, our range of cumin seeds adheres to global quality and food safety mandates.</div>
          </div>
          <div className='w-full h-px bg-gray-300 mt-5 mb-5 max-md:mb-3 max-lg:mb-7 max-lg:mt-7'></div>
          <div>
            <h5 className='text-emerald-900 text-2xl font-medium max-sm:text-xl'>Origin</h5>
            <div className='flex items-center gap-14 mt-2 max-sm:flex-wrap max-sm:gap-3 max-sm:justify-between max-sm:mt-4'>
              <p className='font-medium text-xl max-sm:flex max-sm:text-sm max-md:text-lg'><span className='opacity-70'>Country:</span> India</p>
              <p className='font-medium text-xl max-sm:flex max-sm:text-sm max-md:text-lg'><span className='opacity-70'>State:</span> Rajasthan</p>
              <p className='font-medium text-xl max-sm:flex max-sm:text-sm max-md:text-lg'><span className='opacity-70'>Region:</span> Pali</p>
            </div>
          </div>
          <div className='w-full h-px bg-gray-300 mt-5 mb-5 max-lg:mb-7 max-lg:mt-7'></div>

          <button className='text-xs text-white py-2.5 px-10 rounded-3xl outline-none bg-emerald-900 max-lg:text-xl hover:bg-emerald-700 transition duration-300 ease-in-out'>Buy now</button>
          
          <div id='content'>
            <div className='bg-white w-full' >
              <div className='flex items-start justify-between blade-top-margin text-center'>
                <h6 onClick={() => handleSectionClick('variant')} className={`text-xl font-medium cursor-pointer transition-opacity duration-400 max-sm:text-center max-sm:text-sm max-md:text-center max-md:text-lg max-lg:text-center max-lg:text-2xl ${activeSection === 'variant' ? 'opacity-100' : 'opacity-50'}`}>VARIENT DETAILS</h6>
                <h6 onClick={() => handleSectionClick('cancellation')} className={`text-xl font-medium cursor-pointer transition-opacity duration-400 max-sm:text-center max-sm:text-sm max-md:text-center max-md:text-lg max-lg:text-center max-lg:text-2xl ${activeSection === 'cancellation' ? 'opacity-100' : 'opacity-50'}`}>CANCELLATION & REFUND</h6>
                <h6 onClick={() => handleSectionClick('shipping')} className={`text-xl font-medium cursor-pointer transition-opacity duration-400 max-sm:text-center max-sm:text-sm max-md:text-center max-md:text-lg max-lg:text-center max-lg:text-2xl ${activeSection === 'shipping' ? 'opacity-100' : 'opacity-50'}`}>SHIPPING POLICY</h6>
              </div>
              <div className='w-full h-px bg-gray-300 mt-2 mb-5 flex items-center justify-between'>
                <div className={`h-full w-40 bg-black transition-opacity duration-400 ${activeSection === 'variant' ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`h-full w-64 bg-black transition-opacity duration-400 ${activeSection === 'cancellation' ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`h-full w-44 bg-black transition-opacity duration-400 ${activeSection === 'shipping' ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>
  
            <div className='overflow-hidden relative'>
  
              {/* Varient Details Box */}
              <div className={`transition-all blade-bottom-margin ${activeSection === 'variant' ? 'translate-x' : '-translate-x-full'}`}>
                <div className="grid grid-cols-6 grid-rows-1 bg-gray-100 px-4 py-2 max-sm:px-2">
                  <div className='text-lg font-medium flex items-center max-sm:items-start max-sm:text-sm max-lg:text-xl'><small>Varient</small></div>
                  <div className='text-lg font-medium opacity-40 flex items-center justify-center max-md:items-start max-md:text-center max-md:text-sm max-lg:text-xl'><small>Package size</small></div>
                  <div className='text-lg font-medium opacity-40 flex items-center justify-center max-md:items-start max-md:text-sm max-lg:text-xl'><small>Moisture</small></div>
                  <div className='text-lg font-medium opacity-40 flex items-center justify-center max-md:items-start max-md:text-sm max-lg:text-xl'><small>Purity</small></div>
                  <div className='text-lg col-span-2 font-medium opacity-40 flex items-center justify-start max-md:items-start max-md:text-sm max-lg:text-xl'><small>Description</small></div>
                </div>
    
                <div className="grid grid-cols-6 grid-rows-1 px-4 py-2 max-sm:py-1.5">
                  <div className='text-base font-normal flex items-center max-sm:text-sm max-lg:text-xl'><small>Jeera Dolphin (R)</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>30 kg</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>8%</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>99%</small></div>
                  <div className='text-base col-span-2 font-normal flex items-center justify-start max-sm:text-sm max-lg:text-xl'><small>Regular colour & medium size seeds with cutting material, below 6% much,</small></div>
                </div>
    
                <div className="grid grid-cols-6 grid-rows-1 px-4 py-2 bg-fuchsia-50 max-sm:py-1.5">
                  <div className='text-base font-normal flex items-center max-sm:text-sm max-lg:text-xl'><small>Jeera Dolphin (R) Sortex</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>30 kg</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>8%</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>99.75%</small></div>
                  <div className='text-base col-span-2 font-normal flex items-center justify-start max-sm:text-sm max-lg:text-xl'><small>Machine clean packing quality good colour & medium size seeds with cutting material</small></div>
                </div>
    
                <div className="grid grid-cols-6 grid-rows-1 px-4 py-2 max-sm:py-1.5">
                  <div className='text-base font-normal flex items-center max-sm:text-sm max-lg:text-xl'><small>Jeera Gold (G) Sortex</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>30 kg</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>8%</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>99.5%</small></div>
                  <div className='text-base col-span-2 font-normal flex items-center justify-start max-sm:text-sm max-lg:text-xl'><small>Bold bright colour & bold size seeds with cutting material, below 6% much. 0.50% max.impurity</small></div>
                </div>
                
                <div className="grid grid-cols-6 grid-rows-1 px-4 py-2 bg-fuchsia-50 max-sm:py-1.5">
                  <div className='text-base font-normal flex items-center max-sm:text-sm max-lg:text-xl'><small>Jeera Heritage (F)</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>25 kg</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>8%</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>99.5%</small></div>
                  <div className='text-base col-span-2 font-normal flex items-center justify-start max-sm:text-sm max-lg:text-xl'><small>Machine clean packing quality good colour & medium size seeds</small></div>
                </div>
                
                <div className="grid grid-cols-6 grid-rows-1 px-4 py-2 max-sm:py-1.5">
                  <div className='text-base font-normal flex items-center max-sm:text-sm max-lg:text-xl'><small>Jeera JP Silver (P)</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>30 kg</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>8%</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>99.5%</small></div>
                  <div className='text-base col-span-2 font-normal flex items-center justify-start max-sm:text-sm max-lg:text-xl'><small>Premium packing bright colour & medium size seeds with cutting material</small></div>
                </div>
                
                <div className="grid grid-cols-6 grid-rows-1 px-4 py-2 bg-fuchsia-50 max-sm:py-1.5">
                  <div className='text-base font-normal flex items-center max-sm:text-sm max-lg:text-xl'><small>Jeera Sunflower (S)</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>30 kg</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>10%</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>99%</small></div>
                  <div className='text-base col-span-2 font-normal flex items-center justify-start max-sm:text-sm max-lg:text-xl'><small>Average colour & size seeds 1% max.impurity</small></div>
                </div>
                
                <div className="grid grid-cols-6 grid-rows-1 px-4 py-2 max-sm:py-1.5">
                  <div className='text-base font-normal flex items-center max-sm:text-sm max-lg:text-xl'><small>Jeera Taj</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>30 kg</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>10%</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>98%</small></div>
                  <div className='text-base col-span-2 font-normal flex items-center justify-start max-sm:text-sm max-lg:text-xl'><small>Average colour & size seeds lowest machine clean quality</small></div>
                </div>
                
                <div className="grid grid-cols-6 grid-rows-1 px-4 py-2 bg-fuchsia-50 max-sm:py-1.5">
                  <div className='text-base font-normal flex items-center max-sm:text-sm max-lg:text-xl'><small>Jeera Tiptop (V)</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>30 kg</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>8%</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>99.5%</small></div>
                  <div className='text-base col-span-2 font-normal flex items-center justify-start max-sm:text-sm max-lg:text-xl'><small>Semi bold bright colour & medium bold size seeds with cutting material</small></div>
                </div>
                
                <div className="grid grid-cols-6 grid-rows-1 px-4 py-2 max-sm:py-1.5">
                  <div className='text-base font-normal flex items-center max-sm:text-sm max-lg:text-xl'><small>Jeera VA (O)</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>25 kg</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>8%</small></div>
                  <div className='text-base font-normal flex items-center justify-center max-sm:text-sm max-lg:text-xl'><small>99.5%</small></div>
                  <div className='text-base col-span-2 font-normal flex items-center justify-start max-sm:text-sm max-lg:text-xl'><small>Extra bold bright colour & extra bold size seeds with cutting material</small></div>
                </div>
              </div>
              
              {/* Cancel Details Box */}
              <div className={`flex flex-col gap-3 absolute top-0 transition-all ${activeSection === 'cancellation' ? 'translate-x' : 'translate-x-[200%]'}`}>
                <div className='flex text-lg gap-2 font-medium max-lg:text-2xl max-sm:text-xl'>
                  <small>1.</small>
                  <small>Orders cannot be cancelled after confirmation and successful payment. Customers are not eligible for a refund.</small>
                </div>
                <div className='flex text-lg gap-2 font-medium max-lg:text-2xl max-sm:text-xl'>
                  <small>2.</small>
                  <small>We always stand for quality. Please reach out to us directly at <a href='mailto:sales@bharatrohan.in' className='text-emerald-900 border-b border-emerald-900 border-solid'>sales@bharatrohan.in</a> in case of any quality issues. We will be glad to assist you and resolve the issue.</small>
                </div>
                <div className='flex text-lg gap-2 font-medium max-lg:text-2xl max-sm:text-xl'>
                  <small>3.</small>
                  <small>For any cancellation-related queries, please write to us at <a href='mailto:info@bharatrohan.in' className='text-emerald-900 border-b border-emerald-900 border-solid'>info@bharatrohan.in</a>.</small>
                </div>
              </div>
  
              {/* Shipping Details Box */}
              <div className={`flex flex-col	gap-3 absolute top-0 transition-all ${activeSection === 'shipping' ? 'translate-x' : 'translate-x-[200%]'}`}>
                <div className='flex text-lg gap-2 font-medium max-lg:text-2xl max-sm:text-xl'>
                  <small>1.</small>
                  <small>All orders are subject to availability and confirmation of order price. We inform our customers by SMS or e-mail on order confirmation.</small>
                </div>
                <div className='flex text-lg gap-2 font-medium max-lg:text-2xl max-sm:text-xl'>
                  <small>2.</small>
                  <small>Orders are shipped in 7 business days after confirmation. The shipping address can not be altered after the order is shipped.</small>
                </div>
                <div className='flex text-lg gap-2 font-medium max-lg:text-2xl max-sm:text-xl'>
                  <small>3.</small>
                  <small>For any shipping-related questions and queries, please contact us at <a href='mailto:info@bharatrohan.in' className='text-emerald-900 border-b border-emerald-900 border-solid'>info@bharatrohan.in</a>.</small>
                </div>
              </div>
  
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default PageProduct