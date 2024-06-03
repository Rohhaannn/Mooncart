import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// const CustomLink = ({ href, className, children }) => {

//   const linkStyles = "text-[15px] font-medium text-gray-600 cursor-pointer list-none";

//   return (
//     <a
//       href={href}
//       className={({ isActive }) =>
//         isActive
//           ? `${className} ${linkStyles} text-primary-green`
//           : `${className} ${linkStyles}`
//       }
//     >
//       {children}
//     </a>
//   );
// };

const CustomLink = ({ href, className, children }) => {
  const linkStyles = "text-[15px] font-medium text-gray-600 cursor-pointer list-none";

  return (
    <NavLink
      to={href}
      className={`${className} ${linkStyles}`}
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
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Badges.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { CustomLink, Badges };
