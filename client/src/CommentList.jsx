export default function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "This comment is rejected";
    }
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}
