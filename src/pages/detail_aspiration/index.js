import React from "react";
import CardDetailAspirasi from "../../components/card/card_detail_aspiration";
import AspirationDiscussion from "../../components/discussion";
import Footer from "../../components/footer";
import Header from "../../components/header";

function DetailAspirationPage() {
  return (
    <div>
      <div className="container-fluid-c">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <div className="text-center">
          <h1>Aspiration Discussion</h1>
        </div>
        <div className="container row">
          <div className="col-md-4">
            <CardDetailAspirasi />
          </div>
          <div className="col-md-8">
            <AspirationDiscussion />
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

export default DetailAspirationPage;
