export async function  POST(req: Request) {
  const data = await req.json();

 return fetch('http://www.loreluo.com/light/saveCommemorate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
   
  }
  