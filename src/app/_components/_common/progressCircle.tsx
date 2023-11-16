type ProgressCircleProps = { percent: number; second: number };
export default function ProgressCircle({
  percent,
  second,
}: ProgressCircleProps) {
  const radius = 20;
  const circumference = radius * 2 * Math.PI;
  return (
    <div className="inline-flex items-center justify-center">
      <svg className="h-20 w-20">
        <circle
          className="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={40}
          cy={40}
        />
        <circle
          className="text-blue-600"
          stroke-width="5"
          stroke-dasharray={circumference}
          stroke-dashoffset={percent * circumference}
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          transform="rotate(90,40,40)"
          r={radius}
          cx={40}
          cy={40}
        />
      </svg>
      <span className="absolute font-bold text-blue-500">{second}s</span>
    </div>
  );
}
