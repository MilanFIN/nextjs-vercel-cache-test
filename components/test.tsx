"use client"
import { useEffect, useState } from "react";


interface TestProps  {
	data: any
}

export function Test(props: TestProps) {

	//const isClient = true;
	
	const [isClient, setIsClient] = useState(false)
 

	useEffect(() => {
	  setIsClient(true)
	}, [])
	

    return (
		<div >
			{isClient ?
			<span>{props.data}</span>
					:
			isClient}

		</div>
	);
}