import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e: any) => {
    console.log("handling changes");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b0sj01i",
        "template_1iwtlnn",
        e.target,
        "s2N5-LuHgafrpkiYE"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          // Reset form
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
        }
      );
  };

  return (
    <div className="container">
      <br />
      <h4>CONTACT US</h4>
      <br />
      <div className="row justify-content-center p-3">
        <div className="col-lg">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Enter your first and last name:</Form.Label>
              <Form.Control
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Last"
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Enter your email address:</Form.Label>
              <Form.Control
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Enter your phone number:</Form.Label>
              <Form.Control
                id="phone"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Enter your message:</Form.Label>
              <Form.Control
                id="message"
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              SEND MESSAGE
            </Button>
          </Form>
        </div>
        <div className="col-auto">
          <h6>OFFICE</h6>
          <br />
          <p>6636 Virginia Manor Road, Beltsville, MD 20705</p>
          <p>📞 301-937-0222</p>
          <p>📨 email@address.com</p>
        </div>
      </div>

      <span>&nbsp;</span>
    </div>
  );
}

export default Contact;
