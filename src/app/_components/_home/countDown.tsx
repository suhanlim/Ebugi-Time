export default function CountDown() {
  return (
    <div className="grid auto-cols-max grid-flow-col items-center justify-center gap-2 text-center ">
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 15 }}></span>
        </span>
        days
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 10 }}></span>
        </span>
        hours
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 24 }}></span>
        </span>
        min
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 48 }}></span>
        </span>
        sec
      </div>
    </div>
  );
}
