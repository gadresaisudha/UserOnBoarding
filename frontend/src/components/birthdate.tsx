import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const BirthdateField: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label>Birthdate:</label><br />
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default BirthdateField;