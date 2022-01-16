import React, {createContext} from "react";
import {SpeakerType} from "../resources/Speaker";

export interface SpeakerContextValue {
  speaker: SpeakerType,
  updateRecord: (arg: SpeakerType, callback?: () => void) => void,
  insertRecord: (arg: SpeakerType, callback?: () => void) => void,
  deleteRecord: (arg: SpeakerType, callback?: () => void) => void,
}


const SpeakerContext = createContext<SpeakerContextValue | undefined>(undefined);

export function SpeakerProvider({children, speaker, updateRecord, insertRecord, deleteRecord}:
                                  SpeakerContextValue & { children: React.ReactElement }) {
  return (
    <SpeakerContext.Provider
      value={{speaker, updateRecord, insertRecord, deleteRecord}}
    >
      {children}
    </SpeakerContext.Provider>
  );
}

export function useSpeakerContext() {
  const context = React.useContext(SpeakerContext)

  if (context === undefined) {
    throw new Error('useSpeakerContext should be used within an SpeakerProvider.')
  }

  return context
}

