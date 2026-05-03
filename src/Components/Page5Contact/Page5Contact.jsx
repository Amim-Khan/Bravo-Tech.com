import './Page5Contact.css'

const Page5Contact = () => {
  return (
    <div id="ContactUs">
      <div id="CU">
        <h1>
          Contact <span>Us</span>
        </h1>
      </div>
      <div id="GITF">
        <div id="GIT">
          <h1>
            Get In <span>Touch</span>
          </h1>
          <p id='GITPTAG'>
            Get in touch with our team for support, inquiries, collaborations,
            or any assistance you need.
          </p>
          <div id="PEWA">
            <div id="PN">
              <i class="ri-phone-line"></i>
              <div id="phone">
                <h2>Phone Number</h2>
                <p>123-456-7890</p>
              </div>
            </div>
            <div id="EA">
              <i class="ri-mail-send-fill"></i>
              <div id="Email">
                <h2>Email Addrress</h2>
                <p>Hello@contrucWebsite.com</p>
              </div>
            </div>
            <div id="WEB">
              <i class="ri-global-line"></i>
              <div id="Website">
                <h2>Websites</h2>
                <p>www.FyroTech.com</p>
              </div>
            </div>
            <div id="ADD">
              <i class="ri-map-pin-line"></i>
              <div id="Address">
                <h2>Address</h2>
                <p>99 Roving St_Big City,PKU 23456</p>
              </div>
            </div>
          </div>
        </div>
        <div id="F">
          <form action="#">
            <div id="NameSection">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="text" placeholder="Your Subject" required />
            <textarea class="box" placeholder="Your Message..."></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div id="DELIVERY">
        <div id="image">
          <img
            src="https://imgs.search.brave.com/WzDT2E2G7ACbGuDfsWTQmtm8PjnMAg-UOK6_kfnu4Ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvY2l2aWwt/ZW5naW5lZXItbG9v/a2luZy1mb3ItY29u/c3RydWN0aW9uLXNp/dGUtaWxsdXN0cmF0/aW9uLXN2Zy1kb3du/bG9hZC1wbmctMTI5/NDAyMDYucG5n"
            alt=""
          />
        </div>
        <div id="para">
          <h1>
            Consult the services you <span>need now!</span>
          </h1>
          <p>
            Consult the services you need now to achieve your goals with expert
            guidance, reliable solutions, and dedicated support tailored to meet
            your unique requirements.
          </p>
          <div id="FCW">
            <div id="FD">
              <i class="ri-checkbox-circle-fill"></i>
              <h4>Fast Delivery</h4>
            </div>
            <div id="CP">
              <i class="ri-checkbox-circle-fill"></i>
              <h4>Competitive Price</h4>
            </div>
            <div id="WD">
              <i class="ri-checkbox-circle-fill"></i>
              <h4>Wide Delivery Area</h4>

            </div>
          </div>
          <button>Contact Us</button>
        </div>
      </div>
      
    </div>
  );
};

export default Page5Contact;
