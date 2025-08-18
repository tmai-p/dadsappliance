import { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';
import appConfig from '../../config.json';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const siteKey = appConfig.siteKey; // Use the site key from config
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;

    
    if (form.checkValidity() === false || !captchaValue) {
      event.stopPropagation();
    } else {
        setSubmitted(true);
        // Send email using EmailJS
        emailjs.sendForm(
            "service_3j5o6pi",
            "template_1iwtlnn",
            event.target,
            "s2N5-LuHgafrpkiYE"
        ),
        console.error("EmailJS error:", Error.toString);
        navigate("/confirm");
    }

    setValidated(true);
  };


  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h3 className="mb-4">Contact Us</h3>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control required name="name" type="text" placeholder="First Last" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control required name="email" type="email" placeholder="youremail@domain.com" />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control required name="phone" type="tel" 
                pattern="^(\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}$" 
                placeholder="ex. 123-456-7890 or (123) 456-7890)" 
                title="Enter a valid phone number (e.g. 123-456-7890 or (123) 456-7890)" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control required as="textarea" name="message" rows={4} />
            </Form.Group>

            <ReCAPTCHA
              sitekey={siteKey}
              onChange={value => setCaptchaValue(value)}
              className="mb-3"
            />

            <Button type="submit">Submit</Button>
          </Form>
          <br />

          {submitted && (
            <Alert variant="success" className="mt-3">
              Form submitted successfully!
            </Alert>
          )}
        </Col>
        <Col md={6}>
            <div className="col-auto">
                <br />&nbsp;<br />&nbsp;<br />&nbsp;
                <h6>OFFICE</h6>
                <br />
                <p>6636 Virginia Manor Road, Beltsville, MD 20705</p>
                <p>📞 301-937-0222</p>
                <p>📨 bid@dadsappliance.com</p>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
