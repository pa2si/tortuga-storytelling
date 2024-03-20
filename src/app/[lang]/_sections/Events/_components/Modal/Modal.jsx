'use client';

import { useGlobalContext } from '@/utils/context';
import Image from 'next/image';
import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const { isModalOpen, closeModal, selectedEvent } = useGlobalContext();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modal_overlay)) {
      closeModal();
    }
  };

  return (
    <div
      className={`  ${styles.modal_overlay} ${
        isModalOpen ? styles.modal_show : ''
      }`}
      onClick={handleOverlayClick}
    >
      {isModalOpen && selectedEvent ? (
        <div className="relative bg-white max-h-screen-30 lg:max-w-3xl xl:max-w-4xl text-center grid place-items-center pt-8 pb-2 px-6 rounded-md overflow-scroll">
          {/* Title */}
          <div className=" w-full flex flex-col justify-center items-center mb-4 ">
            <div className="flex flex-col items-center">
              <h5 className="text-3xl lg:text-4xl mb-4 mt-4 font-kalam">
                {selectedEvent.title}
              </h5>
              <div className="relative w-full h-1 ">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
              </div>
            </div>
          </div>

          <Image
            src={selectedEvent.image.filename}
            alt={selectedEvent.image.alt || 'Event Image'}
            priority={true}
            width="300"
            height="300"
            className="rounded-md h-[10rem] md:h-[15rem] shadow-lg  mt-1"
          />
          <span className="inline-block rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {selectedEvent.image.copyright}
          </span>
          <p className="max-w-xl text-justify font-text md:text-lg lg:text-[1rem] lg:leading-[1.8rem] text-neutral-700 mb-4">
            {selectedEvent.description}
            <br />
            {selectedEvent.description2}
          </p>
          <div className="mt-4 pt-1 leading-[1.4rem] text-[1.1rem] md:text-[1.2rem] md:leading-[1.5rem] lg:text-[1.3rem] lg:leading-[1.7rem]">
            <div className=" bg-tortuga-light h-[2px] mb-2 "></div>{' '}
            <p className="text-tortuga-dark"> {selectedEvent.date}</p>
            <p className="text-gray-700"> {selectedEvent.location}</p>
            <p className="text-gray-700"> {selectedEvent.city}</p>
            <p className="text-gray-700">{selectedEvent.address}</p>
            <p className="text-gray-700">{selectedEvent.postal}</p>
            {selectedEvent.event_language && (
              <p className="text-gray-700 mt-2">
                {`(${selectedEvent.event_language})`}
              </p>
            )}
          </div>
          <a
            href={selectedEvent.event_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={selectedEvent.fb_logo.filename}
              alt={selectedEvent.fb_logo.alt}
              width={80}
              height={80}
            />
          </a>
          <button
            className={`text-red-600 ${styles.close_modal_btn}`}
            onClick={closeModal}
          >
            <FaTimes />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
