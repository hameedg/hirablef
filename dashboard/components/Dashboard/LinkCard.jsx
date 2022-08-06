import Link from 'next/link';
import PropTypes from 'prop-types';

const LinkCard = ({ url, image, text, ...props }) => (
  <Link href={url} passHref>
    <div
      {...props}
      className="rounded-2xl bg-white hover:scale-105 border border-[#ebecee] shadow-md cursor-pointer relative duration-300 ease-in-out w-[13.75rem] h-[7.375rem]"
    >
      <img
        alt="links"
        src={image}
        className="absolute top-0 left-0 w-[82%] rounded-tl-2xl"
      />
      <p className="mt-20 ml-6 text-[#033443] text-sm font-semibold">{text}</p>
    </div>
  </Link>
);

LinkCard.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

export default LinkCard;
