import React from 'react'
import FormInput from '../components/FormInput'

class ContactPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <FormInput onSubmit={this.submit} />
  }
}

export default ContactPage