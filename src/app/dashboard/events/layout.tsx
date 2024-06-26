"use client";

import Hint from "@/components/shared/Hint";
import ImageBackground from "@/components/shared/ImageBackground";
import SubHeader from "@/components/shared/SubHeader";
import CreateEvent from "@/components/shared/events/CreateEvent";
import NavEvents from "@/components/shared/events/NavEvents";
import { usePathname } from "next/navigation";
import React from "react";

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const route = pathname.split("/");
  if (!route) return null;
  console.log(route);
  return (
    <section className="overflow-hidden  h-full relative flex flex-col items-center w-full   ">
      <ImageBackground route={pathname} />
      <div className="flex flex-row justify-start w-full ">
        <SubHeader title="Eventos" path={pathname}>
          <NavEvents />
        </SubHeader>
        <div className="relative">
          <Hint
            label={"Crear evento"}
            align={"end"}
            side={"bottom"}
            sideOffset={28}
            alignOffset={10}
          >
            <CreateEvent />
          </Hint>
        </div>
      </div>
      <div className="flex flex-col px-4 sm:flex-row items-center  pt-10 pb-4 w-full ">
        {children}
      </div>
    </section>
  );
};

export default EventLayout;
