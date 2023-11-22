import Layout from '@/app/layout';
import AnimatedText from '@/components/AnimatedText';
import { David_Libre } from 'next/font/google';
import Link from 'next/link';


export default function Error() {
  return (
    <Layout className="pt-0 flex items-center text-dark w-full min-h-screen">
      <AnimatedText className="capitalize" text="404" />
      <Link href="/">Retour à l accueil</Link>
    </Layout>
  );
}