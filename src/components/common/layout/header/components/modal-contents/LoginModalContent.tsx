import type { LoginModalContentT } from "./types";
import { GoogleIcon24, YouTubeIcon24 } from "../../../../../../assets";
import { useGetGoogleLinkService } from "@/api";

interface LoginModalContentProps extends LoginModalContentT {
  onClose?: () => void;
}

const LoginModalContent: React.FC<LoginModalContentProps> = ({ onClose }) => {
  const { data: googleLinkData } = useGetGoogleLinkService();

  const handleGoogleSignIn = () => {
    if (googleLinkData?.url) {
      window.location.href = googleLinkData.url;
    }
  };

  return (
    <div className="login-modal__content">
      <div className="login-modal__header">
        <h2 className="login-modal__title">შესვლა</h2>
        <button
          className="login-modal__close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L11 11M1 11L11 1"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="login-modal__buttons">
        <button className="login-modal__btn" onClick={handleGoogleSignIn}>
          <GoogleIcon24 />
          <span>Google ავტორიზაცია</span>
        </button>

        <button className="login-modal__btn" onClick={handleGoogleSignIn}>
          <YouTubeIcon24 />
          <span>YouTube ავტორიზაცია</span>
        </button>
      </div>
    </div>
  );
};

export default LoginModalContent;
