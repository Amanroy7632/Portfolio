// import {Link} from 'react-router-dom';

function Item({ name, href }) {
  return (
    // <NavLink to={href}>
    // {name}
    // </NavLink>
    <a
      href={href}
      onClick={() => {
        // document.querySelector()
        const hamburgIcon = document.querySelector(".hamburg-icon");
        const navBarIcon = document.querySelector(".navbar");
        hamburgIcon.classList.toggle("changeIcon");
        navBarIcon.classList.toggle("show-menu");
      }}
    >
      {name}
    </a>
  );
}
export default Item;
