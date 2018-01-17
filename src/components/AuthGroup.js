import React from 'react';
import AuthScheme from './AuthScheme';

export default function (props) {
  return (
    <div className="auth-group">
      { props.group.authSchemes.elements.map((scheme, i) =>
        <AuthScheme scheme={ scheme }
                    key={ i } />
      ) }
    </div>
  );
}
