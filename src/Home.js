import { Title, Description, TimeDescription, TimelineImage } from "./styles";

function Home() {
  return (
    <div>
      <Title> Athari's Timeline </Title>
      <TimeDescription>
        Here I share with you some events in my life.
      </TimeDescription>
      <Description> Things I used that no more exist. </Description>
      <TimelineImage
        alt="time"
        src="https://www.clipartkey.com/mpngs/m/24-241205_timeline-arrow-clipart-png-download-timeline-arrow-cartoon.png"
      />
    </div>
  );
}
export default Home;
