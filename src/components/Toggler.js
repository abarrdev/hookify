import React, { useState } from 'react'

function Toggler() {
	const [isSunny, setIsSunny] = useState(true)
	const [isButterfly, setIsButterfly] = useState(false)

	const toggleSunny = () => {
		setIsSunny(!isSunny)
	}

	const toggleButterfly = () => {
		setIsButterfly(!isButterfly)
	}

	return(
		<div>
			<h1 onClick={toggleSunny} style={{padding:'30px'}}>
				{isSunny ? "☀️" : "☔️" }
			</h1>
			<h1 onClick={toggleButterfly} style={{padding:'30px'}}>
				{isButterfly ? "🦋" : "🐛"}
			</h1>
		</div>
	)
}

export default Toggler