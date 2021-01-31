import './App.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard, MDBCardBody, MDBIcon, MDBInput, MDBBtn } from "mdbreact";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <div class="sign"><MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 peach-gradient">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="white-text mb-3 pt-3 font-weight-bold">
                    Log in
                  </h3>
                </MDBRow>
                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                  <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                    <MDBIcon fab icon="facebook-f" size="lg" className="white-text" />
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                    <MDBIcon fab className="fa-twitter white-text fa-lg" />
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                    <MDBIcon fab className="fa-google-plus-g white-text fa-lg" />
                  </a>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput label="Your email" group type="text" validate />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                />
                <p className="font-small grey-text d-flex justify-content-end">
                  Forgot
                  <a
                    href="#!"
                    className="dark-grey-text ml-1 font-weight-bold"
                  >
                    Password?
                  </a>
                </p>
                <MDBRow className="d-flex align-items-center mb-4 mt-5">
                  <MDBCol md="5" className="d-flex align-items-start">
                    <div className="text-center">
                      <MDBBtn
                        color="grey"
                        rounded
                        type="button"
                        className="z-depth-1a"
                      >
                        Log in
                      </MDBBtn>
                    </div>
                  </MDBCol>
                  <MDBCol md="7" className="d-flex justify-content-end">
                    <p className="font-small grey-text mt-3">
                      Don't have an account?
                      <a
                        href="#!"
                        className="dark-grey-text ml-1 font-weight-bold"
                      >
                        Sign up
                      </a>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer></div>
      <MDBFooter color="mdb-color" className="font-small lighten-3 pt-4 mt-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="my-4">
            <MDBCol md="4" lg="4">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                My First React App
              </h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum.{" "}
              </p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2" lg="2" className="ml-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
              <ul className="list-unstyled">
                <p>
                  <a href="#!">PROJECTS</a>
                </p>
                <p>
                  <a href="#!">ABOUT US</a>
                </p>
                <p>
                  <a href="#!">BLOG</a>
                </p>
                <p>
                  <a href="#!">AWARDS</a>
                </p>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="5" lg="3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
              <p>
                <i className="fa fa-home mr-3" /> Bardo, Tunis 2009, Tunisia
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> inj.jlassi@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 216 20 838 926
              </p>
              <p>
                <i className="fa fa-print mr-3" /> + 216 50 462 405
              </p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2" lg="2" className="text-center">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Follow us
              </h5>
              <div className="mt-2 ">
                <a type="button" className="btn-floating btn-small btn-fb" href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a type="button" className="btn-floating btn-small btn-tw" href="https://twitter.com/">
                  <i className="fab fa-twitter" />
                </a>
                <a type="button" className="btn-floating btn-small btn-gplus" href="https://mail.google.com/">
                  <i className="fab fa-google-plus" />
                </a>
                <a type="button" className="btn-floating btn-small btn-dribbble" href="https://dribbble.com/">
                  <i className="fab fa-dribbble" />
                </a>
              </div>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default App;
