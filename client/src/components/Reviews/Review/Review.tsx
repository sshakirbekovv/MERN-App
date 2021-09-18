import React from "react";
import { Post } from "../../../types/post.types";
import styles from "./Review.module.scss";

const Review: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={styles.review}>
      <span className={styles.review__author}>
        {post.user.name} | 
        <i>
          {new Date(post.date!).toISOString().substring(0, 10)}&nbsp;
          {new Date(post.date!).toISOString().substring(11, 19)}
        </i>
      </span>
      <h3 className={styles.review__title}>{post.title}</h3>
      <p className={styles.review__description}>{post.description}</p>
    </div>
  );
};

export default Review;
