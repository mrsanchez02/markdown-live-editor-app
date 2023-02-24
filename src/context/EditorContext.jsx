import { createContext } from "react"

const initialState = {
  markdownText: '',
  setMarkdownText: () => {}
}

export const EditorContext = createContext(initialState)
