import { createContext, useReducer } from 'react'

export const BirdContext = createContext()

export const birdsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BIRDS': 
            return {
                birds: action.payload
            }
        case 'CREATE_BIRD':
            return {
                birds: [action.payload, ...state.birds]
            }
        case 'DELETE_BIRD':
            return {
                birds: state.birds.filter((b) => b._id !== action.payload._id)
            }
        case 'UPDATE_BIRD':
            return {
                birds: state.birds.map((b) => 
                    b._id === action.payload._id ? action.payload : b
                    )
                };
        default: 
            return state
    }
}

export const BirdContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(birdsReducer, {
        birds: []
    })

    return(
        <BirdContext.Provider value={{...state, dispatch}}>
            { children }
        </BirdContext.Provider>
    )
}