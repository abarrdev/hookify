import React, {useState, useEffect} from 'react'

function Clicker() {
	const [count, setCount] = useState(0);

	return(
		<div style={{paddingTop:"20px"}}>
			<button onClick={() => setCount(count + 1)}>{count} clicks</button>
		</div>
	)
}

export default Clicker