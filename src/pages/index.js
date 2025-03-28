import React from "react"
import Layout from "@components/layout"
import Seo from "@components/seo"

import Hero from "@components/hero"

const IndexPage = () => (
  <Layout>
    <Seo
      title="commit-m"
      description="commit-m is the dating app that brings your inner circle into the matching process—so you can feel confident every time you commit."
    />
    <main className="flex-grow">
      <Hero
        title={"Make every match a team effort."}
        subtitle={
          "commit-m is the dating app that brings your inner circle into the matching process—so you can feel confident every time you commit."
        }
      />
    </main>
  </Layout>
)

export default IndexPage
