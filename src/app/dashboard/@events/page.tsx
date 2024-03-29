"use client";

import { useQuery } from "convex/react";
import EventCard from "@/components/shared/EventCard";
import { staatliches } from "@/constants";
import { api } from "../../../../convex/_generated/api";

const EventsPage = () => {
  const events = useQuery(api.events.getEvents);
  if (!events) return [];

  return (
    <section className="w-full xs:pl-8 flex flex-col items-center xs:items-start gap-2 ">
      <h2
        className={`${staatliches.className} hidden xs:flex text-4xl xs:text-3xl text-slate-800/90 font-bold `}
      >
        Próximos eventos
      </h2>
      <ul className="flex flex-col items-center xs:flex-row xs:flex-wrap gap-4">
        {events.slice(0, 4).map((event) => {
          return (
            <li key={event.title} className="opacity-70">
              <EventCard event={event} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default EventsPage;
