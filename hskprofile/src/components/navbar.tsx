'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.addEventListener('scroll', scrollHeader)
    }
  }, []);

  return (
    <div className={header ? "sticky fixed min-w-full top-0 z-50 start-0" : "absolute min-w-full top-0 z-50 start-0"}>
      <div className="navbar backdrop-filter backdrop-blur-lg backdrop-brightness-125 bg-opacity-90">
        <div className="btn btn-ghost text-xl">
          <Link href='/'>
            <Image
              src="/images/logo/hsk_logo.png"
              alt="HSK Logo"
              width={95}
              height={50}
            />
          </Link>
        </div>
        <div className="navbar">
        </div>
        {/* On Large */}
        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100">
              <li>
                <Link className="text-lg" href='/'>Home</Link>
              </li>
              <li>
                <details open>
                  <summary>
                    <Link className="text-lg" href='/about'>About</Link>
                  </summary>
                  <ul className="p-2">
                    <li><Link href="/about?branch=tangerang">HSK Tangerang</Link></li>
                    <li><Link href="/about?branch=jepara">HSK Jepara</Link></li>
                    <li><Link href="/about?branch=rembang">HSK Rembang</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <Link className="text-lg" href='/services'>Services</Link>
              </li>
              <li>
                <Link className="text-lg" href='/sustainability'>Sustainability</Link>
              </li>
              <li>
                <Link className="text-lg" href='/contact-us'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex-none hidden lg:flex font-semibold text-black">
            <ul className="menu menu-horizontal px-8">
              <li>
                <Link className="text-lg" href='/'>Home</Link>
              </li>
              <li>
                <details>
                  <summary>
                    <Link className="text-lg" href='/about'>About</Link>
                  </summary>
                  <ul className="p-2 rounded-t-none">
                    <li><Link href="/about?branch=tangerang">HSK Tangerang</Link></li>
                    <li><Link href="/about?branch=jepara">HSK Jepara</Link></li>
                    <li><Link href="/about?branch=rembang">HSK Rembang</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <Link className="text-lg" href='/services'>Services</Link>
              </li>
              <li>
                <Link className="text-lg" href='/sustainability'>Sustainability</Link>
              </li>
              <li>
                <Link className="text-lg" href='/contact-us'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar