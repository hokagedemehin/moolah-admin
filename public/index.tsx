export const MobileWebSVGCompponent = ({ active }: { active: boolean }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
      <path
        stroke={active ? "#fff" : "#2E3E5C"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M25 7.5v2.237a9.01 9.01 0 0 0-1.063-.062h-5.35c-2.675 0-3.562.887-3.562 3.563v6.387H7.5c-4 0-5-1-5-5V7.5c0-4 1-5 5-5H20c4 0 5 1 5 5ZM2.5 14.875H15M11.25 19.625V25M7.438 25H15"
      />
      <path
        stroke={active ? "#fff" : "#2E3E5C"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M27.475 13.238v10.7c0 2.675-.888 3.563-3.563 3.563h-5.35c-2.675 0-3.562-.888-3.562-3.563v-10.7c0-2.675.887-3.562 3.563-3.562h5.35c.387 0 .75.025 1.062.062 1.85.238 2.5 1.213 2.5 3.5Z"
      />
      <path
        stroke={active ? "#fff" : "#2E3E5C"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M22.5 24c0 .69-.56 1.25-1.25 1.25a1.251 1.251 0 0 1-.987-2.015 1.251 1.251 0 0 1 1.805-.181c.263.233.432.572.432.946Z"
      />
      <path
        stroke={active ? "#fff" : "#2E3E5C"}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 12.5h2.5"
      />
    </svg>
  );
};

export const MobileSVGComponent = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
    <path
      stroke={active ? "#fff" : "#2E3E5C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M24.75 9.094V21.28c0 4.875-1.219 6.094-6.094 6.094h-7.312c-4.875 0-6.094-1.219-6.094-6.094V9.094C5.25 4.219 6.469 3 11.344 3h7.312c4.875 0 6.094 1.219 6.094 6.094ZM17.438 7.266h-4.875"
    />
    <path
      stroke={active ? "#fff" : "#2E3E5C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 23.84a1.889 1.889 0 1 0 0-3.777 1.889 1.889 0 0 0 0 3.778Z"
    />
  </svg>
);

export const DesktopSVGComponent = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
    <path
      stroke={active ? "#fff" : "#2E3E5C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.05 2.5h13.887c4.45 0 5.563 1.112 5.563 5.55v7.912c0 4.45-1.113 5.55-5.55 5.55H8.05c-4.438.013-5.55-1.1-5.55-5.537V8.05c0-4.438 1.112-5.55 5.55-5.55ZM15 21.524V27.5M2.5 16.25h25M9.375 27.5h11.25"
    />
  </svg>
);

export const LoanSVGComponent = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
    <path
      stroke={active ? "#fff" : "#2E3E5C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.645 20.28H10.62M19.645 15.047H10.62M14.064 9.825H10.62"
    />
    <path
      stroke={active ? "#fff" : "#2E3E5C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.886 3.438-9.611.004c-3.45.022-5.587 2.292-5.587 5.754v11.495c0 3.48 2.153 5.759 5.633 5.759l9.611-.004c3.45-.021 5.588-2.292 5.588-5.755V9.196c0-3.48-2.154-5.758-5.634-5.758Z"
      clipRule="evenodd"
    />
  </svg>
);

export const LoanPendingSVGComponent = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
    <path
      stroke={active ? "#fff" : "#2E3E5C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.063 2.5v25M8.688 5l10.124 4.375c4.125 1.75 4.125 4.75.25 6.75L8.688 21.25"
    />
  </svg>
);

export const LoanRejectedSVGComponent = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
    <path
      stroke={active ? "#fff" : "#2E3E5C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.625 2.5h-7.25c-.85 0-2.05.5-2.65 1.1L3.6 8.725c-.6.6-1.1 1.8-1.1 2.65v7.25c0 .85.5 2.05 1.1 2.65L8.725 26.4c.6.6 1.8 1.1 2.65 1.1h7.25c.85 0 2.05-.5 2.65-1.1l5.125-5.125c.6-.6 1.1-1.8 1.1-2.65v-7.25c0-.85-.5-2.05-1.1-2.65L21.275 3.6c-.6-.6-1.8-1.1-2.65-1.1ZM10.625 19.375l8.75-8.75M19.375 19.375l-8.75-8.75"
    />
  </svg>
);

export const LoanDisbursedSVGComponent = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
    <path
      stroke={active ? "#fff" : "#2E3E5C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.25 7.9 10.613-3.537c4.762-1.588 7.35 1.012 5.774 5.775L22.1 20.75c-2.375 7.138-6.275 7.138-8.65 0L12.4 17.6l-3.15-1.05c-7.138-2.375-7.138-6.262 0-8.65ZM12.637 17.063l4.476-4.488"
    />
  </svg>
);
