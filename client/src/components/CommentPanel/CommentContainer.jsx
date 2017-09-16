import React from 'react';
import Comment from './Comment.jsx';
import CommentForm from './CommentForm.jsx';

const CommentContainer = props => (
  <div className="col-md-3 scroll-right">
    <div className="right-col">
      {props.comments.length > 0 ?
        <h3 className="about review-title">Reviews for {props.currentsite.name}</h3>
        : <h3 className="no-comment">
            Sorry, there are no reviews for {props.currentsite.name} yet.
          </h3>}

      {props.comments.map(item =>
        <Comment key={String(Math.random())} comments={item} />,
      )}

      {props.user &&
      <CommentForm user={props.user} site={props.currentsite} addNewComment={props.addNewComment} />
      }
    </div>
  </div>
);


CommentContainer.propTypes = {
  comments: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
  currentsite: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  user: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  addNewComment: React.PropTypes.func,
};

CommentContainer.defaultProps = {
  comments: [],
  currentsite: {},
  userPresent: false,
  user: null,
  addNewComment: () => {},
};

export default CommentContainer;
