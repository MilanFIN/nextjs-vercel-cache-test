export const getData = async () => {
	let response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Helsinki", {
							next: { revalidate: 10 },
						})
  
	let data = await response.json();
	return data.datetime
  
}

export const dynamic = 'force-dynamic'
