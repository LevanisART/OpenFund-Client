import { Modal } from "antd";
import { LoginModalContent } from "./modal-contents";
import { useLoginModalStore } from "@/store";

const UnauthenticatedHeader = () => {
  const { isOpen, open, close } = useLoginModalStore();

  return (
    <>
      <Modal
        open={isOpen}
        onCancel={close}
        footer={null}
        closable={false}
        centered
        className="login-modal-wrapper"
        width={571}
      >
        <LoginModalContent onClose={close} />
      </Modal>
      <div className="header__auth-buttons">
        <button onClick={open} className="header__login-btn">
          შესვლა
        </button>
      </div>
    </>
  );
};

export default UnauthenticatedHeader;
