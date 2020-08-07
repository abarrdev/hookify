import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SWMovies() {
	const [number, setNumber] = useState(1)
	const [place, setPlace] = useState("your office chair")
	
	useEffect(() => {
		async function getData() {
			axios({
				"method":"GET",
				"url":"https://tripadvisor1.p.rapidapi.com/locations/search",
				"headers":{
				"content-type":"application/octet-stream",
				"x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
				"x-rapidapi-key":"ed4c61f3e7msh5c90b77dad15488p1d6da8jsn050dc882c79f",
				"useQueryString":true
				},"params":{
				"location_id":"890",
				"limit":"7",
				"sort":"relevance",
				"offset":"0",
				"lang":"en_US",
				"currency":"USD",
				"units":"km",
				"query":"see"
				}
				})
				.then((response)=>{
				  setPlace(response.data.data[number].result_object.name)
				})
				.catch((error)=>{
				  console.log(error)
				})
		}
		getData()
	}, [number]) //after adding the [number] argument, useEffect only runs when number changes

	return(
		
		<div>
			<h1>Draw a number to teleport</h1>
			<h4>You're in {place}</h4>
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