import React, { Component } from 'react';
import './Action.css';

class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseOpen: false,
    };
  }

  handleClick() {
    this.setState({
      responseOpen: !this.state.responseOpen,
    });
  }

  render() {
    const response = this.props.action.transactions.elements[0].response;

    return (
      <div className="action">
        <div className={ `method method--${this.props.action.method.toValue()
          .toLowerCase()}` }
             onClick={ () => this.handleClick() }>
          <h4 className="method__name">{ this.props.action.method.toValue() }</h4>
        </div>
        <div className={ `action__response response response--${this.props.action.method.toValue()
          .toLowerCase()} ${this.state.responseOpen ? 'is-open' : ''}` }>
          <header className="response__header">
            <h5 className="title">Response</h5>
          </header>
          <div className="response__body">
            <ul className="response__list">
              <li><strong>Status Code: </strong>{ response.statusCode.toValue() }</li>
              <li><strong>Content-Type: </strong>{ response.contentType.toValue() }</li>
            </ul>
          </div>
        </div>
        <p className="action__description">
          { this.props.action.copy.toValue() }
        </p>
      </div>
    );
  }
}

export default Action;
