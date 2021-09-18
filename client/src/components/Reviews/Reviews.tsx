import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Cookies from "ts-cookies";
import {
  creaetePostAction,
  getPostsAction,
} from "../../redux/posts/posts.actions";
import { usePosts } from "../../redux/posts/posts.selector";
import Review from "./Review/Review";
import styles from "./Reviews.module.scss";
import Loader from "react-loader-spinner";

const Reviews: React.FC = () => {
  const idToken = Cookies.get("id_token");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();
  const { loading, posts } = usePosts();
  const roleToken = localStorage.getItem("role");

  const createPost = (e: any) => {
    e.preventDefault();
    dispatch(creaetePostAction({ title, description, user: idToken }));
    setTitle("");
    setDescription("");
    dispatch(getPostsAction());
  };

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <section className={styles.reviews}>
      <header>
        <h1>Reviews</h1>
      </header>
      {loading ? (
        <div className={styles.loading}>
          <Loader
            type="Oval"
            color="#1c374d"
            height={50}
            width={50}
          />
        </div>
      ) : (
        <>
          {posts.map((post) => (
            <Review post={post} />
          ))}
        </>
      )}
      {Cookies.get("token") && roleToken !== "Admin" ? (
        <Form onSubmit={createPost} className={styles.reviews__form}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="example: Excellent!"
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Review
          </Button>
        </Form>
      ) : (
        <h2 className={styles.review__alert}>
          Only authorized users can leave review!
        </h2>
      )}
    </section>
  );
};

export default Reviews;
