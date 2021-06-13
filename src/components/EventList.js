import data from "../data";
import EventItem from "./EventItem";
import { TimelineWrapper } from "../styles";

const EventList = () => {
  const dataList = data.map((data) => (
    <EventItem
      event={data.event}
      year={data.year}
      image={data.image}
      key={data.id}
    />
  ));
  return <TimelineWrapper>{dataList}</TimelineWrapper>;
};

export default EventList;
