import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

const Content = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.whiteSmoke}
`
// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Content>404 Page Not Found...</Content>
    </Layout>
  )
}

export default NotFoundPage
