import React from 'react'

import ClipLoader from 'react-spinners/ClipLoader'

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const Spinner = ({loading}) => {

  return (
    <ClipLoader
        color="red"
        loading={loading}
        cssOverride={override}
        size={150}
       
      />
  )
}

export default Spinner
