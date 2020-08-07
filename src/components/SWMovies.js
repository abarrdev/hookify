import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SWMovies() {
	const [number, setNumber] = useState(1)
	
	useEffect(() => {
		async function getData() {
			axios({
				"method":"GET",
				"url":"https://tripadvisor1.p.rapidapi.com/tips/list",
				"headers":{
				"content-type":"application/octet-stream",
				"x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
				"x-rapidapi-key": ,
				"useQueryString":true
				},"params":{
				"lang":"en_US",
				"currency":"USD",
				"limit":"10",
				"location_id":"8014024"
				}
				})
				.then((response)=>{
				  setNumber(response.data.data[number].user.user_location.name || "the US")
				})
				.catch((error)=>{
				  console.log(error)
				})
		}
		getData()
	})

	return(
		<div>
			<h1>Draw a number to teleport</h1>
			<h4>You're in {number}</h4>
			<select value={number} onChange={e => setNumber(e.target.value)}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
			</select>
		</div>
	)
}

export default SWMovies