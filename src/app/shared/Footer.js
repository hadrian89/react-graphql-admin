import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="#" target="_blank" rel="noopener noreferrer">abhinav.com </a>2024</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">React @{this.props.version} <a href="#" target="_blank" rel="noopener noreferrer"> react admin </a> templates from abhinav.com.  </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;