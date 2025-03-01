import { ReactNode, useEffect, useState } from "react";
import Modal from "react-modal";

interface ModalProps {
  title: string;
  isOpenControl: boolean;
  children: ReactNode;
  onClose: any;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  },
  content: {  },
};

Modal.setAppElement("#root"); // Evita problemas de accesibilidad

const GenericModal = ({ title, isOpenControl, onClose, children }: ModalProps) => {
  
  const [isOpen, setIsOpen] = useState(isOpenControl);

  useEffect( ()=>{
    setIsOpen(isOpenControl);
  }, [isOpenControl]);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  }

  return (
    <>
      <Modal 
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="bg-black p-6 rounded shadow-lg"
        contentLabel={title}
        style={customStyles}
        >
        <div className="">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <div className="">
          {children}
        </div>
        
      </Modal>
    </>
  );
};

export default GenericModal;
