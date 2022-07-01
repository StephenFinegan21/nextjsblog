import { createContext, useReducer } from 'react'


export const DarkContext = createContext()



const themeReducer = (state, action) => {
  if(action.type === 'CHANGE_MODE') {
      return { ...state, mode: action.payload }
  }
   else  return state
}

export function DarkProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    mode: 'light'
  })

 
  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode })
  }

  return (
    <DarkContext.Provider value={{...state, changeMode}}>
      {children}
    </DarkContext.Provider>
  )
}