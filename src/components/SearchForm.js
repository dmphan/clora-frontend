import React, { Component } from 'react';
import PropTypes from 'prop-types';
import client from '../config/configureAxios';
import MultiSelect from './MultiSelect';


class SearchForm extends Component {

  static propTypes = {
    setCandidates: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      experiences: '',
      locality: '',
      selectedProducts: [],
      allProducts: []
    }

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.setProducts = this.setProducts.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  setProducts(result) {
    this.setState({ allProducts: result });
  }

  fetchProducts() {
    client.get('/products')
      .then(response => response.data)
      .then(result => this.setProducts(result))
      .catch(e => e);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSelectChange(products) {
    this.setState({ selectedProducts: products });
  }

  handleSubmit(event) {
    event.preventDefault();
    client.get('/consultants', {
      params: {
        experiences: this.state.experiences,
        locality: this.state.locality,
        products: this.state.selectedProducts.map(item =>  {
          return item.value;
        })
      }
    })
      .then(response => this.props.setCandidates(response.data))
      .catch(e => alert(JSON.stringify(e.response.data)));

  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <MultiSelect allProducts={this.state.allProducts} handleSelectChange={this.handleSelectChange} selectedProducts={this.state.selectedProducts} />
        <div className="form-group">
          <label htmlFor="experiencesForm">Experiences</label>
          <textarea
            value={this.state.experiences}
            className="form-control"
            name="experiences"
            id="experiencesForm"
            onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="localityForm">Location</label>
          <input
            type="text"
            id="localityForm"
            className="form-control"
            placeholder="City, State and/or Zipcode"
            name="locality"
            onChange={this.handleInputChange} />
        </div>
        <input 
          type="submit" 
          value="Submit"
          className="btn btn-primary"
        />
      </form>
    )
  }
}

export default SearchForm;