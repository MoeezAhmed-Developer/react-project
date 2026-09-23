import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <style>
        {`
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #001542;
            padding: 18px 50px;
          }

          .site-logo a {
            color: #ffb30d;
            text-decoration: none;
            font-size: 28px;
            font-weight: 700;
          }

          header nav {
            display: flex;
            align-items: center;
            gap: 30px;
          }

          header nav a {
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            transition: 0.3s ease;
          }

          header nav a:hover {
            color: #ffb30d;
          }

          @media (max-width: 768px) {
            header {
              padding: 15px 25px;
            }

            header nav {
              gap: 15px;
            }

            header nav a {
              font-size: 14px;
            }

            .site-logo a {
              font-size: 23px;
            }
          }
        `}
      </style>

      <div className="site-logo">
        <Link to="/">BulandiHub</Link>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
