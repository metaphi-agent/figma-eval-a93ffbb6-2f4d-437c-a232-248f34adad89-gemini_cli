import React from 'react';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';
import { Checkbox } from '../../ui/Checkbox';

export function CheckboxModal() {
  return (
    <Modal showCloseButton className="flex flex-col items-center text-center gap-8">
      <div>
        <h3 className="text-3xl font-bold text-black mb-2">
          Do you want to accept?
        </h3>
        <p className="text-gray-600">
          Accepting it will open a pandora’s box.
        </p>
      </div>
      
      <Checkbox label="Remember my choice" defaultChecked />
      
      <div className="flex justify-center gap-4 w-full">
        <Button variant="secondary" fullWidth>Reject</Button>
        <Button variant="primary" fullWidth>Accept changes</Button>
      </div>
    </Modal>
  );
}
