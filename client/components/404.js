import React, { useEffect } from 'react'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

const NotFound = () => {
  useEffect(() => {}, [])
  const dispatch = useDispatch()
  return (
    <div className="container main-wrapper aligner align-middle text-center">
      <div className="aligner-item text-center ">
        <h1 className="display-1">404</h1>
        <p className="lead text-gray-800 mb-5 bold">Page Not Found</p>
        <p className="text-gray-700 mb-0">
          Seems there is no repository here. Try another username...
        </p>
        <br />
        <button
          className="btn btn-secondary rounded-md btn-lg mb-3 h-8 w-18 px-2 py-2 pb-8 bg-black text-red-400"
          type="button"
          tabIndex="0"
          onClick={() => {
            dispatch(push('/'))
          }}
        >
          {' '}
          Back To Search..
        </button>
      </div>
    </div>
  )
}

NotFound.propTypes = {}

NotFound.defaultProps = {}

export default NotFound
