import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Layout from '@/app/layout';

export default function Projects() {
  return (
    <Layout className="pt-0 flex items-center text-dark w-full min-h-screen">
      <AnimatedText className="capitalize" text="Découvrez mes projets" />
      <Link href="/">Retour à l accueil</Link>
    </Layout>
  );
}
