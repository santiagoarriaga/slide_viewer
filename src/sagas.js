import { takeLatest } from 'redux-saga'
import { call, fork, put } from 'redux-saga/effects'

/**
 * Show the selected module
 */
function* moduleShow( action )
{
  const module = yield call( () =>
    { return Promise.resolve({ curso: 1 }) }
  )

  const event = { type: 'module.show', module }

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
