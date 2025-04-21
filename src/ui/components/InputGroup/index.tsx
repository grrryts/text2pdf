type InputGroupProps = {
  inputValue: string;
  onChangeInputValue: (value: string) => void;
  onSubmit: (text: string) => void;
  isSubmitting: boolean;
};

const InputGroup = ({
  inputValue = '',
  onChangeInputValue,
  onSubmit,
  isSubmitting,
}: InputGroupProps) => {
  return (
    <div className="flex flex-col gap-2 max-w-[500px] w-full">
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md"
        value={inputValue}
        onChange={(e) => onChangeInputValue(e.target.value)}
        readOnly={isSubmitting}
        placeholder="Enter text 2 convert"
        rows={5}
      />

      <button
        className="p-2 border border-gray-300 rounded-md cursor-pointer w-full min-h-[42px] flex items-center justify-center"
        onClick={() => onSubmit(inputValue)}
        disabled={!inputValue || isSubmitting}
      >
        {isSubmitting ? (
          <div className="animate-spin h-5 w-5 border-2 border-gray-300 rounded-full border-t-gray-600" />
        ) : (
          'Convert 2 PDF'
        )}
      </button>
    </div>
  );
};

export default InputGroup;
