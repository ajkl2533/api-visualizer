import React, { Component } from 'react';
import query from 'refract-query';
import minimModule from 'minim';
import apiDescription from 'minim-api-description';

import * as apiData from './data/api-elements.json';
import './App.css';
import AuthGroup from './components/AuthGroup';
import Resource from './components/Resource';

const minim = minimModule.namespace()
  .use(apiDescription);

const categories = query(apiData, {
  'element': 'category',
  'meta': {
    'title': {
      'content': 'Visualisation',
    },
  },
});

const category = minim.fromRefract(categories[0]);
const copy = category.copy;
const auth = category.authSchemeGroups;
const resources = category.resources;

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth,
      copy,
      resources,
    };
  }

  render() {
    return (
      <div>
        <header className="main-header">
          <h1 className="title">Visualisation</h1>
        </header>
        <section className="section section--intro">
          <header className="section__header">
            <h2 className="title">Introduction</h2>
          </header>
          <div className="section__body">
            { this.state.copy.elements.map((paragraph, i) =>
              <p key={ i }>{ paragraph.toValue() }</p>
            ) }
          </div>
        </section>
        <section className="section section--auth">
          <header className="section__header">
            <h2 className="title">Authentication and authorization</h2>
          </header>
          <div className="section__body">
            { this.state.auth.elements.map((authGroup, i) =>
              <AuthGroup group={ authGroup }
                         key={ i } />
            ) }
          </div>
        </section>
        <section className="section section--reference">
          <header className="section__header">
            <h2 className="title">Reference</h2>
          </header>
          <div className="section__body">
            { this.state.resources.elements.map((resource, i) =>
              <Resource resource={ resource }
                        key={ i } />
            ) }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
