import axios from 'axios';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  const { email, firstName } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!firstName) {
    return res.status(400).json({ error: 'First name is required' });
  }

  try {
    const API_KEY = process.env.BUTTONDOWN_TOKEN;
    await axios.post(
      `https://api.buttondown.email/v1/subscribers`,
      {
        email,
        metadata: {
          firstName,
        },
      },

      {
        headers: {
          Authorization: `Token ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return res.status(201).json({ error: '' });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status >= 400) {
        const { data } = error.response;

        if ((data as string[]).some((x) => x.includes('already subscribed'))) {
          return res.status(400).json({
            error: `You're already subscribed to my newsletter`,
          });
        }

        return res.status(400).json({
          error: `There was an error subscribing to the newsletter.`,
        });
      }
    }

    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default handler;
