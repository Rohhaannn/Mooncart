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

//==================== title= =====================

const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `font-medium  ${
    level === 1
    ? "text-[80px] font-[600] text-blue-500"
    : level === 2
    ? "text-[40px] font-[700] text-blue-500"
    : level === 3
    ? "text-[28px] font-[700] text-blue-500"
    : level === 4
    ? "text-[24px] font-[600] text-blue-500"
    : level === 5
    ? "text-[22px] font-[600] text-blue-500"
    : "text-[18px] font-[500] text-blue-500"
    
  }`;

  return <Heading className={`${className} ${classes}`}> {children}</Heading>
}

const BodyOne = ({ children, className }) => {
  const classes = "text-lg font-normal text-blue-500-gray mb-4";
  return <p className={`${className} ${classes}`}>{children}</p>
}

const BodyTwo = ({ children }) => {
  return <p className="text-base font-semibold text-white">{children}</p>;
};

const Caption = ({ children }) => {
  return <p className="text-sm font-normal text-blue-500-gray">{children}</p>;
};

const Span = ({ children }) => {
  return <span className="text-xs font-semibold text-white">{children}</span>;
};




export { 
  CustomNavLink, 
  CustomLink, 
  Badges,
  Title,
  BodyOne,
  BodyTwo,
  Caption,
  Span
};



//default props
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
  href: PropTypes.string.isRequired,
  className: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};

BodyOne.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};

BodyTwo.propTypes = {
  children: PropTypes.node.isRequired,
};

Caption.propTypes = {
  children: PropTypes.node.isRequired,
};

Span.propTypes = {
  children: PropTypes.node.isRequired,
};

