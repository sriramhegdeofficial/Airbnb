"use client";

import React, { useState } from "react";

const Modal = () => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  return (
    <>
      <button className="btn" onClick={() => dialogRef.current?.showModal()}>
        open modal
      </button>
      <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
