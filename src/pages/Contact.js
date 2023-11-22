import Layout from '@/app/layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';


export default function Contact() {
  return (
    <Layout className="pt-0 flex items-center text-dark w-full min-h-screen">
      <AnimatedText className="capitalize" text="Contactez-moi" />
      <Link href="/">Retour à l accueil</Link>
    </Layout>
  );
}
