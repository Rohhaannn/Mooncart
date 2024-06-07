import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomLink = ({ className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 font-sans cursor-pointer list-none";

  return <NavLink className={`${className} ${linkStyles}`}>{children}</NavLink>;
};

const CustomNavLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 font-sans cursor-pointer list-none";

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-green-600`
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};

const Badges = ({ color, children }) => {

  return (
    <div className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center items-center text-white`}>
      {children}
    </div>
  );
};

CustomLink.propTypes = {
  href: PropTypes.isRequired,
  className: PropTypes,
  children: PropTypes.node.isRequired,
};

Badges.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
};

CustomNavLink.propTypes = {
  href: PropTypes.isRequired,
  className: PropTypes,
  children: PropTypes.node.isRequired,
};


export { 
  CustomNavLink, 
  CustomLink, 
  Badges 
};

