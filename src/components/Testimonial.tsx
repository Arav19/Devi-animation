import React from 'react';
import Rating from './Rating';

interface TestimonialProps {
  name: string;
  age: number;
  city: string;
  text: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, age, city, text, rating, image }) => {
  return (
    <div className="flex flex-col p-6 mx-4 bg-gradient-to-br from-purple-900/40 to-purple-900/20 backdrop-blur-sm rounded-lg shadow-xl min-w-[300px] max-w-[400px] border border-yellow-500/20">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-yellow-400/50"
        />
        <div>
          <h3 className="font-semibold text-yellow-100">{name}</h3>
          <p className="text-sm text-purple-300">{age} years • {city}</p>
          <Rating value={rating} />
        </div>
      </div>
      <p className="text-purple-100 italic mb-4 leading-relaxed">{text}</p>
    </div>
  );
};

export default Testimonial;