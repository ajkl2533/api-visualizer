import React from 'react';
import Action from './Action';
import './Resource.css';

export default function (props) {
  return (
    <article className="resource">
      <header className="resource__header">
        <h3 className="title">{ props.resource.href.toValue() }</h3>
      </header>
      <div className="resource__body">
        { props.resource.transitions.elements.map((action, i) =>
          <Action action={ action }
                  key={ i } />
        ) }
      </div>
    </article>
  );
};

