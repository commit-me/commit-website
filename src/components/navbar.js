import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-black border-b border-gray-700 shadow z-50">
      <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <StaticImage
              src="../images/logo.png"
              loading="eager"
              width={120}
              quality={95}
              formats={["auto", "webp"]}
              alt="commit-m Logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
