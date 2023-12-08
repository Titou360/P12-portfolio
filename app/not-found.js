import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <span className="text-primary font-bold text-8xl">404</span>
      <h1 className="text-6xl font-bold text-center dark:text-light">Page non trouvée</h1>
      <p className="text-lg mt-4 text-center dark:text-light">Oops! Vous essayez d&apos;accéder à une page qui n&apos;existe pas</p>
      <Link legacyBehavior href="/">
        <a className="text-primary mt-4 text-xl underline">Retour à l&apos;acceuil</a>
      </Link>
    </div>
  );
};

