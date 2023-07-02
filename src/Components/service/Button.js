import gitHubIcon from "../../images/github.svg";

const Button = ({ href, text }) => {
  return (
    <button className="flex items-center justify-center py-1 px-8 font-bold text-base text-white bg-green-600 rounded-full shadow-md cursor-pointer outline-none hover:bg-white mx-auto my-2 hover:shadow transform transition duration-300 ease-in-out">
      <a href={href} target="_blank" rel="noreferrer" className="flex items-center text-white hover:text-black">
        {!text ? 'View on GIT' : text}
        {!text && <img src={gitHubIcon} alt="GitHub Icon" className="h-[30px] w-[30px] ml-2" />}
      </a>
    </button>
  );
};

export default Button;
