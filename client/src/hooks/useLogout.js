import { useAuthContext } from "./useAuthContext"
import { useBirdsContext } from "./useBirdsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: birdsDispatch } = useBirdsContext()

    const logout = () => {

        // remove the user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        birdsDispatch({type: 'SET_BIRDS', payload: null})
    }

    return {logout}
}
