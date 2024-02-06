import { NextResponse } from 'next/server';

async function getResponse(req) {
  console.log('API frame route called');
  return new NextResponse(`<!DOCTYPE html><html>
 <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://www.canva.com/design/DAF73FvKU1U/k57xc8VQF31MlJ82-lx63g/view?utm_content=DAF73FvKU1U&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" />
  </head>
  </html>
  `);

} 

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';