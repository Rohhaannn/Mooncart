import PropTypes from "prop-types";

const CustomLink = ({ href, className, Children }) => {

  const linkStyles = "text-[15px] font-medium text-gray-600 cursor-pointer list-none";

  return (
    <a
      href={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-green`
          : `${className} ${linkStyles}`
      }
    >
      {Children}
    </a>
  );
};

const Badges = ({ color, Children }) => {

  return (
    <div className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white`}>
      {Children}
    </div>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Badges.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { CustomLink, Badges };
