function Header() {
  return (
    <header>
      <style>
        {`
      header {
        background: #001542;
        padding: 18px 50px;
      }

      .site-logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .site-logo > a {
        color: #ffb30d;
        text-decoration: none;
        font-size: 26px;
        font-weight: 700;
      }

      nav ul {
        display: flex;
        align-items: center;
        gap: 30px;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      nav ul li a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: 0.3s;
      }

      nav ul li a:hover {
        color: #ffb30d;
      }
    `}
      </style>

      <div className="site-logo">
        <a href="/">BulandiHub</a>

        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
