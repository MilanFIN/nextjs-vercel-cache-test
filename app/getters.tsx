import { revalidatePath } from "next/cache";
import cacheData from "memory-cache";

const url = "http://worldtimeapi.org/api/timezone/Europe/Helsinki"

export const dynamic = 'force-dynamic'

const CACHESECONDS = 10;

export const getData = async () => {
	const value = cacheData.get(url);
	if (value) {
	  return value
	}
	 else {
		const response = await fetch(url);	
		let data = await response.json();
		cacheData.put(url, data.datetime, 1000*CACHESECONDS);

		return data.datetime
	}
}

