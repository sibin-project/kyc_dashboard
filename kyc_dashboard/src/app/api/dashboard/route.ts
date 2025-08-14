import { NextResponse } from 'next/server';
import data from '../../../../public/mock-data.json';

export async function GET() {
  // small artificial delay to show loader
  await new Promise((r) => setTimeout(r, 220));
  return NextResponse.json(data);
}
