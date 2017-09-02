import React from 'react';
import Time from 'react-time';

const Comment = (props) => {
  const wasDate = new Date(props.comments.date_1);
  const time = props.comments.date_1.slice(11, 16);

  return (
    <div className="media comment comment-right">
      <div className="media-left media-middle">
        <img width="64" className="media-object" src="octo1.png" alt="..." />
      </div>
      <div className="media-body panel-text">
        <h4 className="media-heading comment-right panel-text">By {props.comments.name}</h4>
        <p>Date: <Time
          value={wasDate}
          titleFormat="YYYY/MM/DD HH:mm"
          relative
        />&nbsp;at&nbsp;{time}</p>
        <p>Skill Level <span className="skill">{props.comments.skill}</span></p>
      </div>
      <p>{props.comments.message}</p>
    </div>
  );
};

Comment.propTypes = {
  comments: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Comment.defaultProps = {
  comments: {},
};

export default Comment;
