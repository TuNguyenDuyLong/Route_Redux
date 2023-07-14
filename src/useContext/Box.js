import { useState, createContext } from 'react';
import Context from "./context"
import {
    useNavigate,
    useParams
} from 'react-router-dom';
export const ThemeContext = createContext()
// Constext 
// Comp A => Comp B => Comp C
// 1. Create context
// 2. Provider (Nơi gửi)
// 3. Consumer (Nơi nhận)
function Box() {
    const navigate = useNavigate()

    const { contextID } = useParams

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (

        <ThemeContext.Provider value={theme}>
            PRODUCT'S ID: {contextID}
            <div style={{ padding: 20 }}>
                <button onClick={toggleTheme} >Toggle theme</button>
                <Context /> <br />
                <div>This is context: ------------
                    CONTEXT'S ID: {contextID} <br /> <br />
                    <button onClick={() => { navigate('/') }}> RETURN TO MY HOME</button>
                </div>

            </div>
        </ThemeContext.Provider>
    )
}
export default Box
