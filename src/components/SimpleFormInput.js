import React from 'react'
import useInputState from '../hooks/useInputState'

function SimpleFormInput() {
	const [name, updateName, resetName] = useInputState("")
	const [last, updateLast, resetLast] = useInputState("")
	
	return(
		<div>
			<h1>Hello, {name}!</h1>
			<input type="text" value={name} onChange={updateName} />
			<button onClick={resetName}>clear</button>
			<br />
			<h1>Good evening, {last}.</h1>
            <input type="text" value={last} onChange={updateLast} />
            <button onClick={resetLast}>clear</button>
		</div>
	)
}

export default SimpleFormInput