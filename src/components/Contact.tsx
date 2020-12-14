import React from "react";

function Contact() {
  return (
    <div className="container" style={{border: "2px solid black"}}>
      <form>
        <div className="md-form mb-0">
          <h5>Name</h5>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className="md-form mb-0">
          <h5>Email</h5>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
        <div className="md-form">
          <h5>Message</h5>
          <textarea
            id="message"
            name="message"
            rows={2}
            className="form-control md-textarea"
          ></textarea>
        </div>
        <br/>
        <div className="btn btn-primary" style={{fontSize: "24px", width: "100%"}}>
            Send
        </div>
      </form>
      <br/>
    </div>
  );
}

export default Contact;
