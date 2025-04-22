'use client';

type ConvertedHistoryListProps = {
  convertedPdfList: string[];
  onItemClick: (value: string) => void;
  isConverting: boolean;
};

const ConvertedHistoryList = ({
  convertedPdfList,
  onItemClick,
  isConverting,
}: ConvertedHistoryListProps) => {
  return convertedPdfList?.length ? (
    <div className="py-4 w-full max-w-[500px]">
      <h2 className="text-xl font-bold mb-4">History</h2>
      <ul className="list-disc space-y-2 list-none">
        {convertedPdfList.map((value, idx) => (
          <li
            key={value + idx}
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={() => {
              if (isConverting) return;

              onItemClick(value);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default ConvertedHistoryList;
