import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Alert } from "react-bootstrap";

const CommentArea = ({ asin }) => {
  /*  state = {
    comments: [],
    isLoading: false,
  }; */
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchComments = async () => {
    setIsLoading(true);

    try {
      console.log("fetchComments");
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkN2E2NTNhMzhjYjAwMTVmNjNkNGEiLCJpYXQiOjE3MTk0OTkzNjUsImV4cCI6MTcyMDcwODk2NX0._sLOFwceL_eYGDe30nmimOoigh2oUxvTNmf4O1ZVrUM",
          },
        }
      );
      if (resp.ok) {
        const comments = await resp.json();
        // this.setState({comments: comments})
        setComments(comments); // sintassi equivalente alla precedente}
        console.log("comments:", comments);
      } else {
        throw new Error("Errore nel reperimento delle recensioni");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // sintassi equivalente alla precedente
    }
  };
  useEffect(() => {
    fetchComments();
  }, [asin]);

  if (asin !== asin) {
    console.log("asin diverso, avvio la fetch...");
    fetchComments();
  } else {
    console.log("asin non è diverso, mi fermo qui.");
  }

  // componentDidMount() {
  //   if (this.props.asin !== "") {
  //     console.log("componentDidMount (CommentArea)");
  //     this.fetchComments();
  //   }
  // }

  return (
    <>
      <AddComment asin={asin} />
      {asin === "" ? (
        <Alert variant="light">
          👈 Seleziona un libro per vedere le recensioni
        </Alert>
      ) : (
        <CommentsList comments={comments} isLoading={isLoading} />
      )}
    </>
  );
};

export default CommentArea;
