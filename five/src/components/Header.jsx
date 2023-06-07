import React from 'react'

export default function Header() {
  return (
    <nav>
        <NavContent />
    </nav>
  )
}


const NavContent = () => (
    <>
        <h2>Fahim</h2>
        <div>
            <a href='#home' >Home</a>
            <a href='#work'> Work</a>
            <a href='#timeline'>Experience</a>
            <a href='#services'>Services</a>
            <a href='#testimonials'>Testimonials</a>
            <a href='#contact'>Contact</a>
        </div>

        <a href="mailto:mdfahim1194@gmail.com">
            <button>Email</button>
        </a>
    </>
)
