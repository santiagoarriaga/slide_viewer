import React from 'react'
import { connect } from 'react-redux'

/**
 * Link to the Home dir.
 */
class HomeLink extends React.Component
{

  constructor( props )
  {
    super( props )

    this.showModules = this.showModules.bind( this )
  }

  showModules()
  {
    if( this.props.view != 'modules' )
      this.props.dispatch({ type: 'modules.show' })
  }

  render()
  {
    return (
      <a className="home" href="#" onClick={ this.showModules }></a>
    )
  }
}

export default connect( state => ({ view: state.view }) )( HomeLink )
