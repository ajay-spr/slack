type EmptyStateProps = {
  title: string;
  subText: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({ title, subText }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="text-center">
        <span className="block font-bold text-xl">{title}</span>
        <span className="text-slate-600">{subText}</span>
      </div>
    </div>
  );
};

export default EmptyState;
