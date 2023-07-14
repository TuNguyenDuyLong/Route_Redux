import React from 'react'
import {
    useNavigate,
    useParams
} from 'react-router-dom'
function About() {
    const navigate = useNavigate()
    const { productID } = useParams

    return <div>This is my About: ------------
        ABOUT'S ID: {productID} <br /> <br />
        <button onClick={() => { navigate('/') }}> RETURN TO MY HOME</button>
    </div>
}
export default About