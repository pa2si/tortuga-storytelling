'use client';

import toast from 'react-hot-toast';
import { FaRegShareFromSquare } from 'react-icons/fa6';

// Utility function to detect mobile devices
const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|avantgo|bada\/|blackberry|bb|crayon|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    userAgent
  );
};

const ShareButton = ({
  eventTitle,
  shareBtnText,
  shareBtnDesktopCopiedText,
  shareBtnMobileSuccessText,
}) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventTitle,
          text: shareBtnText,
          url: window.location.href,
        });
        // Use the mobile or desktop toast message based on the device type
        toast.success(
          isMobile() ? shareBtnMobileSuccessText : shareBtnDesktopCopiedText
        );
      } catch (error) {
        toast.error(
          `Error sharing content: ${error.message || 'Unknown error'}`
        );
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success(shareBtnDesktopCopiedText);
      } catch (error) {
        toast.error(`Failed to copy URL: ${error.message || 'Unknown error'}`);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="text-2xl text-tortuga-dark hover:text-tortuga-light transition-all duration-200 ease-in-out "
    >
      <FaRegShareFromSquare />
    </button>
  );
};

export default ShareButton;
