/**
 * Created by Charlie on 12/4/2016.
 */

const React = require('react');
const fetch = require('isomorphic-fetch');
const SectionTitle = require('../SectionTitle');


class ContactMeSection extends React.Component {

  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.state = {
      email: '',
      message: '',
      name: '',
    };
  }


  /**
   * Handle inputs Change Event
   * @param {string} type - input change to be handled
   * @returns {Function} Function to handle the input event
   * @private
   */
  _handleChange(type) {
    return (evt) => {
      const newState= this.state || {};
      newState[type] = evt.target.value;

      this.setState(newState);
    }
  }


  /**
   * Handle Form Submit Event
   * @returns {undefined} undefined
   * @private
   */
  _handleSubmit() {
    fetch('/contact', {
      method: 'POST',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).catch((err) => { console.log(err);});
  }


  /**
   * Render ContactMeSection Component
   *
   */
  render() {

    return (
      <div id={this.props.sectionLink} className='contact-section section'>
        <SectionTitle disableUrl={true} title="Contact Me" />
        <form className="form" id="contactForm" onSubmit={this._handleSubmit} >
          <div className="main-wrapper">
            <div className="wrapper">
              <fieldset>
                <label htmlFor="name">Name </label>
                <input name='name' id='name' type='text' className='name' onChange={this._handleChange('name')} />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email </label>
                <input name='email' id='email' type='text' className='email' onChange={this._handleChange('email')} />
              </fieldset>
            </div>
            <fieldset className="message-fieldset">
              <label htmlFor="message">Message </label>
              <textarea name='message' id='message' cols='30' rows='10' className='message' onChange={this._handleChange('message')} />
            </fieldset>
          </div>
          <button className="submit" type='submit'>{this.props.submitLabel}</button>
        </form>
      </div>
    );
  }
}

ContactMeSection.defaultProps = {
  submitLabel: 'Send message'
};

module.exports = ContactMeSection;
