import { type ApiData } from '@vercel/flags'
import { experiments } from '../../../../lib/index'
import { NextResponse } from 'next/server'

export async function GET() {
  const definitions = {}

  for (const experiment of experiments) {
    definitions[`exp${experiment.id}`] = {
      description: experiment.description,
      options: [
        { value: '0', label: 'Off' },
        { value: '1', label: 'On' },
      ],
    }
  }

  return NextResponse.json<ApiData>({ definitions })
}
