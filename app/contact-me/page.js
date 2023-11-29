"use client"
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';

const Page = () => {
  return (
    <>
      <TransitionEffect />
      <section id="contact" className="w-full pt-2 mb-6 flex flex-col items-center text-dark">
        <div className="pt-0 flex flex-col items-center text-dark w-full min-h-screen">
          <AnimatedText className="normal-case" text="Me contacter" />

          <div className="flex justify-center items-center w-screen h-screen">
            <div className="container mx-auto my-4 px-4 lg:px-20">
              <div className="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white items-center justify-center">
                <div className="flex">
                  <h2 className="font-bold uppercase text-5xl">
                    Envoyez-moi <br /> un <span className='text-primary'>mess@ge</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Prénom*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Nom de famille*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Téléphone*"
                  />
                </div>
                <div className="my-4">
                  <textarea
                    placeholder="Votre Message*"
                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                  <button
                    className="uppercase text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
