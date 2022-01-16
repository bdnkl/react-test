import React, {createContext} from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

interface SpeakerFilterContextValue {
  showSessions: boolean,
  setShowSessions: (arg: boolean) => void,
  eventYear: string,
  setEventYear: (arg: string) => void,
  searchQuery: string,
  setSearchQuery: (arg: string) => void,
  EVENT_YEARS: Array<string>
}

const SpeakerFilterContext = createContext<SpeakerFilterContextValue | undefined>(undefined);

interface SpeakerFilterProviderProps {
  children: React.ReactNode,
  startingShowSessions?: boolean,
  startingEventYear?: string
}

export function SpeakerFilterProvider({children, startingShowSessions = false, startingEventYear = "2019",}
                                        : SpeakerFilterProviderProps) {
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
  } = useSpeakerFilter(startingShowSessions, startingEventYear);

  return (
    <SpeakerFilterContext.Provider
      value={{
        showSessions,
        setShowSessions,
        eventYear,
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENT_YEARS,
      }}
    >
      {children}
    </SpeakerFilterContext.Provider>
  );
}

export function useSpeakerFilterContext() {
  const context = React.useContext(SpeakerFilterContext)

  if (context === undefined) {
    throw new Error('useSpeakerContext should be used within an SpeakerFilterProvider.')
  }

  return context
}
