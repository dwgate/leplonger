import React from 'react';
// import Time from 'react-time';

const Comment = props => (
  <div className="comment-section">
    <h4 className="media-heading comment-right panel-text">By {props.comments.name || 'Anonymous'}</h4>
    <p>Skill Level <span className="skill">{props.comments.skill}</span></p>
    <p>{props.comments.message}</p>
  </div>
);

Comment.propTypes = {
  comments: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Comment.defaultProps = {
  comments: {},
};

export default Comment;
