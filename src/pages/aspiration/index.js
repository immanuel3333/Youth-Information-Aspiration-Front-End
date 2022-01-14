import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../../components/modal/modal_aspiration";
import SearchAspiration from "../../components/search/search_aspirasi";
import ListAspiration from "../../components/list/list_aspiration";
import CategoryAspiration from "../../components/category-aspiration";
import { useSelector, useDispatch } from "react-redux";
import { getAspiration } from "../../actions/aspiration-action";
import { ToastContainer } from "react-toastify";

<MyVerticallyCenteredModal />;

function AspirationPage() {
  const dispatch = useDispatch();
  const aspirationData = useSelector((state) => state.aspiration);
  const { aspiration } = aspirationData;
  // console.log(aspiration);

  useEffect(() => {
    dispatch(getAspiration());
  }, [dispatch]);

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <ToastContainer />
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
              <SearchAspiration />
            </div>
            <CategoryAspiration />
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
            <ListAspiration />
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
