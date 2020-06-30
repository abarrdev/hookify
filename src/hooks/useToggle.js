import { useState } from 'react'

function useToggle(initial = false) {

	//-----call useState; reserve piece of state------//
	const [state, newState] = useState(initial)

	//----return piece of state + fn to toggle it------//
	const toggle = () => {
		newState(!state)
	}

	return [state, toggle]
}

export default useToggle