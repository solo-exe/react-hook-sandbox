import { useRef, useState, useEffect } from 'react'

// ACCESSING PREVIOUS STATE USING USEREF

function UseRefExample2() {
    const renders = useRef(0)
    const prevName = useRef('')
    // whenever a state gets updated, the component gets rerendered
    const [name, setName] = useState('')

    useEffect(() => {
        console.log(renders)
        renders.current += 1
        prevName.current = name
    })
    return (
        <div>
            <h1>Renders: {renders.current}</h1>
            <h1>Previous Name: {prevName.current}</h1>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }} className="form-control mb-3" />
        </div>
    )
}

export default UseRefExample2