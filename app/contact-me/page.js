'use client';
import AnimatedText from '@/components/AnimatedText';
import { useEffect, useState } from 'react';
import sendEmail from '@/components/sendEmail';

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('incomplete'); // 'incomplete', 'sending', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formData.lastName || !formData.email || !formData.phoneNumber || !formData.message) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires 🧐');
      return;
    }

    setFormStatus('sending');
    setErrorMessage('');

    try {
      await sendEmail(formData); 
      setFormData({ lastName: '', firstName: '', email: '', phoneNumber: '', message: '' });
      setFormStatus('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      setErrorMessage("😭 Une erreur s'est produite lors de l'envoi.");
    }
  };

  const resetForm = () => {
    setFormData({ lastName: '', firstName: '', email: '', phoneNumber: '', message: '' });
    setFormStatus('incomplete');
    setErrorMessage('');
  };

  useEffect(() => {
    const resetTimeout = setTimeout(() => {
      resetForm();
    }, 3000);

    return () => {
      clearTimeout(resetTimeout);
    };
  }, [formStatus]);

  return (
    <>
      <section id="contact" className="w-full pt-2 mb-6 flex flex-col items-center text-dark">
        <div className="pt-0 flex flex-col items-center text-dark w-full min-h-screen">
          <AnimatedText className="normal-case" text="Me contacter" />

          <div className="flex justify-center items-center w-screen h-screen mt-10 sm:-mt-16">
            <div className="container mx-auto my-4 px-4 lg:px-20">
              <div className="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white items-center justify-center">
                <div className="flex">
                  <h2 className="font-bold uppercase text-5xl">
                    Envoyez-moi <br /> un <span className="text-primary">mess@ge</span>
                  </h2>
                </div>
                <form className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5" onSubmit={submitHandler}>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Prénom"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    name="lastName"
                    placeholder="Nom de famille*"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    name="phoneNumber"
                    placeholder="Téléphone*"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />

                  <div className="my-4">
                    <textarea
                      placeholder="Votre Message*"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    ></textarea>
                  </div>
                  <div className="my-2 w-1/2 lg:w-1/4">
                    <button
                      type="submit"
                      className={`uppercase text-sm font-bold tracking-wide p-6 rounded-lg w-full 
              ${
                formStatus === 'sending'
                  ? 'bg-yellow-500'
                  : formStatus === 'success'
                  ? 'bg-green-500'
                  : formStatus === 'error'
                  ? 'bg-red-500'
                  : 'bg-primary'
              }
              text-gray-100 focus:outline-none focus:shadow-outline`}
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? "En cours d'envoi 😏" : formStatus === 'success' ? 'Envoi réussi 👍' : 'Envoyer'}
                    </button>
                  </div>
                </form>
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
