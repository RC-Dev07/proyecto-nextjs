type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export default function SearchBar({
  value,
  onChange,
  className = "",
}: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar producto..."
      className={`border rounded px-3 py-2 w-full ${className}`}
    />
  );
}