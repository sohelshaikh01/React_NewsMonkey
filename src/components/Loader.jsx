import { Component } from 'react';
import Spinner from "../assets/spinner1.gif";

export class Loader extends Component {
  render() {
    return (
      <div className="m-auto flex justify-center">
        <img src={Spinner} alt="Loading..." />
      </div>
    )
  }
}

export default Loader;
