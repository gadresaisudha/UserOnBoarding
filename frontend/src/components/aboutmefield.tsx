import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const AboutMeField: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label>About Me:</label><br />
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        cols={40}
        placeholder="Tell us about yourself"
      />
    </div>
  );
};

export default AboutMeField;