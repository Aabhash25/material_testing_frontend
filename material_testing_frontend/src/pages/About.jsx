import aboutIllustration from "../assets/images/Construction-amico.svg";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3-geo";
import * as topojson from "topojson-client";

import lab1 from "../assets/images/lab/01.jpeg";
import lab2 from "../assets/images/lab/02.jpeg";
import lab3 from "../assets/images/lab/03.jpeg";
import lab4 from "../assets/images/lab/04.jpeg";
import lab5 from "../assets/images/lab/05.jpeg";
import lab6 from "../assets/images/lab/06.jpeg";
import lab7 from "../assets/images/lab/07.jpeg";
import lab8 from "../assets/images/lab/08.jpeg";
import lab9 from "../assets/images/lab/09.jpeg";
import lab10 from "../assets/images/lab/10.jpeg";
import lab11 from "../assets/images/lab/11.jpeg";
import lab12 from "../assets/images/lab/12.jpeg";

const SERVED_STATES = [
  "Texas",
  "Florida",
  "Georgia",
  "Alabama",
  "Tennessee",
  "North Carolina",
  "South Carolina",
  "Virginia",
  "West Virginia",
];

const STATE_LIST = [
  { code: "TX", name: "Texas" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "AL", name: "Alabama" },
  { code: "TN", name: "Tennessee" },
  { code: "NC", name: "North Carolina" },
  { code: "SC", name: "South Carolina" },
  { code: "VA", name: "Virginia" },
  { code: "WV", name: "West Virginia" },
];

const LAB_PHOTOS = [
  lab1,
  lab2,
  lab3,
  lab4,
  lab5,
  lab6,
  lab7,
  lab8,
  lab9,
  lab10,
  lab11,
  lab12,
];

const CREDENTIALS = [
  {
    label: "Women Owned",
    sub: "Certified Business",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M12 2a5 5 0 100 10A5 5 0 0012 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" />
      </svg>
    ),
  },
  {
    label: "Georgia Entity",
    sub: "Registered in GA",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    label: "Fast Turnaround",
    sub: "Reports as soon as 48 Hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
      </svg>
    ),
  },
  {
    label: "Lab Facility",
    sub: "Spacious, 1600 Sq. Ft",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    label: "Office Location",
    sub: "Great Area, 0.9 Mile from I-8F Exit",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
];

function USMap() {
  const svgRef = useRef(null);
  const [paths, setPaths] = useState([]);
  const width = 800;
  const height = 500;

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json")
      .then((r) => r.json())
      .then((us) => {
        const projection = d3
          .geoAlbersUsa()
          .scale(1000)
          .translate([width / 2, height / 2]);
        const pathGen = d3.geoPath().projection(projection);
        const states = topojson.feature(us, us.objects.states);
        const rendered = states.features.map((feature) => ({
          d: pathGen(feature),
          name: feature.properties.name,
          served: SERVED_STATES.includes(feature.properties.name),
        }));
        setPaths(rendered);
      });
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill={p.served ? "#F97316" : "#E5E7EB"}
          stroke="#ffffff"
          strokeWidth={1}
          className="transition-colors duration-200"
          style={{ cursor: p.served ? "pointer" : "default" }}
          onMouseEnter={(e) => {
            if (!p.served) e.target.setAttribute("fill", "#D1D5DB");
            else e.target.setAttribute("fill", "#EA6A0A");
          }}
          onMouseLeave={(e) => {
            e.target.setAttribute("fill", p.served ? "#F97316" : "#E5E7EB");
          }}
        >
          <title>{p.name}</title>
        </path>
      ))}
    </svg>
  );
}

export default function About() {
  return (
    <div className="pt-24">
      {/* ── HERO ── */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
                Who We Are
              </span>
            </div>
            <h1
              className="font-display text-white font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              ABOUT <br />
              <span className="text-accent">SSN LAB</span>
            </h1>
            <p className="font-body text-white/60 text-base leading-relaxed max-w-lg">
              SSN Material Testing Laboratory has been serving the construction
              industry in South Atlantic Region and Neighboring States. Our
              Current Service areas are TX, FL, GA, AL, TN, NC, SC, VA, WV. We
              provide certified, accurate, and timely test reports that
              engineers, developers or contractors trust.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(249,115,22,0.11) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "clamp(220px, 28vw, 400px)",
                height: "clamp(220px, 28vw, 400px)",
                border: "1px dashed rgba(249,115,22,0.18)",
                animation: "spin 30s linear infinite",
              }}
            />
            <img
              src={aboutIllustration}
              alt="About SSN illustration"
              className="relative w-full max-w-xs md:max-w-sm drop-shadow-xl z-10"
            />
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </div>
        </div>
      </section>

      {/* ── STRIP ── */}
      <div className="bg-accent">
        <div className="grid grid-cols-2 gap-px bg-white/20 md:hidden">
          {CREDENTIALS.map((c, i) => (
            <div
              key={i}
              className="bg-accent flex items-center gap-3 px-5 py-5"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                {c.icon}
              </div>
              <div>
                <div className="font-display text-white font-extrabold text-xs uppercase tracking-widest leading-none">
                  {c.label}
                </div>
                <div className="font-ui text-white/70 text-[10px] uppercase tracking-[1.5px] mt-0.5">
                  {c.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex justify-between items-center px-16 py-4 gap-4">
          {CREDENTIALS.map((c, i) => (
            <>
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="font-display text-white font-extrabold text-sm uppercase tracking-widest leading-none">
                    {c.label}
                  </div>
                  <div className="font-ui text-white/70 text-[10px] tracking-[2px] mt-0.5">
                    {c.sub}
                  </div>
                </div>
              </div>
              {i < CREDENTIALS.length - 1 && (
                <div className="w-px h-8 bg-white/20" />
              )}
            </>
          ))}
        </div>
      </div>

      {/* ── LAB PHOTOS ── */}
      <section className="bg-bg border-b border-gray-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Inside Our Lab
            </span>
          </div>
          <h2
            className="font-display text-primary font-extrabold leading-none mb-10"
            style={{
              fontSize: "clamp(24px, 3.5vw, 42px)",
              letterSpacing: "-1px",
            }}
          >
            OUR <span className="text-accent">FACILITY</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div
              className="col-span-2 row-span-2 relative overflow-hidden group"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src={LAB_PHOTOS[0]}
                alt="Lab facility"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {LAB_PHOTOS.slice(1, 9).map((photo, i) => (
              <div
                key={i}
                className="relative overflow-hidden group"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={photo}
                  alt={`Lab photo ${i + 2}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
            {LAB_PHOTOS.slice(9, 12).map((photo, i) => (
              <div
                key={i + 9}
                className="relative overflow-hidden group"
                style={{ aspectRatio: "4 / 3" }}
              >
                <img
                  src={photo}
                  alt={`Lab photo ${i + 10}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA MAP ── */}
      <section className="bg-white py-20 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Where We Serve
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2
              className="font-display text-primary font-extrabold leading-none"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                letterSpacing: "-1px",
              }}
            >
              OUR <span className="text-accent">SERVICE AREA</span>
            </h2>
            <p className="font-body text-gray-500 text-sm leading-relaxed max-w-sm">
              We serve the South Atlantic Region and neighboring states —
              certified testing across 9 states.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <USMap />
              <div className="flex items-center gap-6 mt-3 pl-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-accent" />
                  <span className="font-ui text-gray-500 text-xs">
                    Service Area
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-gray-200" />
                  <span className="font-ui text-gray-500 text-xs">
                    Not Currently Served
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-ui text-gray-400 text-[10px] uppercase tracking-[3px] mb-2">
                Covered States
              </p>
              {STATE_LIST.map(({ code, name }) => (
                <div
                  key={code}
                  className="flex items-center gap-4 border border-gray-200 px-4 py-3 hover:border-accent/40 hover:bg-orange-50 transition-all duration-200"
                >
                  <span className="font-display text-accent font-extrabold text-sm w-8 shrink-0">
                    {code}
                  </span>
                  <div className="w-px h-4 bg-gray-200" />
                  <span className="font-ui text-gray-600 text-xs tracking-wide">
                    {name}
                  </span>
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section
        className="flex flex-col md:flex-row border-b border-gray-200"
        style={{ minHeight: "420px" }}
      >
        <div className="md:w-1/2 relative overflow-hidden h-56 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
            alt="Our mission"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,35,50,0.5) 0%, rgba(26,35,50,0.1) 100%)",
            }}
          />
          <div className="absolute top-6 left-6 font-ui text-white text-xs font-bold uppercase tracking-[2.5px] bg-accent px-3 py-1.5">
            Mission
          </div>
          <div
            className="absolute bottom-4 right-5 font-display font-extrabold leading-none select-none pointer-events-none text-white"
            style={{
              fontSize: "clamp(72px, 10vw, 110px)",
              opacity: 0.08,
              letterSpacing: "-4px",
            }}
          >
            01
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center px-10 py-14 md:px-16 bg-white">
          <h2
            className="font-display text-primary font-extrabold leading-tight mb-4"
            style={{
              fontSize: "clamp(24px, 3vw, 38px)",
              letterSpacing: "-0.5px",
            }}
          >
            OUR MISSION
          </h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <p className="font-body text-gray-500 text-sm leading-relaxed max-w-md">
            To provide the construction industry with precise, reliable, and
            timely material testing services that ensure the safety and quality
            of infrastructure projects across United States.
          </p>
        </div>
      </section>

      {/* ── VISION ── */}
      <section
        className="flex flex-col md:flex-row-reverse border-b border-gray-200"
        style={{ minHeight: "420px" }}
      >
        <div className="md:w-1/2 relative overflow-hidden h-56 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1590644365607-01f7b5f0e409?w=900&q=80"
            alt="Our vision"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(225deg, rgba(26,35,50,0.5) 0%, rgba(26,35,50,0.1) 100%)",
            }}
          />
          <div className="absolute top-6 right-6 font-ui text-white text-xs font-bold uppercase tracking-[2.5px] bg-accent px-3 py-1.5">
            Vision
          </div>
          <div
            className="absolute bottom-4 left-5 font-display font-extrabold leading-none select-none pointer-events-none text-white"
            style={{
              fontSize: "clamp(72px, 10vw, 110px)",
              opacity: 0.08,
              letterSpacing: "-4px",
            }}
          >
            02
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center px-10 py-14 md:px-16 bg-bg">
          <h2
            className="font-display text-primary font-extrabold leading-tight mb-4"
            style={{
              fontSize: "clamp(24px, 3vw, 38px)",
              letterSpacing: "-0.5px",
            }}
          >
            OUR VISION
          </h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <p className="font-body text-gray-500 text-sm leading-relaxed max-w-md">
            To be the most trusted material testing laboratory in United States,
            recognized for accuracy, integrity, and commitment to advancing
            construction quality standards.
          </p>
        </div>
      </section>
    </div>
  );
}
