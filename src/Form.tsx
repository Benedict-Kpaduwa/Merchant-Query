import React, { useState } from "react";

interface FormValues {
  merchantName: string;
  tin: string;
  contactName: string;
  phoneNumber: string;
  email: string;
  accountName: string;
  accountNumber: string;
  bank: string;
}

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    merchantName: "",
    tin: "",
    contactName: "",
    phoneNumber: "",
    email: "",
    accountName: "",
    accountNumber: "",
    bank: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);

    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formValues)
    // };

    // fetch('https://example.com/api/create', requestOptions)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center shadow-xl flex-col w-96 ml-5 mt-5 p-1">
      <label>
        Merchant Name:
        <input
          type="text"
          name="merchantName"
          value={formValues.merchantName}
          onChange={handleInputChange}
          className="border-2 border-gray-600 mx-2 rounded-sm"
        />
      </label>
      <br />
      <label>
        TIN:
        <input
          type="text"
          name="tin"
          value={formValues.tin}
          onChange={handleInputChange}
          className="border-2 border-gray-600 mx-2 rounded-xs"
        />
      </label>
      <br />
      <label>
        Contact Name:
        <input
          type="text"
          name="contactName"
          value={formValues.contactName}
          onChange={handleInputChange}
          className="border-2 border-gray-600 mx-2 rounded-xs"
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
          className="border-2 border-gray-600 mx-2 rounded-xs"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          className="border-2 border-gray-600 mx-2 rounded-xs"
        />
      </label>
      <br />
      <label>
        Account Name:
        <input
          type="text"
          name="accountName"
          value={formValues.accountName}
          onChange={handleInputChange}
          className="border-2 border-gray-600 mx-2 rounded-xs"
        />
      </label>
      <br />
      <label>
        Account Number:
        <input
          type="text"
          name="accountNumber"
          value={formValues.accountNumber}
          onChange={handleInputChange}
          className="border-2 border-gray-600 mx-2 rounded-xs"
        />
      </label>
      <br />
      <label>
        Bank:
        <select name="bank" value={formValues.bank} onChange={handleInputChange} className="border-2 border-gray-600 mx-2 rounded-md">
          <option value="">--Select Bank--</option>
          <option value="access">Access Bank</option>
          <option value="gtb">GTBank</option>
          <option value="uba">UBA</option>
          <option value="zenith">Zenith Bank</option>
        </select>
      </label>
      <br />
      <button type="submit" className="bg-blue-500 w-32 flex justify-center rounded-sm items-center mx-auto">Create</button>
    </form>
  );
};

export default Form;
