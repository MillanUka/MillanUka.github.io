import React from "react";
import { appendSpreadsheet, UserResponse } from "../utils";
import { useState } from "react";

function Contact() {
  const [userResponse, setUserResponse] = useState<UserResponse>({name: "", email: "", message:""});
  return (
    <div className="container" style={{ border: "2px solid black" }}>
      <form>
        <div className="md-form mb-0">
          <h5>Name</h5>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserResponse({
                name: e.target.value,
                email: userResponse.email,
                message: userResponse.message
              });
            }}
          />
        </div>
        <div className="md-form mb-0">
          <h5>Email</h5>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserResponse({
                name: userResponse.name,
                email: e.target.value,
                message: userResponse.message
              });
            }}
          />
        </div>
        <div className="md-form">
          <h5>Message</h5>
          <textarea
            id="message"
            name="message"
            rows={2}
            className="form-control md-textarea"
            onChange={(e) => {
              setUserResponse({
                name: userResponse.name,
                email: userResponse.email,
                message: e.target.value
              });
            }}
          ></textarea>
        </div>
        <br />
        <div
          className="btn btn-primary"
          style={{ fontSize: "24px", width: "100%" }}
          onClick={() => {
            console.log(userResponse);
            appendSpreadsheet(userResponse);
          }}
        >
          Send
        </div>
      </form>
      <br />
    </div>
  );
}

export default Contact;
