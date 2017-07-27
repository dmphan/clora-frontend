import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class MultiSelect extends Component {
  
  static propTypes = {
    selectedProducts: PropTypes.array,
    allProducts: PropTypes.array,
    handleSelectChange: PropTypes.func
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="productsForm">Products</label>
        <Select
          name="products"
          multi={true}
          joinValues
          value={this.props.selectedProducts}
          options={this.props.allProducts}
          onChange={this.props.handleSelectChange}
        />
      </div>
    );
  }

}

export default MultiSelect;