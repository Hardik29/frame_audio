import { getFrameMetadata } from '@coinbase/onchainkit';
import './page.css';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Collect This Conversation"
    },
  ],
  image: 'https://cyan-deep-moth-632.mypinata.cloud/ipfs/QmfCFkyBbxp9jZWspZmaR3wnK5drvATExTErwQ5yNhUiHb',
  post_url: 'https://unique-griffin-7a9646.netlify.app/api',
});

export const metadata = {
  title: 'Meme Frame',
  description: 'Meme Page',
  openGraph: { 
    title: 'Meme Frame',
    description: 'Meme frame',
    images: ['https://lemon-frame.vercel.app/img-2.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Play Podcast</h1>
    <audio id="audio" className="mb-4" controls>
      <source src="https://cyan-deep-moth-632.mypinata.cloud/ipfs/QmeAU8s7mh2BaZM46hCNKHTxPhWHNpje6BiJuuSwpLQAwF" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <div>
      Get more <a href="https://pods.media/">Link</a>
    </div>
  </div>
  );
}