import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-20 bg-[#e0ded2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideRight">
            <h2 className="text-5xl font-bold text-[#200E01] mb-6">Our Story</h2>
            <p className="text-[#5B0202] text-lg mb-6 leading-relaxed">
              Noctura was born from a vision to create clothing that transcends ordinary fashion. We blend timeless elegance with contemporary darkness, crafting pieces that empower individuals to express their unique style.
            </p>
            <p className="text-[#5B0202] text-lg leading-relaxed">
              Each garment is meticulously designed with premium materials, ensuring not just style, but comfort and durability. From the shadows of night emerges fashion that speaks volumes.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#8B0000]">500+</div>
                <div className="text-[#5B0202]">Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#8B0000]">50K+</div>
                <div className="text-[#5B0202]">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#8B0000]">98%</div>
                <div className="text-[#5B0202]">Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slideLeft">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600" alt="Fashion" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8B0000] rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#5B0202] rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

