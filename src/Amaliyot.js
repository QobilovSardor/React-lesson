import React from "react";
const News = ({ name, extra, text, header }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div className="box">
        <pre>{extra}</pre>
        <p>{text}</p>
      </div>
      <div className="square">
        <h1>{header}</h1>
      </div>
    </div>
  )
}

const Amaliyot = () => {
  return (
    <div>
      <News name='BBS news' extra='2023' text='Sardor Qobilov' header='Big jop'/>
    </div>
  )
}
export default Amaliyot