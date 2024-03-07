export async function GET() {


  fetch('http://www.loreluo.com/light/increaseLightNum',{method:'GET',mode:'cors'})

  return Response.json({state:'ok'})
}