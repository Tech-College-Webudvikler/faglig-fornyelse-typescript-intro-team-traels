import React from "react";
import "./modal.scss";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
  backgroundColor?: string;
  fontColor?: string;
  width?: string;
  height?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  backgroundColor = "#ffffff",
  fontColor = "#000000",
  width = "500px",
  height = "300px",
}) => {
  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor,
          color: fontColor,
          width,
          height,
        }}
      >
        <button className="modal-close-button" onClick={handleClose}>
          X
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
