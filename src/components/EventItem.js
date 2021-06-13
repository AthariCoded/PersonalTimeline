import { EventWrapper } from "../styles";

const EventItem = (props) => {
  return (
    <EventWrapper>
      <img alt={props.event} src={props.image} />
      <h2> {props.event}</h2>
      <p className="data-event"> {props.year}</p>
    </EventWrapper>
  );
};

export default EventItem;
