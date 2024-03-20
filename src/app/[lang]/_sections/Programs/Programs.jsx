import SlickComp from './_components/SlickComp';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const Programs = ({ fetchedData }) => {
  const { title, slider_text, bg } = fetchedData;

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(175, 175, 175, 0.42), rgba(186, 184, 184, 0.42)), url(${bg.filename})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="mobile-bg-adjust"
    >
      <div
        className="relative max-h-fit mx-4 text-black overflow-auto bg-opacity-0 bg-slate-300 sm:mx-0 sm:bg-opacity-10 lg:mx-8 xl:mx-0 rounded-lg "
        id="programs"
      >
        <div className=" my-10 pt-8 pb-12 sm:mx-8 max-w-6xl lg:mx-auto lg:py-12 lg:px-16 xl:px-0 bg-white bg-opacity-95 rounded-xl slider-programs">
          {/* Title */}
          <div className=" w-full flex justify-center items-center ">
            <div className="flex flex-col items-center">
              <h2 className="font-title text-black text-center">{title}</h2>
              <div className="relative w-full h-1 mt-8 sm:mt-4 md:mt-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
              </div>
            </div>
          </div>
          <SlickComp fetchedData={fetchedData} />
        </div>
        {/* Paragraph only on mobile view */}
        <div className="flex mb-1 font-title text-xl absolute bottom-24 left-1/2 transform -translate-x-1/2 visible xl:hidden">
          <MdArrowBackIos />
          <p>{slider_text}</p>
          <MdArrowForwardIos />
        </div>
      </div>
    </section>
  );
};
export default Programs;
