import { getFrameMetadata } from '@coinbase/onchainkit';
import './page.css';

const frameMetadata = getFrameMetadata({

  buttons: [
    {
      label: "Next"
    },

  ],
  image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--hhyrvv9a--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eefd4ew38ryyrfk6m5nk.png',
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