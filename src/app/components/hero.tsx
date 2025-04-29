'use client';

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="relative z-10 container mx-auto text-center py-24 px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          منصتنا هي دليلك الشامل لاستكشاف العالم!
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          نسعى لمساعدة المسافرين على اكتشاف الوجهات المثالية، والتعرف على أبرز الأماكن السياحية والثقافية، وقراءة تجارب حقيقية لمسافرين آخرين.
        </p>
        
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="ابحث عن رحلتك"
            className="w-full py-3 px-4 pr-12 rounded-full text-black focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1eb2d4]">
            🔍
          </button>
        </div>
      </div>

      {/* Bottom Curve Decoration */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(130%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path d="M0.00,49.98 C149.99,150.00 349.86,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill="#fff"></path>
        </svg>
      </div>
    </section>
  );
}
