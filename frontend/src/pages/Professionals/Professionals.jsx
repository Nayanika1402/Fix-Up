import React from 'react';
import ProfessionalCard from "./../../components/Professional/ProfessionalCard";
import { professional } from "./../../assets/data/professional";
import Testimonial from '../../components/Testimonial/Testimonial';

const Professionals = () => {
  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className='container text-center'>
        <h2 className='heading'>Find a Professional</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
          <input
          type='search'
          className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
          placeholder='Search Professional'
          />
          <button className='btn mt-0 rounded-[0px] rounded-r-md'>
            Search
          </button>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {professional.map(professional => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Professionals;