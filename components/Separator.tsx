type SeparatorProps = {
  date: string;
};

const Separator: React.FC<SeparatorProps> = ({ date }) => {
  return (
    <div className="w-full flex items-center justify-center h-[2px] bg-slate-200">
      <div className="py-1 text-slate-600 text-xs px-2 rounded-lg bg-white border border-slate-200">
        {date}
      </div>
    </div>
  );
};

export default Separator;
