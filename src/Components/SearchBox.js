import React from 'react'

const SearchBox = props => {
  return (
    <div>
      <input
        className="form-control" placeholder="Search Something"
        type="text"
        onInput={props.onSearch}
      />
    </div>
  )
}

export default SearchBox
