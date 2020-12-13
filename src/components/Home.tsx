import React from "react";
const languages: Language[] = require("./languages.json");

function Home() {
  return (
    <div className="container">
      <h1>Welcome!</h1>
      <br />
      <h2>About Me</h2>
      <p className="h5" style={{ textAlign: "justify" }}>
        Hi. I'm Millan. I have recently finished studying a Bachelor of Computer
        and Information Science at Auckland University of Technology with a
        major in software development.
      </p>
      <p className="h5" style={{ textAlign: "justify" }}>
        I also enjoy reading. In particular I enjoy books involving Computer
        Science, History, Economics and Urban Planning.
      </p>
      <h5>
        <a href="/projects">Projects</a>
        <br />
        <a href="/contact">Contact me</a>
      </h5>
      <h2>Languages</h2>
      <div>
        <ul
          className="list-group"
          style={{
            marginBottom: "10px",
            overflow: "scroll",
            WebkitOverflowScrolling: "touch",
            maxHeight: "500px",
          }}
        >
          {renderLanguages(languages)}
        </ul>
      </div>
    </div>
  );
}

type Language = {
  name: string;
};

function renderLanguages(languages: Language[]) {
  return languages.map((language) => {
    return (
      <a
        className="list-group-item list-group-item-action"
        id="list-profile-list"
        data-toggle="list"
        href="#list-profile"
        role="tab"
        aria-controls="profile"
      >
        {language.name}
      </a>
    );
  });
}
export default Home;
