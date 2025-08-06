import React from 'react';

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface Props {
  value: Address;
  onChange: (value: Address) => void;
}

const AddressField: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label>Address:</label><br />
      <input
        name="street"
        value={value.street}
        onChange={handleChange}
        placeholder="Street Address"
        style={{ display: 'block', marginBottom: '5px' }}
      />
      <input
        name="city"
        value={value.city}
        onChange={handleChange}
        placeholder="City"
        style={{ display: 'block', marginBottom: '5px' }}
      />
      <input
        name="state"
        value={value.state}
        onChange={handleChange}
        placeholder="State"
        style={{ display: 'block', marginBottom: '5px' }}
      />
      <input
        name="zip"
        value={value.zip}
        onChange={handleChange}
        placeholder="Zip Code"
        style={{ display: 'block', marginBottom: '5px' }}
      />
    </div>
  );
};

export default AddressField;