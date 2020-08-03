import React from 'react'
import useInputState from '../hooks/useInputState'

function SimpleFormInput() {
	const [name, updateName, resetName] = useInputState("")
	
	return(
		<div>
			<h1>Hello, {name}!</h1>
			<input type="text" value={name} onChange={updateName} />
			<button onClick={resetName}>clear</button>
			<br />
		</div>
	)
}

export default SimpleFormInput