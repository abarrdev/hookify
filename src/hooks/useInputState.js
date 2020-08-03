import {useState} from 'react'

function useInputState(initial = false) {
	const [value, setValue] = useState(initial)

	const handleChange = (event) => {
		setValue(event.target.value)
	}

	const reset = () => {
		setValue("")
	}

	return [value, handleChange, reset]
}

export default useInputState