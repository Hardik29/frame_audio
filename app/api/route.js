import { NextResponse } from 'next/server';

async function getResponse(req) {
  console.log('API frame route called');
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmVqZ2VnY2d3NjQyM211cGJoejd5bDNtYmszcDBjeTl2eDMyanZ4YyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/TWsw90Csti2KCjvKfU/giphy.gif" /> 
  </head>
  <body>
  <script>
  document.addEventListener('DOMContentLoaded', function () {
  var audio = new Audio("https://cyan-deep-moth-632.mypinata.cloud/ipfs/QmeAU8s7mh2BaZM46hCNKHTxPhWHNpje6BiJuuSwpLQAwF");
  audio.play();
  });
  </script>
  </body>
  </html> `);

}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';