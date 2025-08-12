import { useState } from "react";
import { Form, Button, Col, Alert } from 'react-bootstrap';
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
//import Col from "react-bootstrap/Col";
import ReCAPTCHA from 'react-google-recaptcha';
import appConfig from '../../config.json';

function Contact() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const siteKey = appConfig.siteKey; // Use the site key from config

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: phoneNumber,
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: any) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedValue);
  };

  const handleSubmit = (e: any) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false || !captchaValue || !validatePhoneNumber(phoneNumber)) {
      e.stopPropagation();
    } else {
      setSubmitted(true);
      // Send email using EmailJS
      emailjs
        .sendForm(
          "service_b0sj01i",
          "template_1iwtlnn",
          e.target,
          "s2N5-LuHgafrpkiYE"
        )
        .then(
          () => {
            // Reset form
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            console.error("Email sending failed:", error.text);
          }
        );
      navigate("/confirm");
    }

    setValidated(true);
  };

  const validatePhoneNumber = (number: any) => {
    return number.length === 12;
  };

  const formatPhoneNumber = (value: any) => {
    const digitsOnly = value.replace(/\D/g, "");
    let formattedNumber = "";

    if (digitsOnly.length < 4) {
      formattedNumber = digitsOnly;
    } else if (digitsOnly.length < 7) {
      formattedNumber = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
    } else {
      formattedNumber = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(
        3,
        6
      )}-${digitsOnly.slice(6, 10)}`;
    }
    return formattedNumber;
  };

  return (
    <div className="container">
      <br />
      <h4>CONTACT US</h4>
      <br />
      <div className="row justify-content-center p-3">
        <div className="col-lg">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Col} md="7" controlId="formName">
              <Form.Label>Full name:</Form.Label>
              <Form.Control
                required
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Last"
              />
              <Form.Control.Feedback type="invalid">
                Please type in your name.
              </Form.Control.Feedback>
            </Form.Group>

            <br />
            <Form.Group as={Col} md="7" controlId="formEmail">
              <Form.Label>Enter your email address:</Form.Label>
              <Form.Control
                required
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group as={Col} md="7" controlId="formPhoneNumber">
              <Form.Label>Enter your phone number:</Form.Label>
              <Form.Control
                id="phone"
                type="tel"
                name="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="xxx-xxx-xxxx"
                isInvalid={validated}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid contact number.
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="formMessage">
              <Form.Label>Enter your message:</Form.Label>
              <Form.Control
                required
                id="message"
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your message.
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={value => setCaptchaValue(value)}
              className="mb-3"
            />
            <br />
            <Button variant="primary" type="submit">
              SEND MESSAGE
            </Button>
          </Form>
          {submitted && (
            <Alert variant="success" className="mt-3">
              Form submitted successfully!
            </Alert>
          )}
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