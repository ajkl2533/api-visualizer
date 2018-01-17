import React from 'react';
import './AuthScheme.css';

export default function (props) {
  const auths = props.scheme.members.elements.map((member) =>
    <li className="auth-members__item"
        key={ member.key.toValue() }>
      <strong>Header name: </strong><code>{ member.value.toValue() }</code>
    </li>,
  );

  return (
    <div className="auth-scheme">
      <header className="auth-scheme__header">
        <h3 className="title">{ props.scheme.meta.toValue().id }</h3>
      </header>
      <div className="auth-scheme__body">
        <ul className="auth-members">{ auths }</ul>
      </div>
    </div>
  );
};
