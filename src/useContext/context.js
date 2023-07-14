import { useContext } from 'react';
import { ThemeContext } from './Box';
import './app.css';
function Context() {
    const theme = useContext(ThemeContext)
    return (
        <p className={theme}>
            CHECK DARK OR LIGHT
        </p>
    )
}
export default Context