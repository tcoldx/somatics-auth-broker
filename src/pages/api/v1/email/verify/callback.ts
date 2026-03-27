import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { ticket } = req.query;

  if (!ticket) {
    return res.status(400).send('Missing ticket');
  }

  // 🔑 IMPORTANT: replace "myapp" with your Expo scheme
  const redirectUrl = `somatics://auth/callback?ticket=${ticket}`;

  res.redirect(redirectUrl);
}