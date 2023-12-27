
import { getData } from "./getters";
import { Test } from "../components/test";



export const dynamic = "force-dynamic";
export default async function Page() {

  const test = await getData();


  return (
  <div>
  <h1>res</h1>
  <Test data={test}/>

  </div>
  )
}
/*
export async function getServerSideProps() {
  // Fetch data from external API
  const test = await getData();
 
  // Pass data to the page via props
  return { props: { test } }
}*/