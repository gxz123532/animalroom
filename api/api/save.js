import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  if(request.method !== 'POST') return response.status(405).end();
  try {
    const body = await request.body;
    await kv.set('animalRoomData', body);
    return response.status(200).json({ok:true});
  } catch(err) {
    return response.status(500).json({error:String(err)});
  }
}
