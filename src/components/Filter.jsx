import React from 'react'

const Filter = (props) => {
  return (
    <div className="flex place-content-around">
            {props.filterData.map(data=>(
                <button>{data.title}</button>
            ))}
            
    </div>
  )
}

export default Filter
