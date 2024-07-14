import { BirdContext } from "../context/BirdContext";
import { useContext} from 'react'

export const useBirdsContext = () => {
    const context = useContext(BirdContext)

    if (!context) {
        throw Error('useBirdsContext must be used inside a useBirdsContextProvider.')
    }
 
    return context
}