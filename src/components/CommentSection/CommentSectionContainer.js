// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)
  console.log("CommentSectionContainer.js", props.comments)
  console.log("CommentSectionContainer.js", comments)
  return (
    <div>
      {/* map through the comments data and return the Comment component */
        comments.map((item) => {
          return <Comment comment={item}/>
        })
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
