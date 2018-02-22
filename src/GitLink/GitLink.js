import React from 'react';
import './GitLink.css'

const GitLink = (props) => (
  <div className="GitWrap">
    <div className="GitLogo">
      <i className="fab fa-github"></i>
    </div>
    <div className="GitHub">
      <a href="https://github.com/julianleahy/react-notes">View on GitHub</a>
    </div>
  </div>
)

export default GitLink;