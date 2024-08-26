const Btn = ({ text, action, className, justify}) => {
  return (
    <button
      type="button"
      onClick={action}
      className={` text-[20px]  font-bold py-4 px-4  rounded-full shadow-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none  flex items-center justify-${justify} ${className}`}
    >
      {text}
    </button>
  );
};

export default Btn;
