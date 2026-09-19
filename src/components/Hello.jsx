function HelloWorld() {
  return (
    <div className="hero">
      <style>
        {`
          .hero {
            padding: 80px 30px;
            text-align: center;
            background: #f5f7fa;
          }

          .hero h1 {
            margin-bottom: 15px;
            color: #001542;
            font-size: 42px;
            font-weight: 700;
          }

          .hero p {
            margin-bottom: 25px;
            color: #555;
            font-size: 18px;
          }

          .hero a {
            display: inline-block;
            padding: 12px 24px;
            background: #ffb30d;
            color: #001542;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            transition: 0.3s;
          }

          .hero a:hover {
            background: #001542;
            color: #fff;
          }

          .profile {
            padding: 40px 30px;
            text-align: center;
          }

          .profile h2 {
            color: #001542;
            font-size: 28px;
          }
        `}
      </style>

      <h1>Welcome to My Website</h1>
      <p>Hello! I'm Moeez, a passionate Web Developer.</p>
      <a href="#">Learn More</a>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <h2>Profile Settings</h2>
    </div>
  );
}

const UniqueKey = "467$%$%Y%^%^";

export default HelloWorld;
export { Profile, UniqueKey };
