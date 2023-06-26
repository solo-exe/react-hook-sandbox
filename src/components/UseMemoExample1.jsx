import { useState, useEffect, useRef, useMemo } from 'react'

function UseMemoExample1() {

    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)
    inc.toFixed()

    const renders = useRef(1)

    // const sqrt = getSqrt(number)
    const sqrt = useMemo(() => getSqrt(number), [number])

    useEffect(() => {
        renders.current += 1
    })

    const onClick = () => {
        setInc((prevState) => {
            prevState += 1
            return prevState
        })
    }

    return (
        <div>
            <input
                type="number"
                value={number}
                className="form-control w-25"
                onChange={(e) => setNumber(e.target.value)}
            />

            <h2 className="my-3">
                The Square root of {number} is {sqrt}
            </h2>

            <button onClick={onClick} className="btn btn-primary">Rerender</button>

            <h3>RENDERS: {renders.current}</h3>
        </div>
    )
}

function getSqrt(n) {
    for (let i = 0; i <= 5000; i++) {
        console.log('loop at', i)
    }
    console.log('Expensive Function Called')
    return Math.sqrt(n)
}

export default UseMemoExample1