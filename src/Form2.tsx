import React, { useState, useEffect } from 'react';

type Merchant = {
  id: number;
  name: string;
  terminalId: string;
  startTime: string;
  endTime: string;
}

function Form2() {
  const [selectedMerchant, setSelectedMerchant] = useState<Merchant | null>(null);
//   const [merchants, setMerchants] = useState<Merchant[]>([]);
//   const [error, setError] = useState<string>('');
  const merchants: Merchant[] = [
    { id: 1, name: 'Merchant A', terminalId: 'A1', startTime: '9:00 AM', endTime: '5:00 PM' },
    { id: 2, name: 'Merchant B', terminalId: 'B1', startTime: '10:00 AM', endTime: '6:00 PM' },
    { id: 3, name: 'Merchant C', terminalId: 'C1', startTime: '11:00 AM', endTime: '7:00 PM' },
  ];

//   useEffect(() => {
//     fetch('/api/merchants')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => setMerchants(data))
//       .catch((error) => setError(error.message));
//   }, []);
  
  // function to handle merchant selection
  const handleMerchantSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMerchantId = parseInt(event.target.value);
    const selectedMerchant = merchants.find((merchant) => merchant.id === selectedMerchantId);
    setSelectedMerchant(selectedMerchant || null);
  }
  
  return (
    <div className="flex shadow-xl flex-col w-96 mt-5">
      <select onChange={handleMerchantSelect} className="border-2 border-gray-600 mx-2 rounded-md">
        <option value="">Select a merchant</option>
        {merchants.map((merchant) => (
          <option key={merchant.id} value={merchant.id}>
            {merchant.name}
          </option>
        ))}
      </select>
      {selectedMerchant && (
        <div>
          <p>Merchant ID: {selectedMerchant.id}</p>
          <p>Terminal ID: {selectedMerchant.terminalId}</p>
          <p>Start Time: {selectedMerchant.startTime}</p>
          <p>End Time: {selectedMerchant.endTime}</p>
        </div>
      )}
    </div>
  );
}

export default Form2;
