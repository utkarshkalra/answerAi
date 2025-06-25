import { memo } from "react";

const AccordionButton = memo(
  ({ onClick = () => {}, open }: { onClick?: () => void; open: boolean }) => {
    return (
      <button
        className="px-4 py-2 rounded-full border border-[#ddff7f]"
        onClick={onClick}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="#ddff7f"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008Z"
              fill="#C8E972"
            />
          </svg>
        )}
      </button>
    );
  }
);

export default AccordionButton;
