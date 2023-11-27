import './style.css';
import {useState} from "react";
import {Day} from "../../components/Day/index.jsx";
import {Carousel} from "../../components/Carousel/index.jsx";

export const PlannerPage = () => {
  // activities je pole objektů vybraných ikonek
  // takže jeden den s jednou aktivitou může vypadat třeba takto:
  // {dayName: "pondělí", activities: [{src: "/ikonka1.svg", alt: "ikona1"}]}
  const [data, setData] = useState([
    {dayName: "pondělí", activities: []},
    {dayName: "úterý", activities: []},
    {dayName: "středa", activities: []},
    {dayName: "čtvrtek", activities: []},
    {dayName: "pátek", activities: []},
    {dayName: "sobota", activities: []},
    {dayName: "neděle", activities: []},
  ]);
  const [carouselForDay, setCarouselForDay] = useState(null);

  return (
    <div className="container">
      {data.map((day, index) => (
        <Day day={day} setCarouselForDay={setCarouselForDay} />
      ))}
      {carouselForDay && <Carousel carouselForDay={carouselForDay}
                                   setCarouselForDay={setCarouselForDay}
                                   data={data}
                                   setData={setData}
      />}
    </div>
  );
};
