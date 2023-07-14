import { useReducer, useRef } from "react"
import {
    useNavigate,
    useParams
} from 'react-router-dom'
// use Reducer
// 1: Init state
const initState = {
    job: '',
    jobs: []
}

// 2: Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// 3: Reducer
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newJob = [...state.jobs]
            newJob.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJob
            }
            break
        default:
            throw new Error('Invalid action.')
    }
    return newState
}
// 4: Dispath

function Red() {
    const navigate = useNavigate()
    const { reducerID } = useParams


    ////////////////////////////////////
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    return (
        <div style={{ padding: '0 20px' }}>
            <h3>TODO</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter todo...'
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }} />

            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        &nbsp; &nbsp; <span>
                            <button onClick={() => dispatch(deleteJob(index))}>X</button>
                        </span>
                    </li>
                ))}
            </ul>

            <div>This is useReducer: ------------
                REDUCER'S ID: {reducerID} <br /> <br />
                <button onClick={() => { navigate('/') }}> RETURN TO MY HOME</button>
            </div>
        </div>
    )
}
export default Red