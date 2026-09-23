import { Phone, Mail, MapPin } from "lucide-react";

const Banner = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-zinc-900 text-white">
      <div
        className="
          mx-auto
          flex min-h-10.5
          max-w-[1640px]
          items-center
          justify-between
          gap-4
          px-4
          sm:px-6
          lg:px-10
        "
      >
        {/* Left Side */}
        <div
          className="
            flex min-w-0
            items-center
            gap-3
            text-xs
            sm:gap-5
            sm:text-sm
            lg:gap-6
          "
        >
          {/* Phone - Always visible */}
          <a
            href="tel:+12025550185"
            className="
              flex shrink-0 items-center gap-1.5
              transition-colors
              hover:text-zinc-300
            "
          >
            <Phone
              size={16}
              strokeWidth={1.8}
              className="shrink-0 sm:h-4.25 sm:w-4.25"
            />

            <span className="whitespace-nowrap">+1-202-555-0185</span>
          </a>

          {/* Email - Tablet and Desktop */}
          <a
            href="mailto:support@example.com"
            className="
              hidden items-center gap-1.5
              whitespace-nowrap
              transition-colors
              hover:text-zinc-300
              sm:flex
            "
          >
            <Mail size={17} strokeWidth={1.8} className="shrink-0" />

            <span>support@example.com</span>
          </a>

          {/* Address - Desktop only */}
          <div
            className="
              hidden min-w-0
              items-center gap-1.5
              lg:flex
            "
          >
            <MapPin size={17} strokeWidth={1.8} className="shrink-0" />

            <span className="truncate whitespace-nowrap">
              1234 Apple St, Springfield, IL 62704
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 items-center">
          <a
            href="#"
            aria-label="X"
            className="
              flex items-center justify-center
              transition-opacity
              hover:opacity-70
            "
          >
            <svg
              className="h-4.25 w-4.25 sm:h-4.75 sm:w-4.75"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26L22.827 21.75h-6.657l-5.214-6.817-5.967 6.817H1.68l7.736-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
