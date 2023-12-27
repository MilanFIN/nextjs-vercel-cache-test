
import { getData } from "./getters";
import { Test } from "../components/test";




export default async function Page() {

  const test = await getData();


  return (
  <div>
  <h1>res</h1>
  <Test data={test}/>

  </div>
  )
}

