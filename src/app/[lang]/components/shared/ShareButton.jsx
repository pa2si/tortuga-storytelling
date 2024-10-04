'use client';

import toast from 'react-hot-toast';
import { FaRegShareFromSquare } from 'react-icons/fa6';

const ShareButton = ({
  eventTitle,
  shareBtnText,
  shareBtnDesktopCopiedText,
  shareBtnMobileSuccessText,
}) => {
  // Function to detect if the device is mobile
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  };

  const handleShare = async () => {
    // Mobile behavior: Use Web Share API if available
    if (isMobileDevice() && navigator.share) {
      try {
        await navigator.share({
          title: eventTitle,
          text: shareBtnText,
          url: window.location.href,
        });
        toast.success(shareBtnMobileSuccessText);
      } catch (error) {
        toast.error(
          `Error sharing content: ${error.message || 'Unknown error'}`
        );
      }
    } else {
      // Desktop behavior: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success(shareBtnDesktopCopiedText || 'Link copied !');
      } catch (error) {
        toast.error(`Failed to copy URL: ${error.message || 'Unknown error'}`);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="text-2xl text-tortuga-dark hover:text-tortuga-light transition-all duration-200 ease-in-out"
    >
      <FaRegShareFromSquare />
    </button>
  );
};

export default ShareButton;
