import React, { useEffect } from "react";
import CardDetailAspirasi from "../../components/card/card_detail_aspiration";
import AspirationDiscussion from "../../components/discussion";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useParams } from "react-router";
import { getAspirationById } from "../../actions/aspiration-action";
import { useDispatch, useSelector } from "react-redux";

function DetailAspirationPage() {
  const dispatch = useDispatch();

  const aspirationData = useSelector((state) => state.aspiration);
  const { id } = useParams();

  const { aspiration } = aspirationData;

  useEffect(() => {
    dispatch(getAspirationById(id));
  }, [dispatch]);

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
            <CardDetailAspirasi data={aspiration} />
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
