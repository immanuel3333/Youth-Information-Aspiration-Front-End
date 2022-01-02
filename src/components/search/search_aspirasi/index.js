import { Button, Form, FormControl } from "react-bootstrap";
function SearchAspirasi(props) {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}
export default SearchAspirasi;
