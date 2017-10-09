import { takeLatest } from 'redux-saga'
import { call, fork, put } from 'redux-saga/effects'

class Modules
{
  static load()
  {
    return Promise.resolve({ curso: 1 })
  }
}

function* moduleShow( action )
{
  const module = yield call( Modules.load )

  const event = { type: 'module.show', module }

  yield put( event )
}

export function* sagas()
{
  yield [
    fork( takeLatest, 'moduleShow', moduleShow )
  ]
}
