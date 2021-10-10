import React from 'react'

const TimeAt = (props) => {
      const fulldate=new Date(props.publishAt);
      var date=fulldate.toString().split(" ");
      const hour=parseInt(date[4].substring(0,2));
      const time=hour>12?true:false;
    return (
        <>
            <span>{time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
              </span>  
        </>
    )
}

export default TimeAt
