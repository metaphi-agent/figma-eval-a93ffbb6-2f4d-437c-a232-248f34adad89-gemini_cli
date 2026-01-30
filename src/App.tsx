import React from 'react';
import { SuccessModal } from './components/blocks/modals/SuccessModal';
import { ConfirmModal } from './components/blocks/modals/ConfirmModal';
import { SimpleConfirmModal } from './components/blocks/modals/SimpleConfirmModal';
import { ImageModal } from './components/blocks/modals/ImageModal';
import { CheckboxModal } from './components/blocks/modals/CheckboxModal';
import { NewsletterModal } from './components/blocks/modals/NewsletterModal';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Modals, Popups & Alerts
          </h1>
          <p className="text-xl text-gray-500">
            A collection of production-ready modal components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center">
          <SuccessModal />
          <ConfirmModal />
          <SimpleConfirmModal />
          <ImageModal />
          <CheckboxModal />
          <NewsletterModal />
        </div>
      </div>
    </div>
  );
}