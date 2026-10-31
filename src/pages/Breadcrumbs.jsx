import React from "react";
import './Breadcrumbs.css';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumbs">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`}>
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <a href={import.meta.env.BASE_URL + item.href}>
                  {item.label}
                </a>
              )}

              {!isLast && (
                <span className="breadcrumb-separator"
                  aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}


