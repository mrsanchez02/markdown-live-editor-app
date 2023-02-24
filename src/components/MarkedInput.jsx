import React, { useContext } from 'react'
import styled from 'styled-components'
import { EditorContext } from '../context/EditorContext'

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1px solid rgba(15, 15, 15, 0.4);
  font-family: 'Lato', sans-serif;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`

const MarkedInput = () => {

  const {handleChange} = useContext(EditorContext)

  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea onChange={handleChange} autoFocus/>
    </Container>
  )
}

export default MarkedInput
