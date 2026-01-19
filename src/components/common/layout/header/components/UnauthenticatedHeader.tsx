import { Button, Modal } from "antd";
import { LoginModalContent, SignUpModalContent } from "./modal-contents";
import { useState } from "react";

const UnauthenticatedHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleModalOpen = (login: boolean) => {
    setIsModalOpen(true);
    setIsLogin(login);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        {isLogin ? (
          <LoginModalContent
            handleCancel={handleCancel}
            setIsLogin={setIsLogin}
          />
        ) : (
          <SignUpModalContent
            handleCancel={handleCancel}
            setIsLogin={setIsLogin}
          />
        )}
      </Modal>
      <div className="header__auth-buttons">
        <button
          onClick={() => handleModalOpen(true)}
          className="header__login-btn"
        >
          შესვლა
        </button>
      </div>
    </>
  );
};

export default UnauthenticatedHeader;
