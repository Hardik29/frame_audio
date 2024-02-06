import { NextResponse } from 'next/server';

async function getResponse(req) {
  console.log('API frame route called');
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://res.cloudinary.com/practicaldev/image/fetch/s--hhyrvv9a--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eefd4ew38ryyrfk6m5nk.png" /> 
  </head></html> 
  `);
} 

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';