import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Button, NavDropdown } from "react-bootstrap";
import MyVerticallyCenteredModal from "../../components/modal/modal_aspiration";
import CardAspirasi from "../../components/card/card_aspirasi";
import SearchAspirasi from "../../components/search/search_aspirasi";

<MyVerticallyCenteredModal />;

function AspirationPage() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="container-fluid">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <div className="text-center">
          <h1>Share Your Aspiration</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-8">
              <SearchAspirasi />
            </div>
            <div className="col-3">
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Human Right
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="col-1">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Add
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
          <div className="row py-4">
            <CardAspirasi />
            <CardAspirasi />
            <CardAspirasi />
            <CardAspirasi />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default AspirationPage;
