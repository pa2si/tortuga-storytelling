import { useGlobalContext } from '@/utils/context';
import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const ImageModal = () => {
  const { isModalOpen, modalImageUrl, closeModal } = useGlobalContext();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modal_overlay)) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div
      className={`  ${styles.modal_overlay} ${
        isModalOpen ? styles.modal_show : ''
      }`}
      onClick={handleOverlayClick}
    >
      <div className="mt-20 m-2 lg:m-0">
        <Image
          src={modalImageUrl}
          alt="Modal Content"
          width={700}
          height={500}
          priority
          className=" w-full h-full rounded-lg "
        />

        <button
          className={`text-red-600 ${styles.close_modal_btn}`}
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
