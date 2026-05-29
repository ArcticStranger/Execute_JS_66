import React, { useReducer } from 'react'
import { CustomContext, type CustomState, type CustomAction } from './customContextCore'

const customReducer = (state: CustomState, action: CustomAction): CustomState => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.payload }
    default:
      return state
  }
}

interface CustomProviderProps {
  children: React.ReactNode
  initialValue?: number
}

const CustomProvider: React.FC<CustomProviderProps> = ({ children, initialValue = 0 }) => {
  const [state, dispatch] = useReducer(customReducer, { value: initialValue })
  return <CustomContext.Provider value={{ state, dispatch }}>{children}</CustomContext.Provider>
}

export { CustomProvider }
