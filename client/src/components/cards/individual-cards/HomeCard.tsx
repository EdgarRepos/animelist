import React from "react";

interface HomeCardProps {
  title: string,
  paragraph : string,
  paragraph2? : string,
  paragraph3? : string
}

function HomeCard({title, paragraph, paragraph2, paragraph3} : HomeCardProps): JSX.Element {

  return (
    <div className="card mb-3 mx-auto" style={{width: "320px"}}>
      
      <div className="card-header">
        <h3 className="h4 text-center" >{title}</h3>
      </div>

      <div className="card-body">
        <p>{paragraph}</p>
        {paragraph2 && <p>{paragraph2}</p>}
        {paragraph3 && <p>{paragraph3}</p>}
      </div>

    </div>
  )
}

export default HomeCard;