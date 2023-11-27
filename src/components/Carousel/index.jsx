const seznamIkonek = [
  {src: "/ikonka1.svg", alt: "ikona1"},
  {src: "/ikonka2.svg", alt: "ikona2"},
  {src: "/ikonka3.svg", alt: "ikona3"},
  {src: "/ikonka4.svg", alt: "ikona4"},
  {src: "/ikonka5.svg", alt: "ikona5"},
  {src: "/ikonka6.svg", alt: "ikona6"},
  {src: "/ikonka7.svg", alt: "ikona7"},
  {src: "/ikonka8.svg", alt: "ikona8"},
  {src: "/ikonka9.svg", alt: "ikona9"},
  {src: "/ikonka10.svg", alt: "ikona10"},
]
export const Carousel = ({carouselForDay, setCarouselForDay, data, setData}) => {
  const handleIconClick = (event) => {
    setData(
      // hele, tady ta logika nastavování dat je trochu složitější
      // schválně sem nepíšu funkční kód, ale všechno, co je k tomu potřeba má ta komponenta k dispozici
      // takže to zkuste vyřešit sami
      // kdyby jste si nevěděli rady, tak to projdeme spolu
    )
    setCarouselForDay(null);
  }

  return (
    <div className="carousel">
      {seznamIkonek.map(
        (icon) => (
          <img
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            onClick={handleIconClick}
          />
        )
      )
      }
    </div>
  )
}
