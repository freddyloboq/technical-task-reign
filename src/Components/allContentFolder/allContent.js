// imports
import Card from "../cardFolder/card";
import "./allContent.css"

const AllContent = () => {
  const contentCard = [1,2,3,4,5,6,7,8,9,10]

  return(
    <header className="content-container">
      {
      contentCard.map((item,index) => {
        return(
        <Card/>
        )
      })}
    </header>
  )
}

export default AllContent;