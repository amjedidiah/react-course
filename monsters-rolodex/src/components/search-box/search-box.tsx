import "./search-box.css";

export interface SearchBoxProps {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchString: string;
  placeholder?: string;
  className?: string;
}

export default function SearchBox({
  onChangeHandler,
  searchString,
  placeholder,
  className,
}: SearchBoxProps) {
  return (
    <input
      type="search"
      value={searchString}
      onChange={onChangeHandler}
      placeholder={placeholder}
      className={`search-box ${className}`}
    />
  );
}
