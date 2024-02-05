import { NextResponse } from 'next/server';

async function getResponse(req) {
  console.log('API frame route called');
  return new NextResponse(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmVqZ2VnY2d3NjQyM211cGJoejd5bDNtYmszcDBjeTl2eDMyanZ4YyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/TWsw90Csti2KCjvKfU/giphy.gif" />
      <meta property="fc:frame:button:1" content="Play Audio" />
    <meta property="og:title" content="Episode 123: Data Availability in the Modular Stack Explained" />
    <meta property="og:type" content="music.song" />
    <meta property="og:url" content="https://pods.media/the-rollup/ep-123-data-availability-in-the-modular-stack-explained" />
    <meta property="og:audio" content="https://pods.media/the-rollup/ep-123-data-availability-in-the-modular-stack-explained" />
    <meta property="og:audio:type" content="audio/mpeg" />
  </head>
  </html>
  `);

}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';