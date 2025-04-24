import { useState } from "react";
import { Modal } from "./modal/modal.tsx";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className="openButton" onClick={() => setIsModalOpen(true)}>Åbn modal</button>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        backgroundColor="#fffbe6"
        fontColor="#333"
        width="600px"
        height="400px"
      >
        <h2>Velkommen!</h2>
        <p>Dette er Team Træls</p>
      </Modal>
    </>
  );
};

export default App;
