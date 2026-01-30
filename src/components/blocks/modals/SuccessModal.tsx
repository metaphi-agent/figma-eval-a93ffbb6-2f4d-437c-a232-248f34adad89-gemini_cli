import React from 'react';
import { Modal } from '../../ui/Modal';
import { IconBox } from '../../ui/IconBox';

export function SuccessModal() {
  return (
    <Modal showCloseButton className="flex flex-row items-start gap-6">
      <IconBox>
        👍
      </IconBox>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-black mb-2">
          Changes saved successfully
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor.
        </p>
      </div>
    </Modal>
  );
}
