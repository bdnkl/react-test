import {data} from "../SpeakerData";
import Speaker from "../src/components/Speaker";
import {SpeakerType} from "../src/resources/speaker";

const IndexPage = () => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker: SpeakerType) => {
          return <Speaker key={speaker.id} speaker={speaker}/>;
        })}
      </div>
    </div>
  );
};

export default IndexPage;
