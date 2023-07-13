import React from 'react'
import {
    useNavigate,
    useParams
} from 'react-router-dom'
function Products() {
    const navigate = useNavigate()
    const { productID } = useParams
    return <div>This is my Products: ----------
        PRODUCT'S ID: {productID}
        <button onClick={() => { navigate('/') }}> RETURN TO MY HOME</button>
    </div>
}
export default Products