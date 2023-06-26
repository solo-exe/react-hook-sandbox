import { useCallback, useState, memo } from 'react'

function UseCallbackExample() {
    const [tasks, setTasks] = useState([])

    const addTask = useCallback(() => {
        setTasks((prev) => {
            return [...prev, 'Some Task']
        })
    }, [setTasks])

    return (
        <div>
            <Button addTask={addTask} />
            {tasks.map((task, index) => <p key={index}>{task}</p>)}
        </div>
    )
}

// memo is a High Order Component that memoizes a react component if it's values returned have not changed
const Button = memo(({ addTask }) => {
    console.log('Button Rendered')
    return <div>
        <button className="btn btn-primary" onClick={addTask}>
            Add Task
        </button>
    </div>
})

export default UseCallbackExample