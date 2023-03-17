import React, { useState } from 'react';

type FormData = {
  merchantId: string;
  terminalId: string;
  amount: number;
}

type ResponseData = {
  traceId: string;
  transactionId: string;
  qrCodeData: string;
}

function Form3() {
  const [formData, setFormData] = useState<FormData>({
    merchantId: '',
    terminalId: '',
    amount: 0
  });
  const [responseData, setResponseData] = useState<ResponseData | null>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = new URLSearchParams(formData as any).toString();

    // fetch(`/api/transaction?${query}`)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Ok');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => setResponseData(data))
    //   .catch((error) => setError(error.message));
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center shadow-xl flex-col w-96 ml-5 mt-5 p-1 gap-y-5">
        <div>
          <label htmlFor="merchantId">Merchant ID:</label>
          <input type="text" id="merchantId" name="merchantId" value={formData.merchantId} onChange={handleInputChange} className="border-2 border-gray-600 mx-2 rounded-sm" />
        </div>
        <div>
          <label htmlFor="terminalId">Terminal ID:</label>
          <input type="text" id="terminalId" name="terminalId" value={formData.terminalId} onChange={handleInputChange} className="border-2 border-gray-600 mx-2 rounded-sm"/>
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleInputChange} className="border-2 border-gray-600 mx-2 rounded-sm"/>
        </div>
        <button type="submit" className="bg-blue-500 w-32 flex justify-center rounded-sm items-center mx-auto">Submit</button>
      </form>
      {responseData && (
        <div>
          <p>Trace ID: {responseData.traceId}</p>
          <p>Transaction ID: {responseData.transactionId}</p>
          <p>QR Code Data: {responseData.qrCodeData}</p>
        </div>
      )}
    </div>
  );
}

export default Form3;
