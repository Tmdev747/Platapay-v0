"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Remit = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientCountry: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Remit Form Data:', formData);
    // Add your remittance submission logic here
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-[#4B0082]">Remittance</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="recipientName">Recipient Name</Label>
          <Input
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <Label htmlFor="recipientCountry">Recipient Country</Label>
          <Input
            id="recipientCountry"
            name="recipientCountry"
            value={formData.recipientCountry}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <Button type="submit" className="bg-[#4B0082] text-white px-4 py-2 rounded">
          Send Remittance
        </Button>
      </form>
    </div>
  );
};

export default Remit;
