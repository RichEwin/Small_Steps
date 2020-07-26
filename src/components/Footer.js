import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="copyright py-4 text-center text-black fixed-bottom">
          <div class="container">
            <small>Copyright © Your Website 2020</small>
          </div>
        </div>
      </footer>
    )
  }
}