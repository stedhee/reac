import React from "react";
import Pagebanner from "../components/Pagebanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Terms = () => {
  return (
    <div>
      <div className="terms-b">
        <Pagebanner
          title="Terms and conditions"
          breadcrumb="Home /Terms and conditions "
          image="https://th.bing.com/th/id/OIG2.H0hOqIhv__DM3XiMP0Df?pid=ImgGn"
        />
      </div>
      <Container className="terms-c">
        <Row>
          <Col>
            <h3> 1. Introduction</h3>
            <p>
              Welcome to WonderLand Cuisine. These Terms & Conditions govern
              your use of our website and the services we provide, including
              browsing our menu, placing food orders, and arranging deliveries.
              By accessing our website or placing an order, you agree to these
              terms. If you do not agree with any part of these terms, please
              discontinue using our ordering services.
            </p>
            <br />
            <h3>2. About Our Services</h3>
            <p>
              WonderLand Cuisine provides food ordering and delivery services,
              offering a selection of freshly prepared meals, beverages, and
              other menu items. We aim to provide quality meals and reliable
              service. However, menu availability, preparation times, and
              delivery times may vary depending on demand, location, and
              operational conditions.
            </p>
            <br />
            <h3>3. Placing an Order</h3>
            <p>
              Customers are responsible for providing accurate information when
              placing an order, including their name, telephone number, delivery
              address, and any relevant delivery instructions. Please review
              your order carefully before submitting it. Once an order has been
              confirmed and preparation has started, changes or cancellations
              may not be possible. WonderLand Cuisine reserves the right to
              decline or cancel an order where necessary, including situations
              involving unavailable items, incorrect pricing, suspected
              fraudulent activity, or operational difficulties.
            </p>
            <br />
            <h3>4. Menu, Prices, and Availability</h3>
            <p>
              All meals and prices displayed on our website are subject to
              change without prior notice. Although we make reasonable efforts
              to ensure that menu descriptions and photographs are accurate, the
              appearance of a meal may vary slightly depending on preparation
              and presentation. If an item becomes unavailable after an order
              has been placed, we will make reasonable efforts to inform the
              customer and discuss an appropriate alternative or refund where
              applicable.
            </p>
            <h3>5. Payments</h3>
            <p>
              Customers must pay the applicable order total using the payment
              methods made available by WonderLand Cuisine. Where payment is
              required before preparation or delivery, the order may not be
              processed until payment has been confirmed. Customers should not
              share their payment PINs, passwords, or other confidential banking
              credentials with anyone claiming to represent WonderLand Cuisine.
            </p>
            <br />
            <h3> 6. Delivery</h3>
            <p>
              Delivery availability depends on the customer's location and our
              delivery coverage. Estimated delivery times are provided as a
              guide and may be affected by traffic, weather, high order volumes,
              or other circumstances beyond our reasonable control. Customers
              should provide a valid delivery address and remain reachable by
              telephone where necessary. Additional arrangements or charges may
              apply if delivery cannot be completed because the information
              provided is incorrect or the recipient is unavailable.
            </p>
            <br />
          </Col>
          <Col>
            <h3>7. Cancellations and Refunds</h3>
            <p>
              Cancellation requests should be submitted as soon as possible
              through our official contact channels. Orders that have already
              been prepared or dispatched may not be eligible for cancellation,
              except where required by applicable law or our stated policies. If
              an order is incorrect, incomplete, or arrives in an unacceptable
              condition, please contact us promptly with your order details.
              Eligible cases will be reviewed and may qualify for a replacement,
              refund, or another appropriate resolution. Please refer to our
              Cancellation & Refund Policy for further details.
            </p>
            <br />
            <h3>8. Customer Conduct</h3>
            <p>
              Customers are expected to provide truthful information and
              communicate respectfully with our staff and delivery personnel.
              Misuse of our website, fraudulent orders, abusive conduct, or
              attempts to interfere with our services may result in restrictions
              on access to our ordering services, subject to applicable law.
            </p>
            <br />
            <h3>9. Website Content and Intellectual Property</h3>
            <p>
              Unless otherwise stated, the text, branding, photographs,
              graphics, and other materials displayed on the WonderLand Cuisine
              website are owned by or used with permission by the business. You
              may not reproduce, distribute, modify, or commercially exploit
              protected website content without the necessary authorization.
            </p>
            <br />
            <h3>10. Privacy</h3>
            <p>
              We may collect information needed to process orders, arrange
              deliveries, respond to enquiries, and improve our services. Our
              handling of personal information is explained in our Privacy
              Policy
            </p>
            <br />
            <h3>11. Service Limitations</h3>
            <p>
              We make reasonable efforts to keep our website available and
              accurate. However, temporary interruptions, technical issues, or
              errors may occur. To the extent permitted by applicable law,
              WonderLand Cuisine will not be responsible for losses arising from
              circumstances beyond its reasonable control. Nothing in these
              terms excludes liability that cannot lawfully be excluded.
            </p>
            <br />
            <h3> 12. Changes to These Terms</h3>
            <p>
              We may update these Terms & Conditions when our services, business
              practices, or legal requirements change. Updated terms will be
              published on this page, together with a revised update date where
              appropriate.
            </p>
            <br />
            <h3>13. Contact Us</h3>
            <p>
              If you have questions about these Terms & Conditions, please
              contact WonderLand Cuisine through the details provided on our
              Contact Us page.
            </p>
            <br />
          </Col>
        </Row>
        <h4>
          Thank you for choosing WonderLand Cuisine. We appreciate your trust
          and look forward to serving you.
        </h4>
      </Container>
      <Container className="terms-c2">
        <h3>Need Assistance or Have a Dispute?</h3>
        <p className="term-c2p">find us and connect</p>
        <Row>
          <Col>
            <h5>Kitchen & Dispatch Hub</h5>
            <p>
              Kitchen & Dispatch Central Lagos, Rd. Wontierland Road, Lagos,
              Nigeria
            </p>

            <p>dispatch hotline :tel:+234 800 000 0000</p>
            <p>support :tel:+234 801 111 1111</p>
          </Col>
          <Col>
            <h5>opening hours</h5>
            <h6>mon-sat</h6>
            <p>9 AM - 10PM</p>
            <h6>sun</h6>
            <p>11AM - 8PM</p>
          </Col>
          <Col>
            <h5>connect with us</h5>
            <p>aon@gmail.com</p>
            <p>http://aon@official</p>
            <p>http://aon@official1</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Terms;
