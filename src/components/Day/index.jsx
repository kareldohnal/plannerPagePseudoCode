import {Activity} from "../Activity/index.jsx";

export const Day = ({day, setCarouselForDay}) => {

  const handleClick = () => {
    setCarouselForDay(day.dayName);
  }

  return (
    <div className="day">
      {day.activities.length < 2 && <button onClick={handleClick}>Tlačítko na přidání</button>}
      <h2>{day.dayName}</h2>
      {day.activities.map((activity) => (
        <Activity activity={activity}/>
      ))}
    </div>
  )
}
