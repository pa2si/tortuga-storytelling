'use client';

import { eventList } from '@/app/[lang]/_sections/Events/data';
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Event Modal
  const [event, setEvent] = useState(eventList);

  const openModal = (event) => {
    setIsModalOpen(true);
    setSelectedEvent(event);
    // console.log('modal has been opened');
  };

  // Single Event image Modal
  const [modalImageUrl, setModalImageUrl] = useState('');

  // Method to open the image modal
  const openImageModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true); // Assuming this controls the visibility of the modal
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const [isEventsInView, setIsEventsInView] = useState(false);
  const [isProgramsInView, setIsProgramsInView] = useState(false);
  const [isAboutInView, setIsAboutInView] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        selectedEvent,
        event,
        openModal,
        closeModal,
        isEventsInView,
        setIsEventsInView,
        isProgramsInView,
        setIsProgramsInView,
        isAboutInView,
        setIsAboutInView,
        isContactInView,
        setIsContactInView,
        modalImageUrl,
        openImageModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
