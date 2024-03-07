export async function GET() {
  const time= Date.parse(new Date().toString())

  return fetch('http://www.loreluo.com/light/increaseLightNum?time='+time,{method:'GET'})
  
}