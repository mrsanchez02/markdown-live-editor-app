import styled from 'styled-components'
import MarkedInput from './components/MarkedInput'
import './App.css'
import MarkedResult from './components/MarkedResult'
import EditorState from './context/EditorState'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  margin-bottom: 1em;
`

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

function App() {

  return (
    <EditorState>
      <AppContainer>
        <Title>Markdown Editor</Title>
        <EditorContainer>
          <MarkedInput />
          <MarkedResult />
        </EditorContainer>
      </AppContainer>
    </EditorState>
  )
}

export default App
