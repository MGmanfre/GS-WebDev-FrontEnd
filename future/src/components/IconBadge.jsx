import React from "react";

export default function IconBadge({ icon, textClass = "text-white", bgClass = 'bg-blue-700', size = 'h-16 w-16' }) {
  return (
    <div className={`${size} inline-flex items-center justify-center ${bgClass} ${textClass} rounded-xl shadow-md`} aria-hidden="true">
      {React.isValidElement(icon) ? React.cloneElement(icon, { className: 'w-6 h-6' }) : icon}
    </div>
  )
}