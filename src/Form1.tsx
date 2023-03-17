import React, { useState } from "react";

interface FormValues {
  terminalName: string;
  merchantId: string;
  email: string;
  phoneNumber: string;
  qrType: string;
}

const initialValues: FormValues = {
  terminalName: "",
  merchantId: "",
  email: "",
  phoneNumber: "",
  qrType: "",
};

const Form1: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formValues)
    //   };
  
    //   fetch('https://example.com/api/create', requestOptions)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error));

    // clear form values after submit
    setFormValues(initialValues);
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center shadow-xl flex-col w-96 ml-5 p-3 gap-5">
      <div>
        <label htmlFor="terminalName">Terminal Name:</label>
        <input
          type="text"
          id="terminalName"
          name="terminalName"
          value={formValues.terminalName}
          onChange={handleChange}
          className="border-2 border-gray-600 mx-2 rounded-sm"
        />
      </div>
      <div>
        <label htmlFor="merchantId">Merchant ID:</label>
        <input
          type="text"
          id="merchantId"
          name="merchantId"
          value={formValues.merchantId}
          onChange={handleChange}
          className="border-2 border-gray-600 mx-2 rounded-sm"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="border-2 border-gray-600 mx-2 rounded-sm"
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
          className="border-2 border-gray-600 mx-2 rounded-sm"
        />
      </div>
      <div>
        <label htmlFor="qrType">QR Type:</label>
        <select
          id="qrType"
          name="qrType"
          value={formValues.qrType}
          onChange={handleChange}
          className="border-2 border-gray-600 mx-2 rounded-sm"
        >
          <option value="">-- Select QR Type --</option>
          <option value="QR Code">QR Code</option>
          <option value="Bar Code">Bar Code</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 w-32 flex justify-center rounded-sm items-center mx-auto">Create</button>
    </form>
  );
};

export default Form1;
