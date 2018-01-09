import React from 'react';

class DefaultLayout extends React.Component {

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>{this.props.title}</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}

export default DefaultLayout;
