import { useState, useRef, useEffect } from 'react'
import Todo from './Todo'

function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(true)

    return (
        <div>
            <button className="btn btn-primary" onClick={() => {
                console.log('Toggled')
                setShowTodo(!showTodo)
            }}>Toggle Todo</button>
            {showTodo && <Todo />}
        </div>
    )
}

export default UseRefExample3