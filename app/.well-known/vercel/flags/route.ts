import { type ApiData } from '@vercel/flags'
import { experiments } from '../../../../lib/index'
import { NextResponse } from 'next/server'

/**
 * A route used by the Vercel toolbar for seeing available flags to override.
 */
export async function GET() {
  const definitions = {}

  // Iterate through each experiment and return the override options.
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
