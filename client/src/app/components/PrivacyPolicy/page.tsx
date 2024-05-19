import React from 'react';

const page = () => {
  return (
    <div className="w-full">
         <div className=' bg-gray-200  mt-3 text-slate-700'>
                      <div className='flex w-8/12  mx-auto justify-between '>
                         <div className='font-bold text-lg '>Terms & Condition</div>
                         <div className='font-bold text-lg'>Home/Terms & Condition</div>
                      </div>
         </div>
    <div className=' w-8/12 justify-between mt-20 flex items-start   mx-auto '>
        <div className='w-[60%] '>
            <div>
                <h2 className=' mt-8 text-2xl font-semibold text-slate-800'>01. Terms & Conditions</h2>
                <p className=' text-slate-600 mt-3 text-lg'>
                        This platform facilitates student collaboration for academic assistance. Users agree to share accurate information responsibly. Content must align with educational objectives and adhere to intellectual property laws. We reserve the right to moderate content and terminate accounts violating these terms. By accessing this site, users accept these conditions and our privacy policy.
                </p>
                <div className=' text-slate-600 mt-3 text-lg flex flex-col gap-2'>
                    <ul ><span className='text-slate-900 text-xl'>Purpose:</span> This platform fosters student collaboration for academic support, facilitating the exchange of knowledge and assistance.</ul>
                    <ul><span className='text-slate-900 text-xl'>Responsibility:</span> Users commit to sharing accurate and ethical content, ensuring the reliability and integrity of information exchanged.</ul>
                    <ul> <span className='text-slate-900 text-xl'>Guidelines:</span>  Content must align with educational objectives, respect intellectual property, and maintain a conducive learning environment.</ul>
                    <ul> <span className='text-slate-900 text-xl'>Enforcement:</span> We reserve the right to moderate and terminate accounts violating these terms to uphold community standards and ensure a positive user experience.</ul>
                </div>
            </div>     
            <div>
            <p className='mt-8 text-2xl font-semibold text-slate-800'>
                02. Eligibility and Use**
                </p>
                <p  className=' text-slate-600 mt-3 text-lg  gap-2'>
                    This platform is exclusively for students. Users must be at least 15 years old to access the Service. By utilizing the Service, you agree to abide by these Terms and Conditions and our Privacy Policy, accessible at [Link to Your Privacy Policy]. Your continued use of the platform implies acceptance of these conditions and policies.
                </p>

            </div>
      
            <div>
                    <p className='mt-8 text-2xl font-semibold text-slate-800'>
                        03. Security and Limitation of Liability**
                    </p>
                    <p className=' text-slate-600 mt-3 text-lg  gap-2'>
                        While we implement reasonable measures to safeguard your information, no website is entirely immune to security breaches. The Service is provided "as is," and we cannot ensure its uninterrupted operation or the accuracy of results. We disclaim liability for any damages arising from your use of the Service. By utilizing the Service, you acknowledge these inherent risks and absolve us of any responsibility for consequential damages.
                    </p>
            </div>
            <div>
                <p className='mt-8 text-2xl font-semibold text-slate-800'>
                    04. Termination
                </p>
                <p className=' text-slate-600 mt-3 text-lg  gap-2 mb-10'>
                    We reserve the right to terminate your access to the Service for any reason, including but not limited to violation of these Terms and Conditions. This includes engaging in or promoting activities such as child nudity, sexual exploitation, harassment, or any form of discrimination, including but not limited to women molestation. Upon termination, you will no longer have access to the platform, and any content associated with your account may be removed. Termination of access does not relieve you of any obligations incurred prior to termination.
                </p>
            </div>
        </div>
        
        {/* table of content*/}
        <div className=''>
            <div className='flex flex-col gap-1 border-l-[3px] border-slate-200 pl-4'>
                  <div className=' text-xl text-slate-600 uppercase'>Table Of Content</div>
                  <div className=' text-lg text-slate-700 font-semibold '>01. Terms & Condition</div>
                  <div className=' text-lg text-slate-700 font-semibold'>02. Eligibility & Use</div>
                  <div className=' text-lg text-slate-700 font-semibold'>03. Security and Limitation of Liability</div>
                  <div className=' text-lg text-slate-700 font-semibold'>04. Termination</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
