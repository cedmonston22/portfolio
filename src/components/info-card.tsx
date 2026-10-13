"use client";

import { useState } from "react";
import Image from "next/image";
import FacetCard from "./facet-card";

const PHOTOS = [
  { src: "/headshot.jpg", alt: "Cole Edmonston", fit: "object-cover object-top" },
  { src: "/baseball-action.jpg", alt: "Cole Edmonston playing baseball", fit: "object-cover object-center" },
];

const DETAILS = [
  { label: "Currently building", value: "Catan Board Visualizer" },
  { label: "Studying", value: "Computer Science @ Cal Poly" },
  { label: "Seeking", value: "Summer 2027 internships" },
];

export default function InfoCard(): React.ReactElement {
  const [active, setActive] = useState(0);

  return (
    <FacetCard className="w-full max-w-[23rem]" contentClassName="p-4">
      <div className="facet-clip relative aspect-[5/6] w-full overflow-hidden bg-bg-hover [--facet-cut:14px]">
        {PHOTOS.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            sizes="(max-width: 420px) 90vw, 336px"
            className={`${photo.fit} transition-opacity duration-500 ease-in-out ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute bottom-0.5 left-1/2 z-10 flex -translate-x-1/2">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Show ${photo.alt}`}
              aria-current={active === i}
              onClick={() => setActive(i)}
              className="group flex items-center justify-center p-[9px]"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-colors ${
                  active === i ? "bg-white" : "bg-white/50 group-hover:bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <dl className="mt-3.5 grid gap-2.5 px-1 pb-1">
        {DETAILS.map((detail) => (
          <div key={detail.label}>
            <dt className="font-mono text-[10px] tracking-[0.18em] text-gold uppercase">
              {detail.label}
            </dt>
            <dd className="mt-0.5 text-sm font-medium text-text-primary">{detail.value}</dd>
          </div>
        ))}
      </dl>
    </FacetCard>
  );
}
