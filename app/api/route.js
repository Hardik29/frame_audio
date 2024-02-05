import { NextResponse } from 'next/server';

async function getResponse(req) {
  console.log('API frame route called');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshocBQggTnHIM40eyiP8EhAPhw8nQkYG9uQ&usqp=CAU" />
      </head>
      <body>
        <audio controls>
          <source src="https://cyan-deep-moth-632.mypinata.cloud/ipfs/QmeAU8s7mh2BaZM46hCNKHTxPhWHNpje6BiJuuSwpLQAwF" type="audio/mp3">
          Your browser does not support the audio element.
        </audio>
      </body>
    </html>
  `;

  return new NextResponse(html);
}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
