/**
 * Show the slides of a given module. The slides description should have
 * been already loaded vía a sage. The first slide is always shown first.
 */
function showModule( state, module )
{
  module.selected = 0

  return Object.assign( {}, state, { view: 'slides', module } )
}

/**
 * Show the list of modules of a course.
 */
function showModules( state )
  { return Object.assign( {}, state, { view: 'modules' } ) }

/**
 * Main hub for redux change requests.
 */
export function reducers( state, action )
{
  switch( action.type )
  {
    case 'module.show': return showModule( state, action.module )
    case 'modules.show': return showModules( state )
  }

  return state
}
