import React from 'react';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

export function NewsletterModal() {
  return (
    <Modal showCloseButton className=\"flex flex-col items-center text-center gap-8\">
      <img 
        src=\"./assets/images/newsletter-icon.png\" 
        alt=\"Newsletter\" 
        className=\"w-full h-48 object-cover rounded-xl\"
      />
      
      <div>
        <h3 className=\"text-2xl font-bold text-black mb-2\">
          Subscribe to our Newsletter
        </h3>
        <p className=\"text-gray-600\">
          Join thousands getting emails in their inbox.
        </p>
      </div>
      
      <div className=\"w-full flex flex-col gap-4\">
        <Input placeholder=\"email@example.com\" />
        <Button variant=\"primary\" fullWidth>Subscribe</Button>
      </div>
    </Modal>
  );
}
