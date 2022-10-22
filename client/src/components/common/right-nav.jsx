import SocialButton from "../social-button";
import {
  BsDiscord,
  BsFacebook,
  BsReddit,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import Slider from "../slider";

const RightNav = () => {
  return (
    <section className='mr-3 px-10'>
      <SocialButton />
      <div className='flex flex-col gap-1 my-5 tracking-widest'>
        <p>Find us on</p>
        {icons.map((el) => (
          <div
            key={el.type.name}
            className='flex items-center gap-3 border p-2 text-2xl rounded-md cursor-pointer hover:shadow-md shadow-sm'
          >
            {el}
            <p className='text-base'>{el.type.name.replace("Bs", "")}</p>
          </div>
        ))}
      </div>
      <div>
        <Slider />
      </div>
    </section>
  );
};

export default RightNav;

const icons = [
  <BsFacebook />,
  <BsTwitter />,
  <BsYoutube />,
  <BsReddit />,
  <BsWhatsapp />,
  <BsDiscord />,
];
