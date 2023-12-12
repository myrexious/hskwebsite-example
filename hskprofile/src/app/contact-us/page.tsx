import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div className="hero h-[16rem] " style={{ backgroundImage: 'url(/images/stock/office.jpg)' }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content pt-20">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
      </div>




      <div className='flex flex-row-reverse text-justify justify-center bg-auto mt-16'>
        <div className='max-w-5xl px-5'>
          <div className='flex flex-row-reverse flex-wrap lg:flex-nowrap space-y-5 lg:space-y-0 justify-center'>
            <div className='flex flex-col sm:md:items-center justify-start leading-relaxed w-[20rem] md:w-[42rem] lg:w-screen lg:ml-5'>
              <div className='bg-white w-full border-solid  border-gray-400 shadow-lg p-10'>
                <h2 className='text-2xl font-black'>Ask Us Anything</h2>
                <form className="mt-5">
                  <div className="relative z-0 w-full mb-3 group">
                    <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                    <input type='text' id="fullname" className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe"></input>
                  </div>
                  <div className="relative z-0 w-full mb-3 group">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type='text' id="email" className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="example@gmail.com"></input>
                  </div>
                  <div className="relative z-0 w-full mb-3 group">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                    <input type='text' id="subject" className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></input>
                  </div>
                  <div className="relative z-0 w-full mb-3 group">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                  </div>
                  <button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>
              </div>
            </div>
            <div className='flex flex-row flex-wrap lg:flex-col lg:flex-nowrap sm:md:items-center justify-center lg:space-y-5 space-x-0 md:space-x-5 leading-relaxed'>
              <div className='bg-white h-[16rem] w-[20rem] lg:w-[24rem] lg:h-auto border-solid border-gray-400 shadow-lg p-10 my-2.5 lg:my-0'>
                <h2 className='text-2xl font-semibold'>HSK Tangerang</h2>
                <p className='text-sm mt-2'>Jl. Millennium Raya 3B, Blok H1</p>
                <p className='text-sm'>Desa Peusar, Panongan, Tangerang</p>
                <p className='text-sm'> Banten, Indonesia 15710</p>
                <p className='text-sm mt-2'><span className='font-semibold'>Phone:</span> +62 21-2915-9080</p>
                <p className='text-sm'><span className='font-semibold'>Email:</span> support@hsk.co.id</p>
              </div>
              <div className='bg-white h-[16rem] w-[20rem] lg:w-[24rem] border-solid  border-gray-400 shadow-lg p-10 my-2.5 lg:my-0'>
                <h2 className='text-2xl font-semibold'>HSK Jepara</h2>
                <p className='text-sm mt-2'>Jl. Raya Mayong Pancur KM, I</p>
                <p className='text-sm'>Desa Singorojo, Mayong, Jepara</p>
                <p className='text-sm'>RT 05 / RW 03</p>
                <p className='text-sm'>Jawa Tengah, Indonesia</p>
                <p className='text-sm mt-2'><span className='font-semibold'>Phone:</span> +62 21-5010-4536</p>
                <p className='text-sm'><span className='font-semibold'>Email:</span> support.jp@hsk.co.id</p>
              </div>
              <div className='bg-white h-[16rem] w-[20rem] lg:w-[24rem] border-solid  border-gray-400 shadow-lg p-10 my-2.5 lg:my-0'>
                <h2 className='text-2xl font-semibold'>HSK Rembang</h2>
                <p className='text-sm mt-2'>Jl. Raya Rembang Pamotan KM. 13</p>
                <p className='text-sm'>Desa Japeledok, Pancur, Rembang</p>
                <p className='text-sm'>RT 05 / RW 01</p>
                <p className='text-sm'>Jawa Tengah, Indonesia</p>
                <p className='text-sm mt-2'><span className='font-semibold'>Email:</span> support.rb@hsk.co.id</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row text-justify justify-center bg-auto py-12'>
        <div className='max-w-7xl lg:px-5 text-center'>

          <div className='flex flex-row items-center justify-center leading-relaxed space-x-3'>
            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            <h2 className="text-3xl font-semibold">Facility Locations</h2>
            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
          </div>
          <div className='flex flex-row flex-wrap justify-center mt-8'>
            <div className='flex flex-col items-center justify-center leading-relaxed my-5'>
              <div className='bg-white shadow-xl p-4 items-center justify-center text-center'>
                <div className='relative aspect-square h-[18rem] md:h-[28rem]'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0693650231815!2d106.498042!3d-6.254591999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42071a15674879%3A0x4f0b79349c0fc3d7!2sPT.%20Handal%20Sukses%20Karya!5e0!3m2!1sen!2sid!4v1702406971851!5m2!1sen!2sid" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
                </div>
                <h2 className='text-xl font-semibold mt-3'>HSK Tangerang</h2>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center leading-relaxed my-5 lg:mx-10'>
              <div className='bg-white shadow-xl p-4 items-center justify-center text-center'>
                <div className='relative aspect-square h-[18rem] md:h-[28rem]'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2235760331237!2d110.7595273!3d-6.742560999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70ddb3542e1373%3A0x7be19eb24edf0da2!2sPT%20Handal%20Sukses%20Karya!5e0!3m2!1sen!2sid!4v1702407700193!5m2!1sen!2sid" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
                </div>
                <h2 className='text-lg md:text-xl font-semibold mt-3'>HSK Jepara</h2>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center leading-relaxed my-5'>
              <div className='bg-white shadow-xl p-4 items-center justify-center text-center'>
                <div className='relative aspect-square h-[18rem] md:h-[28rem]'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.63942922142465!2d111.4431926!3d-6.7416691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7723aa0b81b9b5%3A0x3cbbb97778e2bbbd!2sPT%20HANDAL%20SUKSES%20KARYA%20(HSK)!5e0!3m2!1sen!2sid!4v1702407903224!5m2!1sen!2sid" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
                </div>
                <h2 className='text-xl font-semibold mt-3'>HSK Rembang</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs