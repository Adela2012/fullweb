import React, {useContext} from 'react'
import { themeContext, userContext } from './Context'


export default function useContextPage() {
    const theme = useContext(themeContext)
    const user = useContext(userContext)
    console.log('useContextPage')
    return (
        <div>
            <div>{theme.themeColor}</div>
            <div>{user.userName}</div>
        </div>
    )
}
