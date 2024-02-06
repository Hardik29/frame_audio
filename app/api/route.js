import { NextResponse } from 'next/server';

async function getResponse(req) {
  console.log('API frame route called');
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://cyan-deep-moth-632.mypinata.cloud/ipfs/QmNpwH2gDsnsmRbS3uUu4qBxAaRnmy5h2VfWR9sVQvX2p3" /> 
  <meta property="fc:frame:button:1" content="To The Conversation 👆" /> 
  </head></html> 
  `);
} 

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';