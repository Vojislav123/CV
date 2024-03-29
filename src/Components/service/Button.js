
import gitHubIcon from "../../images/github.svg";

const Button = ({ href, text }) => {
  return (
    <div className="flex items-center justify-center py-1 px-8 font-bold text-base bg-[#FED409] rounded-full shadow-md cursor-pointer outline-none hover:bg-white mx-auto my-4 hover:shadow transform transition duration-300 ease-in-out">
      <a href={href} target="_blank" rel="noreferrer" className={`flex items-center ${text && 'text-sm'} text-black`}>
        {!text ? 'View on GIT' : text}
        {!text && <img src={gitHubIcon} alt="GitHub Icon" className="h-[30px] w-[30px] pl-2" />}
      </a>
    </div>
  );
};

export default Button;
