import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './Filter.module.css';

export class Filter extends Component {
  filterInputId = nanoid();

  handleChange = event => {
    this.props.onFilterChange(event.target.value);
  };

  render() {
    return (
      <label htmlFor={this.filterInputId}>
        <p className={styles.labelText}>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          onChange={this.handleChange}
          id={this.filterInputId}
          autoComplete="off"
          required
        />
      </label>
    );
  }
}
