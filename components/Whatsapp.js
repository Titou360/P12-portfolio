import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import whatsAppIcon from '../public/WhatsAppButtonGreenSmall.png';


const WhatsApp = () => {
  return (
    <div className="animate-bounce lg:mt-4 lg:mb-0">
      <Link aria-label="Chat on WhatsApp" href="https://wa.me/0033621145888?text=Bonjour%20:)" target="_blank">
        <Image alt="Chat on WhatsApp" src={whatsAppIcon} width={160} height={36} />
      </Link>
    </div>
  );
}

export default WhatsApp
