import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  try {
    const data = await kv.get('animalRoomData') || [];
    return response.status(200).json({ data });
  } catch (err) {
    return response.status(500).json({ error: String(err) });
  }
}
