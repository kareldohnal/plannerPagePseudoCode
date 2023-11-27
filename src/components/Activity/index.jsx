export const Activity = ({ activity }) => {
  return (
    <div className="activity">
      <button>Tlačítko na odstranení</button>
      <img src={activity.src} alt={activity.alt} />
    </div>
  );
}
