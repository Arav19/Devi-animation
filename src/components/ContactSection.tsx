import React, { useState } from 'react';
import GoldenButton from './GoldenButton';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:Admin@askdevi.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-yellow-100 mb-2">Name</label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 rounded-lg bg-purple-900/50 border border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-yellow-100 mb-2">Email</label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 rounded-lg bg-purple-900/50 border border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-yellow-100 mb-2">Message</label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-purple-900/50 border border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <div className="text-center">
        <GoldenButton variant="solid" onClick={handleSubmit}>
          Send Message
        </GoldenButton>
      </div>
    </form>
  );
};

export default ContactSection;