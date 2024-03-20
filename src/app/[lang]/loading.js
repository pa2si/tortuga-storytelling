import { FaSpinner } from 'react-icons/fa6';

const loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-4xl text-tortuga-dark">
      <span className="animate-spin">
        <FaSpinner />
      </span>
    </div>
  );
};
export default loading;
