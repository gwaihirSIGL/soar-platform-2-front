import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
       {/* <Link to="/"> <h1>SOAR PLATFORM</h1></Link> */}
      <div>
        {/* <Link to="/xml">Load XML</Link> */}
      </div>
      <div className="links">
        {/* <Link to="/home">Home</Link> */}
        Home
        <a
          href="/json"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          LOAD JSON
        </a>
      </div>
      <div></div>
    </nav>
  );
};
