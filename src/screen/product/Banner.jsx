import React from 'react'
import { promotionalInfo } from '../../assets/data/data'
import { BodyOne, Title } from '../../components/common/CustomComponent'

const Banner = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-between pt-20'>
      {promotionalInfo.map((info) => (
        <div className='box relative w-full overflow-hidden' key={info.id}>
          <div className='w-full h-[40vh]'>
            <img 
              src={info.image}
              className='w-full h-full object-cover'
              alt={info.title}
            />
          </div>
          <div className='absolute text-black top-0 left-0 p-3 md:p-8 w-full h-full flex flex-col justify-center items-start'>
            <span className='bg-white px-6 py-2 text-sm'>{info.title}</span>
            <Title level={2} className="my-5 text-black">{info.title}</Title>
            <BodyOne className="text-sm text-black">{info.description}</BodyOne>
            <button className='secondary-btn mt-3'>Shop Now</button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Banner





// import React from 'react'
// import { promotionalInfo } from '../../assets/data/data'
// import { BodyOne, Title } from '../../components/common/CustomComponent'


// const Banner = () => {
//   return (
//     <>
//       <section className='flex flex-col lg:flex-row items-center justify-between pt-20'>
//         {promotionalInfo.map((info)=>(
//           <>
//             <div className='box relative w-full' key={info.id}>
//               <div className='w-full h-[40vh]'>
//                 <img 
//                   src={info.image}
//                   className='w-full h-full object-cover'
//                   alt=''
//                 />
//               </div>

//               <div className='absolute top-0 left-0 p-3 md:p-8 lg:w-2/3'>
//                 <span className='bg-white px-6 py-2 text-sm'> {info.title} </span>
//                 <Title level={2} className="my-5"> {info.title} </Title>
//                 <BodyOne className="text-sm"> {info.description} </BodyOne>
//                 <button className='secondary-btn'> Shop Now </button>
//               </div>
//             </div>
//           </>
//         ))}
//       </section>
//     </>
//   )
// }

// export default Banner
