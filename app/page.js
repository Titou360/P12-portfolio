import Image from "next/image";
import profilPic from "../public/NOBG-clement.webp"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { TrombiIcon } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <div className="flex items-center text-dark min-h-screen">
      <div className="p-10 flex items-center justify-center gap-4">
        <div className="w-1/3">
          <Image src={profilPic} alt="Photo de Clément FELICES" className="w-full h-auto shadow-[0px_20px_20px_10px_#00000024]" />
        </div>
        
        <div className="w-1/2 flex flex-col item-center">
          <AnimatedText className="!text-6xl text-left normal-case" text="Je suis Clément Felices, développeur Web" />
          <p className="italic font-bold text-justify">
            Après 22 ans d&apos;hôtellerie-restauration, j&apos;ai quitté ce métier captivant pour me réorienter dans le développement web. <br />
            Bercé depuis ma plus jeune adolescence par le monde de l&apos;informatique, il est devenu une passion, le code a toujours été pour moi une fascination et je suis heureux de pouvoir proposer des solutions digitales à mes clients.
          </p>
          <br />
          <p className="text-justify my-4 text-base font-medium">
            Après une reconvertion professionnelle réussie, je me consacre dès maintenant à la transformation d&apos;idées en applications web
            innovantes. Explorez mes récents projets, mettant en avant mon expertise en React.js et en développement web, où chaque ligne
            de code raconte une histoire de créativité et d&apos;efficacité.
          </p>

          <div className="flex items-center self-start mt-2 ">
            {/* Next line => !pdf must be placed in public directory */}
            <Link
              href="/resume.pdf"
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
              download={true}
            >
              Curriculum <TrombiIcon className="ml-1 w-4" />
            </Link>

            <Link href="mailto:clement.felices@gmail.com" target={'_blank'} className="ml-4 text-lg font-medium capitalize text-dark underline">
              Contactez-moi
            </Link>
          </div>
        </div>
      </div>

      <HireMe className="float-left" />
    </div>
  );
}
