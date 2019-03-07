import React, {Component} from "react";
import "./QuoteMachine.css";
import Spinner from "../../components/Spinner";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {randomQuote: {}};
  }
  componentDidMount() {
    const url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    fetch(url)
      .then(resp => resp.json())
      .then(quote => {
        this.setState({randomQuote: quote});
        console.log("Ausgabe", this.state.randomQuote);
      });
  }

  render() {
    console.log(this.state.randomQuote.length > 0);
    console.log(this.state.randomQuote);
    return (
      <React.Fragment>
        <h1>QuoteMachine</h1>
        {this.state.randomQuote.length > 0 ? (
          this.state.randomQuote.map(quote => {
            return <h2> {quote.content} </h2>;
          })
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}

export default QuoteMachine;
