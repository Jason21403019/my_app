"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const events = {
  "2024-12-24": ["10:00 AM - Team meeting", "2:00 PM - Submit report"],
  "2024-12-25": ["10:00 AM - Team meeting", "2:00 PM - Submit report"],
  "2024-12-26": ["1:00 PM - Lunch with client"],
  // 更多日期和行程
};

export default function CalendarDemo() {
  const [date, setDate] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState(null);
  const [displayedDate, setDisplayedDate] = useState(null);

  const formatDate = (date) => {
    if (date instanceof Date) {
      return date.toISOString().split("T")[0]; // 格式化為 YYYY-MM-DD
    }
    return null;
  };

  const getPreviousDate = (date) => {
    if (date instanceof Date) {
      const previousDate = new Date(date);
      previousDate.setDate(previousDate.getDate() + 1); // 將日期減 1 天
      return previousDate;
    }
    return null;
  };

  const handleDayMouseEnter = (day) => {
    if (day instanceof Date) {
      const previousDate = getPreviousDate(day); // 計算前一天的日期
      setHoveredDate(formatDate(day)); // 設定 hoveredDate 為明天的日期（UI 高亮用）
      setDisplayedDate(formatDate(previousDate)); // 設定 displayedDate 為今天的日期（顯示行程）
    }
  };

  const handleDayMouseLeave = () => {
    setHoveredDate(null);
    setDisplayedDate(null);
  };

  return (
    <div className="relative">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md bg-gray-200 flex items-center justify-center"
        onDayMouseEnter={handleDayMouseEnter}
        onDayMouseLeave={handleDayMouseLeave}
      />
      {displayedDate && events[displayedDate] && (
        <div className="absolute bg-white border rounded shadow-lg p-2">
          <strong>{displayedDate}</strong>
          <ul>
            {events[displayedDate].map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
