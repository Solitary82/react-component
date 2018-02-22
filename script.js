var movies = [{
  id: 1,
  title: 'Django',
  director: 'Quentin Tarantino',
  genre: 'Western',
  year: '2013',
  img: 'images/django.jpg'

},
{
  id: 2,
  title: 'Dunkirk',
  director: 'Christopher Nolan',
  genre: 'War movie',
  year: '2017',
  img: 'images/dunkirk.jpg'
}];


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    );
  }
});

var MovieDirector = React.createClass({
  propTypes: {
    director: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.director)
    );
  }
});

var MovieGenre = React.createClass({
  propTypes: {
    genre: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.genre)
    );
  }
});

var MovieYear = React.createClass({
  propTypes: {
    year: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.year)
    );
  }
});

var MovieImage= React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('img', {src: this.props.img}) // TU MOZE BYC BLAD
    );
  }
});


var MovieList = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return(
      React.createElement('li', {src: this.props.movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDirector, {director: this.props.movie.director}),
        React.createElement(MovieGenre, {genre: this.props.movie.genre}),
        React.createElement(MovieYear, {year: this.props.movie.year}),
        React.createElement(MovieImage, {img: this.props.movie.img})
      )
    );
  }
});



var moviesElements = movies.map(function(movie) {
  return React.createElement(MovieList, {key: movie.id, movie: movie});
});

var moviesList = React.createClass({
    render: function() {
        return (React.createElement('ul', {}, moviesElements));
    }
});


var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(moviesList, {})
);

ReactDOM.render(element, document.getElementById('app'));
