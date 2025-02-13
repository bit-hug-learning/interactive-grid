import * as React from "react"
import Grid from "../components/Grid"
import Header from "../components/Header"
import SEO from "../components/SEO"

const IndexPage = () => (
  <>
    <Header name="🚀 Explore" />
    <SEO />
    <main>
      <h1 className="text-8xl font-bold text-center mb-4 text-indigo-700 mb-4 animate__animated animate__fadeInUp">
        CSS Grid Layout
      </h1>
      <h2 className="text-6xl font-bold text-center mb-4text-coolGray-800 mb-12 animate__animated animate__fadeInUp">
        Interactive Guide
      </h2>
      <Grid />
    </main>
  </>
)

export default IndexPage
