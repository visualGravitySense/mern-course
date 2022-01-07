import React from 'react'
import PropTypes from 'prop-types'

function AddTodo(onCreate) {

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
        }
    }

    return (
        <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler} >
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type='submit'>Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo