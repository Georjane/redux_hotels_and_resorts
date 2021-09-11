// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// function Home(props) {
//   const { state } = props;
//   console.log(props);
//   console.log(state);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('yes');
//   };

//   const handleChange = (e) => {
//     e.preventDefault();
//     console.log('yes');
//   };

//   return (
//     <div>
//       <h1>This is my home page</h1>
//       <form onSubmit={handleSubmit}>
//         <input onChange={handleChange} />
//         <button type="submit">Dispatch an action</button>
//       </form>
//     </div>
//   );
// }

// Home.propTypes = {
//   state: PropTypes.objectOf(PropTypes.any).isRequired,
// };

// const mapStateToProps = (state) => ({
//   state,
// });

// export default connect(mapStateToProps)(Home);
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { CREATE_BOOK } from '../actions/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
      categories: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('yes');
    const { title, category } = this.state;
    console.log(title);
    console.log(category);
    // const { CREATE_BOOK } = this.props;
    // const book = { id: Math.floor(Math.random() * 100), title, category };
    // CREATE_BOOK(book);
    this.setState({ title: '', category: 'Action' });
  };

  render() {
    const { title, category, categories } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="addbook">ADD NEW BOOK</h2>
        <div className="bookform">
          <label htmlFor="title" className="booktitle">
            <input
              type="text"
              id="title"
              placeholder="Book title"
              value={title}
              onChange={this.handleTitleChange}
            />
          </label>
          <label htmlFor="category" className="bookcat">
            <select
              className="form-control"
              id="category"
              placeholder="Category"
              value={category}
              onChange={this.handleCategoryChange}
            >
              { categories.map((category) => <option key={category}>{category}</option>)}
            </select>
          </label>
          <input type="submit" value="ADD BOOK" className="submitbook" />
        </div>
      </form>
    );
  }
}

// Home.propTypes = {
//   CREATE_BOOK: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  booksInfo: state,
});

// const mapDispatchToProps = (dispatch) => ({
//   CREATE_BOOK: (book) => { dispatch(CREATE_BOOK(book)); },
// });

export default connect(mapStateToProps)(Home);
