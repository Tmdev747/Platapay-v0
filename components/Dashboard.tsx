"use client";
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Plus, ArrowUp, Smartphone, Send, Globe, Zap } from 'lucide-react'
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import React, { useEffect, useState } from 'react'

const FeatureButton = ({ icon, label, href }) => (
  <Link href={href} className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow">
    <div className="bg-[#4B0082] text-white rounded-full p-3 mb-2">
      {icon}
    </div>
    <span className="text-sm text-gray-600">{label}</span>
  </Link>
)

const TransactionItem = ({ title, amount, date, icon }) => (
  <div className="flex items-center bg-white rounded-lg p-4 shadow mb-4">
    <div className="bg-[#F3E5F5] rounded-full p-3 mr-4">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
    <span className={`font-semibold ${amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
      {amount}
    </span>
  </div>
)

const PromotionCard = ({ title, description, buttonText, href, bgColor }) => (
  <div className={`rounded-lg p-6 shadow-lg ${bgColor}`}>
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    <p className="text-sm text-gray-100 mb-4">{description}</p>
    <Button asChild>
      <Link href={href}>{buttonText}</Link>
    </Button>
  </div>
)

const VirtualCard = () => (
  <div className="bg-gradient-to-r from-[#7B2CBF] to-[#9D50BB] rounded-xl p-4 shadow-lg w-full aspect-[1.586/1] flex flex-col justify-between">
    <div className="flex justify-center items-center mb-4">
      <Image src="/logobig.png" alt="Platapay Logo" width={200} height={50} className="object-contain" />
    </div>
    <div className="text-gray-300 text-xl tracking-widest mb-4 font-bold" style={{textShadow: "1px 1px 1px #000, -1px -1px 1px #fff"}}>•••• •••• •••• 5678</div>
    <div className="flex justify-between items-end">
      <div className="text-white text-sm">
        <div className="opacity-70">Card Holder</div>
        <div className="text-gray-300 text-lg tracking-[0.2em] font-bold" style={{textShadow: "1px 1px 1px #000, -1px -1px 1px #fff"}}>LYN PLATA</div>
      </div>
      <div className="text-white text-sm">
        <div className="opacity-70">Expires</div>
        <div>12/25</div>
      </div>
    </div>
  </div>
)

export default function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const promotions = [
    {
      title: "PaSend Promo",
      description: "Send money to anyone and get a chance to win ₱1,000 cashback!",
      buttonText: "Send Now",
      href: "/pasend",
      bgColor: "bg-purple-600"
    },
    {
      title: "PaLoad Bonus",
      description: "Get 5% extra load on your next PaLoad transaction!",
      buttonText: "Load Now",
      href: "/paload",
      bgColor: "bg-indigo-600"
    },
    {
      title: "Remit Rewards",
      description: "Earn double points on international remittances this month!",
      buttonText: "Learn More",
      href: "/remit",
      bgColor: "bg-blue-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex-1 overflow-y-auto bg-gray-100 pb-24">
      {/* Wallet Balance Section */}
      <div className="bg-[#4B0082] text-white p-6 rounded-b-[40px] shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Total Balance</h2>
        <p className="text-4xl font-bold mb-4">₱10,000.00</p>
        <div className="flex justify-between mb-4">
          <Button variant="outline" className="bg-white text-[#4B0082] hover:bg-gray-100 flex-1 mr-2">
            <Plus className="w-4 h-4 mr-2" /> Add Money
          </Button>
          <Button variant="outline" className="bg-white text-[#4B0082] hover:bg-gray-100 flex-1 ml-2">
            <ArrowUp className="w-4 h-4 mr-2" /> Send Money
          </Button>
        </div>
        <VirtualCard />
      </div>

      {/* Main Features */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Main Features</h3>
        <div className="grid grid-cols-2 gap-4">
          <FeatureButton icon={<Send className="w-6 h-6" />} label="PaSend" href="/pasend" />
          <FeatureButton icon={<Smartphone className="w-6 h-6" />} label="PaLoad" href="/paload" />
          <FeatureButton icon={<Globe className="w-6 h-6" />} label="Remit" href="/remit" />
          <FeatureButton icon={<Zap className="w-6 h-6" />} label="Pay Bills" href="/pay-bills" />
        </div>
      </div>

      {/* Promotions Slider */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Special Offers</h3>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            <CarouselItem>
              <PromotionCard {...promotions[activeIndex]} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Recent Transactions */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <TransactionItem
          title="PaLoad: Mobile Top-up"
          amount="- ₱100.00"
          date="Today, 2:30 PM"
          icon={<Smartphone className="text-[#4B0082] w-6 h-6" />}
        />
        <TransactionItem
          title="Remit: International Transfer"
          amount="- ₱5,000.00"
          date="Yesterday, 10:15 AM"
          icon={<Globe className="text-[#4B0082] w-6 h-6" />}
        />
      </div>
    </div>
  )
}



