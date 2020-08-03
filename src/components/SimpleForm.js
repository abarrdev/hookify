import React, {useState} from 'react'

function SimpleForm() {
	const [name, setName] = useState("initial")

	const handleChange = (event) => {
		setName(event.target.value)
	}

	return(
		<div>
			<h1>Hello, {name}!</h1>
			<input type="text" value={name} onChange={handleChange}/>
			<button onClick={() => setName("")}>clear</button>
		</div>
	)

}

export default SimpleForm

//save piece of state
//initialize to empty string
//add handleChange