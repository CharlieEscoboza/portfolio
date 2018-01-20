const React = require('react');

class DefaultLayout extends React.Component {

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/static/styles/style.css" />
        </head>
        <body>
          {this.props.children}
          <script type="text/javascript" src="/static/bundle.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
