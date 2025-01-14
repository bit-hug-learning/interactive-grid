import React from "react"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => (
  <>
    <Layout {...props}>{element}</Layout>
  </>
)

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div key="animations" id="animation-portal" style={{ zIndex: 100 }} />,
    <script lang="javascript" src="/prism.js" />,
  ])
}
