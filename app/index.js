var React = require("react");
var ReactDOM = require("react-dom");
var PropTypes = require("prop-types");

require("./index.css");

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt="Avatar"
          style={{ width: 100, height: 100 }}
        />
        <h1>Name {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    );
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

ReactDOM.render(
  <Badge
    name="Tyler McGinnis"
    username="tylermcginnis"
    img="https://avatars0.githubusercontent.com/u/2933430?v=36s=460"
  />,
  document.getElementById("app")
);
