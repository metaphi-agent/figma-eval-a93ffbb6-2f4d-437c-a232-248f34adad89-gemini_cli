import React from 'react';
import { Modal } from '../../ui/Modal';
import { IconBox } from '../../ui/IconBox';
import { Button } from '../../ui/Button';

export function ConfirmModal() {
  return (
    <Modal showCloseButton className="flex flex-col gap-8">
      <div className="flex flex-row items-start gap-6">
        <IconBox>
          🤨
        </IconBox>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-black mb-2">
            Accept changes?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor.
          </p>
        </div>
      </div>
      
      <div className="flex justify-end gap-4 w-full">
        <Button variant="secondary" fullWidth>Reject</Button>
        <Button variant="primary" fullWidth>Accept</Button>
      </div>
    </Modal>
  );
}
