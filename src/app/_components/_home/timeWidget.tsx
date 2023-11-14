"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function TimeWidget() {
  const [datetime, setDatetime] = useState(dayjs());

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setDatetime(dayjs());
    }, 1000);
    return () => {
      clearInterval(intervalRef);
    };
  }, []);
  return (
    <div className="grid auto-cols-max grid-flow-col items-center justify-center gap-2 text-center ">
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": datetime.day() } as React.CSSProperties}
          ></span>
        </span>
        days
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": datetime.hour() } as React.CSSProperties}
          ></span>
        </span>
        hours
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": datetime.minute() } as React.CSSProperties}
          ></span>
        </span>
        min
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": datetime.second() } as React.CSSProperties}
          ></span>
        </span>
        sec
      </div>
    </div>
  );
}
