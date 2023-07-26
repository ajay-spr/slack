type LoadMoreButtonProps = {
  onClick: () => void;
};

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return (
    <button
      className=" border text-sm border-slate-300 w-max self-center m-2 px-3 py-1 rounded-lg hover:bg-slate-200"
      onClick={onClick}
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
