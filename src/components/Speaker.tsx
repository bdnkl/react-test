import React, {
  memo,
  useState,
} from 'react';

import Image from 'next/image';

import {
  SpeakerContextValue,
  SpeakerProvider,
  useSpeakerContext,
} from '../contexts/SpeakerContext';
import { useSpeakerFilterContext } from '../contexts/SpeakerFilterContext';
import ErrorBoundary from './ErrorBoundary';
import SpeakerDelete from './SpeakerDelete';

function Session({ title, room }) {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
}

function Sessions() {
  const { eventYear } = useSpeakerFilterContext();
  const { speaker } = useSpeakerContext();
  const sessions = speaker.sessions;

  return (
    <div className="sessionBox card h-250">
      {sessions
        .filter((session) => {
          return session.eventYear === eventYear;
        })
        .map((session) => {
          return (
            <div className="session w-100" key={session.id}>
              <Session {...session} />
            </div>
          );
        })}
    </div>
  );
}

function ImageWithFallback({ src, ...props }) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  function onError() {
    if (!error) {
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  }

  return (
    <Image
      src={imgSrc}
      {...props}
      width="300"
      height="300"
      onError={onError}
      alt="picture of speaker"
    />
  );
}

function SpeakerImage() {
  const {
    speaker: { id, first, last },
  } = useSpeakerContext();
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <ImageWithFallback
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        height="200"
        alt={`${first} ${last}`}
      />
    </div>
  );
}

function SpeakerFavorite() {
  const { speaker, updateRecord } = useSpeakerContext();
  const [inTransition, setInTransition] = useState(false);

  function doneCallback() {
    setInTransition(false);
    console.log(
      `In SpeakerFavorite:doneCallback    ${new Date().getMilliseconds()}`
    );
  }

  return (
    <div className="action padB1">
      <span
        onClick={() => {
          setInTransition(true);
          updateRecord(
            {
              ...speaker,
              favorite: !speaker.favorite,
            },
            doneCallback
          );
        }}
      >
        <i
          className={
            speaker.favorite === true
              ? "fa fa-star orange"
              : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
        {inTransition ? <span className="fas fa-circle-notch fa-spin" /> : null}
      </span>
    </div>
  );
}

function SpeakerDemographics() {
  const {
    speaker: { first, last, bio, company, twitterHandle },
  } = useSpeakerContext();

  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite />
      <div>
        <p className="card-description">{bio.substring(0, 70)}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

type SpeakerNoErrorBoundaryPropType = SpeakerContextValue & {
  showErrorCard?: boolean;
};

const SpeakerNoErrorBoundary = memo(function Component({
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord,
  showErrorCard,
}: SpeakerNoErrorBoundaryPropType) {
  const { showSessions } = useSpeakerFilterContext();
  console.log(`speaker: ${speaker.id} ${speaker.first} ${speaker.last}`);
  if (showErrorCard) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <Image
            src="/images/speaker-99999.jpg"
            width="300"
            height="300"
            alt={`${speaker.first} ${speaker.last}`}
          />
          <div>
            <b>Error Showing Speaker</b>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SpeakerProvider
      speaker={speaker}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerImage />
          <SpeakerDemographics />
        </div>
        {showSessions === true ? <Sessions /> : null}
        <SpeakerDelete />
      </div>
    </SpeakerProvider>
  );
},
areEqualSpeaker);

function Speaker(props: SpeakerContextValue) {
  return (
    <ErrorBoundary // if an error occured show the component bellow
      errorUI={<SpeakerNoErrorBoundary {...props} showErrorCard={true} />}
    >
      <SpeakerNoErrorBoundary {...props} />
    </ErrorBoundary>
  );
}

function areEqualSpeaker(prevProps, nextProps) {
  return prevProps.speaker.favorite === nextProps.speaker.favorite;
}

export default Speaker;
