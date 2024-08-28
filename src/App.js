import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown, X } from 'lucide-react';
import './index.css'

const App = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [showTypeform, setShowTypeform] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (showTypeform) {
      const script = document.createElement('script');
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showTypeform]);

  const closeTypeform = () => {
    setShowTypeform(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`${process.env.PUBLIC_URL}/assets/Freak.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Larger Logo Header with No Background */}
      <header className="py-6 px-6 fixed top-0 left-0 right-0 z-20 flex justify-center items-center">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          alt="Logo" 
          className="h-24 cursor-pointer" 
          onClick={() => scrollToSection(section1Ref)}
        />
      </header>

      {/* Main Content */}
      <main className="flex-grow z-10 relative text-white">
        {/* Section 1 */}
        <section ref={section1Ref} className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">ULYSSE NARDIN GUMBALL 3000 FREAK</h1>
            <p className="text-xl mb-8">LIMITED TO 150 PIECES</p>
            <ArrowDown 
              onClick={() => scrollToSection(section2Ref)} 
              className="mx-auto animate-bounce hover:text-orange-300 cursor-pointer transition-colors" 
              size={32} 
            />
          </div>
        </section>

        {/* Section 2 */}
        <section ref={section2Ref} className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4">A NEW STANDARD OF HOROLOGY</h2>
            <p className="mb-8">CARVED FROM MARBLE, FORGED IN LAVA. THE GUMBALL 3000 FREAK IS A MASTERPIECE OF WATCH ENGINEERING.</p>
            <button 
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded transition-colors"
              onClick={() => setShowTypeform(true)}
            >
              Request Allocation
            </button>
          </div>
        </section>
      </main>

      {/* Typeform Embed */}
      {showTypeform && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-2xl h-3/4">
            <button
              onClick={closeTypeform}
              className="absolute -top-10 right-0 text-white hover:text-orange-300 transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <div data-tf-live="01J67HPKET4RZJ3ARTTFGG59VT" className="h-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;