import React, { useState } from "react";
interface Props {
  imageSrc: string;
  description: string;
  onCheck?: (checked: boolean) => void;
}
export default function ProductItem({ imageSrc, description, onCheck }: Props) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    onCheck?.(newChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <img src={imageSrc} alt={description} />
      <span>{description}</span>
    </label>
  );
}
