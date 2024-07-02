/* import { useState } from "react"; */
import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  // state = {
  //   selected: false
  // };
  /*  const [selected, setSelected] = useState(false); */

  return (
    <Card
      style={{
        border:
          props.book.asin === props.selectedAsin
            ? "3px solid red"
            : "3px solid #ebebeb",
      }}
    >
      <Card.Img
        variant="top"
        src={props.book.img}
        onClick={() => {
          props.changeAsin(props.book.asin);
        }}
      />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
