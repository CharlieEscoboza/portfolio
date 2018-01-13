const React = require('react');
const SiteHeader = require('./layout/SiteHeader');
const SiteFooter = require('./layout/SiteFooter');

class DefaultLayout extends React.Component {

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <SiteHeader data={this.props.headerData} />
          {this.props.children}
          <SiteFooter />
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
