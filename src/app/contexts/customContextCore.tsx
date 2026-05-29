import React, { createContext, useContext } from 'react'

export interface CustomState {
  value: number
}
export type CustomAction = { type: 'SET_VALUE'; payload: number }
export interface CustomContextType {
  state: CustomState
  dispatch: React.Dispatch<CustomAction>
}

export const CustomContext = createContext<CustomContextType | null>(null)

export const useCustomContext = (): CustomContextType => {
  const context = useContext(CustomContext)
  if (!context) throw new Error('useCustomContext must be used within a CustomProvider')
  return context
}
