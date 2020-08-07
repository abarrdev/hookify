import React, {useState, useEffect} from 'react'

function Clicker() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`
	})

	return(
		<div style={{paddingTop:"20px"}}>
			<button onClick={() => setCount(count + 1)}>{count} clicks</button>
		</div>
	)
}

export default Clicker


//useEffect is called on each render - like componentDidMount, componentDidUpdate, componentWillUnmount combined