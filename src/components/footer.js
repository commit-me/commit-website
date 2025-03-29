import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="py-6">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 text-center">
      {/* Logo */}
      <Link to="/">
        <StaticImage
          src="../images/thumbnail-white.png"
          loading="eager"
          width={20}
          quality={95}
          formats={["auto", "webp"]}
          alt="commit-m Logo"
        />
      </Link>

      {/* Copyright */}
      <span>© {new Date().getFullYear()} commit-m, Inc.</span>

      {/* Links */}
      <a href="/terms-of-service" className="hover:underline hover:text-blue-600 transition">
        Terms
      </a>
      <a href="/privacy-policy" className="hover:underline hover:text-blue-600 transition">
        Privacy
      </a>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-blue-600 transition"
      >
        Instagram
      </a>
    </div>
  </footer>
)

export default Footer
