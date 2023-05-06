import type { NextApiRequest, NextApiResponse } from 'next'
import type { IndexTree } from '@/types'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IndexTree>
) {
    fetch("http://localhost:3000/index.json", { method: "GET" })
        .then(res => res.json())
        .then(data => data.slice(1))
        .then(data => res.status(200).json(data))
}
