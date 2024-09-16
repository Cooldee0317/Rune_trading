const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="w-full h-4 rounded-full bg-ord-sky/40 mt-2 overflow-hidden">
      <div
        style={{ width: `${progress}%` }}
        className="h-full rounded-full bg-ord-sky"
      ></div>
    </div>
  );
};

export default ProgressBar;
