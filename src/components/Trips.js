import React from "react"
import styled from "styled-components"

export const Trips = () => {
  return (
    <div>
      <ProductsContainer>
        <ProductsHeading>Heading</ProductsHeading>
        <ProductWrapper>Wrapper</ProductWrapper>
      </ProductsContainer>
    </div>
  )
}

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: red;
  color:#fff;
`

const ProductsHeading = styled.div``

const ProductWrapper = styled.div``