import React from 'react';
import heroImg01 from "../assets/images/hero-img1.jpg";
import heroImg02 from "../assets/images/hero-img2.jpg";
import heroImg03 from "../assets/images/hero-img3.jpg";
import icon01 from "../assets/images/icon1.png";
import icon02 from "../assets/images/icon2.png";
import icon03 from "../assets/images/icon3.png";
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';

const Home = () => {
  return <>
   {/* ========= hero section ========== */}

   <section className="hero_section pt-[60px] 2xl:h-[800px]">
    <div className="container">
      <div className ="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

        {/* ========= hero content ============*/}
        <div>
          <div className="lg:w-[570px]">

            <h1 className ="text-[36px] leading-[46px] text-headingColor font-[800] first-letter:md:text-ellipsis-[60px] first-letter:md:leading-[70px]">Your One-Stop Solution for Home Services, Anytime!
            </h1>
            <p className="text_para">FixUp is a service appointment booking platform that allows users to book various household services like electrician, carpenter, driver, and more.</p>

               <button className = "btn">Request an Appointment</button>
          </div>

          {/* ========== hero counter =========== */}
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
          lg:gap-[30px]">
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                20+
              </h2>
              <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]">
              </span>
              <p className="text_para">Years of Experience</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                10+
              </h2>
              <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]">
              </span>
              <p className="text_para">Types of Professionals</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                100%
              </h2>
              <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]">
              </span>
              <p className="text_para">Client Satisfaction</p>
            </div>

          </div>
        </div>
        {/* ========= hero content =============*/}

        <div className="flex gap-[30px] justify-end">
          <div>
            <img className="w-full h-[650px] rounded-[20px]" src={heroImg01} alt="" />
          </div>
          <div className="mt-[30px]">
            <img src={heroImg02} alt="" className="w-[350px] h-[280px] mb-[30px] rounded-[20px]" />
            <img src={heroImg03} alt="" className="w-[350px] h-[280px] rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
   </section>
   { /* ============= hero section end ============ */}

   <section>
    <div className= "container">
      <div className="lg:w-[470px] mx-auto">
        <h2 className='heading text-center'>
          Providing the best home care services
        </h2>
        <p className="text_para text-center">
          Fantastic services for everyone.Our house care system offers unmtached,
          expert services.
        </p>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon01} alt="" className=' w-[400px] h-[250px]'/>
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Professional
                </h2>
                <p className="text-[16px] leading-7 text-textColorr font-[400] mt-4 text-center">
                  World class care for everyone. Our home care services offers unmatched , expert home services.
                </p>

                <Link to='/professionals' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className ="group-hover:text-white w-6 h-5"/>
                </Link>
            </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon02} alt="" className='w-[400px] h-[250px]' />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColorr font-[400] mt-4 text-center">
                  World class care for everyone. Our home care services offers unmatched , expert home services.
                </p>

                <Link to='/professionals' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className ="group-hover:text-white w-6 h-5"/>
                </Link>
            </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon03} alt="" className='w-[400px] h-[250px]' />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Book An Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColorr font-[400] mt-4 text-center">
                  World class care for everyone. Our home care services offers unmatched , expert home services.
                </p>

                <Link to='/professionals' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className ="group-hover:text-white w-6 h-5"/>
                </Link>
            </div>
        </div>
       </div>
      
    </div>
   </section>
   </>
}

export default Home