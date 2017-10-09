import React, { PropTypes } from 'react'

/**
 * A single module list entry.
 */
export default class Module extends React.Component
{
  render()
  {
    return (
      <li className="list-group-item module">
        <strong>
          { this.props.data.name }
          { ( this.props.data.title ? ': ' : '' ) }
        </strong>
        { this.props.data.title }
        <i className="fa fa-chevron-right pull-right"></i>
      </li>
    )
  }
}

Module.propTypes =
{
  data: PropTypes.object.isRequired
}
