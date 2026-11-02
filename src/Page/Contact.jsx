import React from "react";
import Pagebanner from "../components/Pagebanner";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <section>
      <div className="contact">
        <Pagebanner
          title="contact us "
          breadcrumb="Home / frequently asked questions"
          
          image="https://th.bing.com/th/id/OIP.XAbHOqSs4coG4jF9QHX8zgHaFj?w=474&h=355&c=7&rs=1&qlt=90&r=0&dpr=1.1&pid=CanonicalCanvas"
        />
      </div>
      <Container className="contact-c">
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. How do I place an order?</Accordion.Header>
                <Accordion.Body>
                  Browse our menu, select your preferred meals, add them to your
                  cart, review your order, and proceed to checkout. Provide your
                  contact and delivery details and follow the available payment
                  instructions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Can I order more than one meal?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. You can add multiple meals to your cart and adjust the
                  quantity of each item before completing your order.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  3. Can I change my order after placing it?
                </Accordion.Header>
                <Accordion.Body>
                  Please contact us as soon as possible if you need to change an
                  order. Changes depend on whether preparation or dispatch has
                  already started.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  {" "}
                  4. Can I request special meal instructions?
                </Accordion.Header>
                <Accordion.Body>
                  You may include special instructions where the ordering page
                  provides that option. We will make reasonable efforts to
                  accommodate requests, but not every request can be guaranteed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  5. What if a meal is unavailable?
                </Accordion.Header>
                <Accordion.Body>
                  If a selected meal becomes unavailable, we will try to contact
                  you to discuss an alternative or an appropriate refund.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h5>6. What payment methods do you accept?</h5>
            <p>
              The available payment methods will be displayed during checkout.
              Please follow the instructions provided when completing your
              order.
            </p>
            <h5> 7. When is my payment confirmed?</h5>
            <p>
              Your payment is confirmed when the relevant payment provider or
              our authorized team verifies the transaction.
            </p>
            <h5>
              8. What should I do if I am charged but my order is not confirmed?
            </h5>
            <p>
              Keep your transaction reference and contact us with the payment
              details and approximate transaction time. Please avoid making
              another payment until the situation has been checked.
            </p>

            <h4>Delivery </h4>

            <h5>9. Do you deliver to my location?</h5>

            <p>
              Delivery depends on our service coverage. Enter your address
              during checkout or contact us to confirm whether delivery is
              available in your area.
            </p>

            <h5> 10. How long does delivery take?</h5>

            <p>
              Delivery times depend on your location, traffic, preparation time,
              and current order volume. Any estimated time provided should be
              treated as a guide rather than a guarantee.
            </p>

          
          </Col>

          <Col>

            <h5>11. How much does delivery cost?</h5>

            <p>
              Delivery fees may depend on your location and order details. Any
              applicable fee should be shown before you confirm your order.
            </p>

            <h5>
              12. What happens if I am unavailable when my order arrives?
            </h5>

            <p>
              our delivery personnel may attempt to contact you using the
              details provided. If delivery cannot be completed, we will discuss
              the available options in line with our delivery policy.
            </p>


            <h4>Cancellations and Refunds</h4>
            <h5> 13. Can I cancel an order? </h5>
            <p>
              Contact us as quickly as possible. Cancellation may be possible
              before preparation begins, but it may not be available once the
              order has been prepared or dispatched.
            </p>
            <h5>14. What if I receive the wrong meal? </h5>
            <p>
              Contact us promptly with your order reference and a description of
              the problem. Photographs may help us review the issue.
            </p>
            <h5> 15. How do I request a refund? </h5>
            <p>
              contact our support team with your order details and the reason
              for the request. We will review the circumstances and explain the
              available resolution.
            </p>
            <h4> Account and Support </h4>
            <h5>16. Do I need an account to order? </h5>
            <p>
              This depends on the ordering options available on our website. If
              guest checkout is enabled, you may be able to order without
              registering an account.
            </p>
            <h5>17. How can I contact Aon?</h5>
            <p>
              Visit our Contact Us page to find our available contact details
              and send us an enquiry.
            </p>
            <h5>18. How can I provide feedback?</h5>
            <p>
              we welcome feedback about our meals, delivery service, and overall
              customer experience. Please send your comments through our Contact
              Us page.
            </p>
            <h2>Still have questions?</h2>
            <h4>
              Our team will be happy to help. Visit our Contact Us page for
              assistance with your order or any other enquiry.
            </h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
