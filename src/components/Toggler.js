import React from 'react'
import useToggle from '../hooks/useToggle'

function Toggler() {
	
	const [isSunny, toggleIsSunny] = useToggle(true)
	const [isButterfly, toggleIsButterfly] = useToggle(false)
	const [hasTwoHumps, toggleHasTwoHumps] = useToggle(false)

	return(
		<div>
			<h1 onClick={toggleIsSunny} style={{padding:'30px'}}>
				{isSunny ? "☀️" : "☔️" }
			</h1>
			<h1 onClick={toggleIsButterfly} style={{padding:'30px'}}>
				{isButterfly ? "🦋" : "🐛"}
			</h1>
			<h1 onClick={toggleHasTwoHumps} style={{padding:'30px'}}>
				{hasTwoHumps ? "🐫" : "🐪"}
			</h1>
		</div>
	)
}

export default Toggler