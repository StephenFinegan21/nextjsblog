   
import { useContext } from "react"
import { DarkContext } from "../context/DarkContext"


export const useTheme = () => {
  const context = useContext(DarkContext)
   

  if (context === undefined) {
    throw new Error("useTheme() must be used inside DarkProvider")
  }
  return context
}