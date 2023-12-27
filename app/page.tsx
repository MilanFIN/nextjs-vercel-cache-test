
const getData = async () => {
  let response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Helsinki", {
                          next: { revalidate: 10 },
                      })

  let data = await response.json();
  console.log(data)
  return data.datetime

}
export const dynamic = 'force-dynamic'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default async function Page() {

  let test = getData();

  return (
  <div>
  <h1>res</h1>
  <span>{test}</span>
  </div>
  )
}
