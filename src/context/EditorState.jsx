import React, { useState } from 'react'
import { EditorContext } from './EditorContext'


const EditorState = ({children}) => {

  const [markdownText, setMarkdownText] = useState('')

  const handleChange = (e) => {
    setMarkdownText(e.target.value)
  }

  return (
    <EditorContext.Provider
      value={{markdownText, handleChange}}
    >
      {children}
    </EditorContext.Provider>
  )
}

export default EditorState