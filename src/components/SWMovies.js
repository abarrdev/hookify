import React, {useState, useEffect} from 'react'

function SWMovies() {
	const [number, setNumber] = useState(1)
	
	useEffect(() => {
		
	})

	return(
		<div>
			<h1>pick a movie</h1>
			<select value={number} onChange={e => setNumber(e.target.value)}>
				<h4>You chose {number}</h4>
				<option value="1"></option>
				<option value="2"></option>
				<option value="3"></option>
				<option value="4"></option>
				<option value="5"></option>
				<option value="6"></option>
				<option value="7"></option>
			</select>
		</div>
	)
}

export default SWMovies