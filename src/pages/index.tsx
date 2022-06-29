import * as React from "react"
import styled from '@emotion/styled'

let SomeComp = styled.div({
  color: 'hotpink',
  width: '100%',
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

let AnotherComp = styled.div`
  color: ${props => props.color};
  font-size: 25px;
  font-weight: 800;
  margin-top: 30px;
`

// markup
const IndexPage = () => {
  return (
    <main>
      <SomeComp>
        <AnotherComp>Hello World!!</AnotherComp>
      </SomeComp>
    </main>
  )
}

export default IndexPage
