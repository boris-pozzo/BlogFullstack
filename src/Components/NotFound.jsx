
import React from 'react';
import Header from './Header';
import OtherContent from './OtherContent';

class NotFound extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <OtherContent text="Error 404, Page not found" img="fa-minus-circle"/>
      </div>
    );
  }

}

export default NotFound;
