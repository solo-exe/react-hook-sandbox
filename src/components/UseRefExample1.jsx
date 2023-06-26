import { useRef } from 'react'

function UseRefExample1() {

    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        inputRef.current.value = 'Hello'
        inputRef.current.style.backgroundColor = 'red'
        paraRef.current.innerText = 'Goodbye'
        console.log(inputRef.current.value)
        // setting the inoutRef value does not rerender the component like setting the state does
    }

    // Manipulate elemets in the DOM using useRef

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    ref={inputRef}
                    id='name'
                    className="form-control mb-2"
                />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
            <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>
        </div>
    )
}

export default UseRefExample1