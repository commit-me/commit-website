import React from "react"
import { Link } from "gatsby"

const Hero = ({ title, subtitle }) => (
  <section className="py-10 lg:py-48">
    <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
      <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-2xl">
        {title}
      </h1>
      <p className="max-w-2xl text-white text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
        {subtitle}
      </p>
      <Link
        to="/"
        className="bg-purple-700 text-white px-8 py-3 rounded-3xl shadow-lg hover:bg-purple-800 transition duration-300"
      >
        Download Now
      </Link>
    </div>
  </section>
)

export default Hero
