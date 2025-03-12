import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    if (!email?.trim()) {
      return res.status(400).json({ error: "Email is required" })
    }

    if (!subject?.trim()) {
      return res.status(400).json({ error: "Subject is required" })
    }

    if (!message?.trim()) {
      return res.status(400).json({ error: "Message is required" })
    }

    const { data, error } = await supabase
      .from('messages')
      .insert([
        {
          email,
          subject,
          message
        }
      ])
      .select();

    if (error) {
      return res.status(500).json({ error })
    }

    return res.status(201).json({ data })
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
