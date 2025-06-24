import { NextRequest, NextResponse } from 'next/server'
import { expirationDateRegex } from '@/src/utils/regex'
import { pushDocument } from '@/src/database/document'
import { randomUUID } from 'crypto'
import { uploadDocument } from '@/src/storage/document'
import type { Document } from '@/src/models/document'

export const POST = async (request: NextRequest) => {
  const bearerToken: string = process.env.BEARER_TOKEN
  const authorization: string | null = request.headers.get('Authorization')

  if (!authorization) {
    return NextResponse.json(
      { message: 'Missing Authorization' },
      { status: 403 }
    )
  }

  if (authorization !== `Bearer ${bearerToken}`) {
    return NextResponse.json({ message: 'Not allowed' }, { status: 403 })
  }

  const formData: FormData = await request.formData()
  const title = formData.get('title')
  const password = formData.get('password')
  const expirationDate = formData.get('expirationDate')
  const file = formData.get('file')

  if (!title || typeof title !== 'string') {
    return NextResponse.json({ message: 'Invalid title' }, { status: 400 })
  }

  if (!password || typeof password !== 'string' || password.length < 4) {
    return NextResponse.json({ message: 'Invalid password' }, { status: 400 })
  }

  if (
    typeof expirationDate !== 'string' ||
    (expirationDate && !expirationDateRegex.test(expirationDate))
  ) {
    return NextResponse.json(
      { message: 'Invalid expiration date' },
      { status: 400 }
    )
  }

  if (!file || !(file instanceof File) || file.type !== 'application/pdf') {
    return NextResponse.json({ message: 'Invalid file' }, { status: 400 })
  }

  try {
    const fileId: string = randomUUID()
    const downloadUrl: string = await uploadDocument(fileId, file)

    const id: string = await pushDocument(
      title,
      password,
      downloadUrl,
      expirationDate
    )

    const document: Document = { id, title, expirationDate }
    return NextResponse.json({ document }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 })
  }
}
