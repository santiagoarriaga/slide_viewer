import { takeLatest } from 'redux-saga'
import { call, fork, put } from 'redux-saga/effects'

/**
 * Show the selected module
 */
function* moduleShow( action )
{
  const id = action.id

  const module = yield call( () => new Promise( resolve =>
  {
    if( course[ id ] ) // already loaded
      resolve()
    else
      $script( `course/${ id }.js`, () => resolve() )
  }))

  const event = { type: 'module.show', module: course[ id ] }

  yield put( event )
}

/**
 * Main saga generator.
 */
export function* sagas()
{
  yield [
    fork( takeLatest, 'moduleShow', moduleShow )
  ]
}
