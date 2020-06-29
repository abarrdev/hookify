import React, { useState } from 'react'

function Toggler() {
	const [isSunny, setIsSunny] = useState(true)

	const toggle = () => {
		setIsSunny(!isSunny)
	}

	return(
		<div>
			<h1 onClick={toggle} style={{paddingTop:'50px'}}>
				{isSunny ? "☀️" : "☔️" }
			</h1>
		</div>
	)
}

export default Toggler