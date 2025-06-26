import { NextRequest, NextResponse } from 'next/server'
import { documentBadIdRegex } from '@/src/utils/regex'
import { getDocumentDownloadUrl } from '@/src/database/document'

export const POST = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
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

  const { id } = await params

  if (!id || typeof id !== 'string' || documentBadIdRegex.test(id)) {
    return NextResponse.json(
      { message: 'Invalid document ID' },
      { status: 400 }
    )
  }

  const formData: FormData = await request.formData()
  const password = formData.get('password')

  if (!password || typeof password !== 'string' || password.length < 4) {
    return NextResponse.json({ message: 'Invalid password' }, { status: 400 })
  }

  try {
    const downloadUrl: string | null = await getDocumentDownloadUrl(
      id,
      password
    )

    if (downloadUrl) {
      return NextResponse.json({ downloadUrl }, { status: 200 })
    }

    return NextResponse.json({ message: 'Wrong password' }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 })
  }
}
