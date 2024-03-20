'use client';

const error = (error) => {
  // return <div>there was an error...</div>;
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {error.error.message}
    </div>
  );
};
export default error;
