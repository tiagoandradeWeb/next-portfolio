import { Fragment } from "react"
import About from "../components/UI/About"
import Contact from "../components/UI/Contact"
import Hero from "../components/UI/Hero"
import Portfolio from "../components/UI/Portfolio"
import Services from "../components/UI/Services"
import Testimonial from "../components/UI/Testimonial"
import Head from "next/head"

export default function Home () {
  return (
    <Fragment>
      <Head>
            <title>Portfolio NextJS</title>
      </Head>
      <Hero/>
      <Services/>
      <About/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
    </Fragment>
  )
}
