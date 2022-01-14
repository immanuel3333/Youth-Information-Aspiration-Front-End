import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getAspirationByCategory } from "../../actions/aspiration-action";

function CategorySearchPage() {
  const dispatch = useDispatch();
  const aspirationData = useSelector((state) => state.aspiration);
  const { category_id } = useParams();

  const { aspiration } = aspirationData;

  useEffect(() => {
    dispatch(getAspirationByCategory(category_id));
  }, [dispatch]);

  let navigate = useNavigate();

  console.log(aspirationData);

  return (
    <div>
      <div className="container-fluid">
        <Header />
        <br />
        <br />
        <br />
        <br />
        {aspiration.map((e) => {
          const categoryName = e.category_id.map((event) => {
            return event.category_name;
          });
          const username = e.user_id.map((event) => {
            return event.username;
          });
          return (
            <Card className="my-1">
              <Card.Header as="h5">{e.aspiration_title}</Card.Header>
              <Card.Body>
                <div className="py-1 d-flex justify-content-between">
                  <Badge bg="secondary">{categoryName}</Badge>
                </div>
                <div className="row py-1">
                  <div className="col-md-4">{username}</div>
                  <div className="col-md-4">{e.created_at.slice(0, 10)}</div>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Deskripsi Aspirasi :</p>
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      navigate(`/detail-aspiration/${e._id}`);
                    }}
                  >
                    Join
                  </Button>
                </div>
                <div className="py-1 d-flex justify-content-between">
                  <Card.Text>
                    {e.aspiration_description.slice(0, 50)}...
                  </Card.Text>
                  <div>30</div>
                </div>
              </Card.Body>
            </Card>
          );
        })}
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
