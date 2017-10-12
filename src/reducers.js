function showModule( state, module )
{
  module.selected = 0

  return Object.assign( {}, state, { view: 'slides', module } )
}

/**
 * Main hub for redux change requests.
 */
export function reducers( state, action )
{
  switch( action.type )
  {
    case 'module.show': return showModule( state, action.module )
  }

  return state
}
