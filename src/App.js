import React, { Component } from 'react';
import styles from './App.module.css';
import { Heading } from './components';

class App extends Component {
  render() {
    return (
        <div className={styles.wrapper}>
          <Heading/>
        </div>
    )
  }
}

export default App;
