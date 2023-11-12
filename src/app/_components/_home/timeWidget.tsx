import dayjs from "dayjs";

export function TimeWidget() {
  const day = dayjs().date();
  const hour = dayjs().hour();
  const minute = dayjs().minute();
  const second = dayjs().second();

  return (
    <div className="grid auto-cols-max grid-flow-col items-center justify-center gap-2 text-center ">
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": day } as React.CSSProperties}></span>
        </span>
        days
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": hour } as React.CSSProperties}></span>
        </span>
        hours
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": minute } as React.CSSProperties}></span>
        </span>
        min
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": second } as React.CSSProperties}></span>
        </span>
        sec
      </div>
    </div>
  );
}
