import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getAspirationByCategory } from "../../actions/aspiration-action";

// import { MdQuestionAnswer } from "react-icons/md";

function CategorySearchPage() {
  const dispatch = useDispatch();
  const aspirationData = useSelector((state) => state.aspiration);
  const { category_id } = useParams();

  const { aspiration } = aspirationData;
  useEffect(() => {
    dispatch(getAspirationByCategory(category_id));
  }, [dispatch]);
  let navigate = useNavigate();

  console.log(aspiration);
  // const getName = aspiration.user_id
  //   ? aspiration.user_id.map((e) => {
  //       return e.username;
  //     })
  //   : console.log("error");

  // const getUsername = getName.map((e, index) => {
  //   return e.username;
  // });

  // console.log(getUsername);
  return (
    <div>
      <div className="container-fluid">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <Card className="my-1">
          <Card.Header as="h5">{aspiration.aspiration_title}</Card.Header>
          <Card.Body>
            <div className="py-1 d-flex justify-content-between">
              <Badge bg="secondary">{aspiration.category_name}</Badge>{" "}
              <div>94/100</div>
            </div>
            <div className="row py-1">
              <div className="col-md-2"></div>
              <div className="col-md-2">12.04</div>
              <div className="col-md-2">27 Agustus 2021</div>
            </div>
            <div className="d-flex justify-content-between">
              <p>Deskripsi Aspirasi :</p>
              <Button
                variant="outline-primary"
                onClick={() => {
                  navigate(`/detail-aspiration/${aspiration._id}`);
                }}
              >
                Join
              </Button>
            </div>
            <div className="py-1 d-flex justify-content-between">
              <Card.Text>{aspiration.aspiration_description}</Card.Text>
              <div>30</div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default CategorySearchPage;
