import React from "react";
import Contact from "./Contact";
function Home() {
  return (
    <div className="container">
      <h1>Welcome!</h1>
      <br />
      <h2>About Me</h2>
      <p style={{ textAlign: "justify", fontSize: "20px" }}>
        Hi. I'm Millan. I have recently finished studying a Bachelor of Computer
        and Information Science at Auckland University of Technology with a
        major in software development.
      </p>
      <p style={{ textAlign: "justify", fontSize: "20px" }}>
        I also enjoy reading. In particular I enjoy books involving Computer
        Science, History, Economics and Urban Planning.
      </p>
      <h5>
        <a href="/projects">Projects</a>
        <br />
        <a href="/socials">Socials</a>
      </h5>
      <h2>Contact me</h2>
      <Contact />
    </div>
  );
}
export default Home;
