"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, text: "" };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return e("input", {
      onChange: ({ target }) => {
        this.setState({ text: target.value });
        console.log(target.value);
      },
    });
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);

// "button", { onClick: () => this.setState({ liked: true }) }, "Like";
