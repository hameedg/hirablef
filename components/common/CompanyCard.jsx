const CompanyCard = ({
  openModal,
  name,
  logo,
  tagline,
  employees,
  funding,
  tags,
  openings,
}) => (
  <>
    <div className="border p-3.8 group bg-white cursor-pointer rounded-md hover:shadow-lg duration-150 ease-in">
      <button
        type="button"
        onClick={openModal}
        className="text-left w-full h-full"
      >
        <div className="flex justify-between mb-2.5">
          <img
            width={90}
            height={90}
            className="h-[5.625rem] rounded-md"
            src={logo}
            alt={name}
          />
          <div className="border rounded-md bg-gray-100 p-2 px-3">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current text-[#FFA500] font-black"
                viewBox="0 0 251 237"
              >
                <path d="M197.566 236.587C200.546 236.332 203.274 234.835 205.063 232.468C206.852 230.101 207.533 227.089 206.932 224.195L191.755 151.178L247.491 100.918H247.488C250.525 98.1814 251.656 93.9421 250.388 90.0806C249.117 86.2191 245.679 83.4481 241.594 82.9958L166.584 74.6946L135.435 6.84148C133.731 3.15167 130.004 0.784424 125.899 0.784424C121.797 0.784424 118.07 3.15174 116.367 6.84148L85.217 74.6946L10.2073 82.9958C6.12249 83.451 2.68433 86.2218 1.41365 90.0806C0.142673 93.9421 1.27624 98.1817 4.31049 100.921L60.0468 151.181L44.8697 224.198C44.051 228.171 45.6568 232.25 48.9774 234.632C52.3008 237.016 56.7261 237.262 60.2985 235.264L125.899 198.426L191.502 235.264C193.342 236.301 195.455 236.762 197.564 236.587L197.566 236.587ZM181.762 205.984L131.088 177.527C127.873 175.721 123.931 175.721 120.717 177.527L70.0422 205.984L81.7502 149.57C82.4916 146.009 81.2836 142.322 78.5728 139.863L35.506 101.002L93.4575 94.601C97.1158 94.1945 100.29 91.9217 101.819 88.6126L125.901 36.1227L149.983 88.6126H149.986C151.514 91.9217 154.689 94.1945 158.347 94.601L216.299 101.002L173.232 139.863V139.866C170.521 142.325 169.313 146.009 170.054 149.57L181.762 205.984Z" />
              </svg>

              <div className="flex items-center justify-center ml-1 font-medium text-gray-700 leading-4 text-xs">
                Jobs & Assignments:
              </div>
            </div>
            <div className="text-[24px] font-medium text-gray-900 leading-4 mt-2">
              {openings}
            </div>
            <div className="text-xs font-medium text-gray-700 leading-4 mt-2">
              Total Openings
            </div>
          </div>
        </div>
        <h4 className="font-medium text-base leading-snug mb-2">{name}</h4>
        <div className="flex items-center cursor-pointer mb-2 break-words">
          <p className="leading-4 text-sm line-clamp-2 h-8">{tagline}</p>
        </div>
        <div className="flex">
          <div className="flex items-center whitespace-pre-wrap mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="w-4 h-4 fill-current opacity-60 mr-0.5"
              viewBox="0 0 752 752"
            >
              <defs>
                <clipPath id="a">
                  <path d="m158 139.21h436v473.58h-436z" />
                </clipPath>
              </defs>
              <path d="m593.06 593.06v19.734h-434.11v-19.734c0-57.566 22.867-112.78 63.574-153.48 40.703-40.707 95.914-63.578 153.48-63.578 57.57 0 112.78 22.871 153.48 63.578 40.707 40.703 63.574 95.914 63.574 153.48zm-217.06-256.52c26.168 0 51.262-10.395 69.766-28.895 18.504-18.504 28.898-43.602 28.898-69.766 0-26.168-10.395-51.262-28.898-69.766s-43.598-28.898-69.766-28.898c-26.164 0-51.262 10.395-69.762 28.898-18.504 18.504-28.898 43.598-28.898 69.766 0 26.164 10.395 51.262 28.898 69.766 18.5 18.5 43.598 28.895 69.762 28.895z" />
            </svg>

            <p className="text-xs text-gray-700 antialiased">{employees}</p>
          </div>
          <div className="flex items-center whitespace-pre-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="w-4 h-4 fill-current opacity-60 mr-0.5"
              viewBox="0 0 752 752"
            >
              <defs>
                <clipPath id="b">
                  <path d="m201 139.21h350v107.79h-350z" />
                </clipPath>
                <clipPath id="a">
                  <path d="m155 284h442v328.79h-442z" />
                </clipPath>
              </defs>
              <path d="m550.24 188.9-62.191 57.871-224.12 0.003906-62.191-57.875s30.973-43.352 81.98-49.027c49.949-5.5508 67.277 25.066 92.316 26.332 24.973-1.2656 42.363-31.879 92.25-26.332 51.066 5.6758 81.957 49.027 81.957 49.027z" />
              <path d="m384.58 466.77v43.691c6.625-1.0781 12.055-3.6367 16.188-7.7969 4.1914-4.1641 6.2578-9.0352 6.2578-14.586 0-4.9961-1.7578-9.3125-5.2695-12.918-3.4609-3.6406-9.2188-6.4141-17.176-8.3906z" />
              <path d="m348.19 410.81c0 3.9766 1.418 7.6484 4.2539 11.008 2.8359 3.4531 7.1211 6.1719 12.871 8.2656v-38.727c-5.2266 1.4492-9.3711 4.0078-12.469 7.5859-3.1172 3.6289-4.6562 7.5195-4.6562 11.867z" />
              <path d="m504.85 284.05h-257.71s-123.76 97.402-83.078 276.94c0 0 13.52 51.801 75.754 51.801h272.5c62.156 0 75.633-51.801 75.633-51.801 40.668-179.54-83.098-276.94-83.098-276.94zm-79.852 234.12c-9.6836 9.25-23.16 14.922-40.422 17.02v20.938l-19.262 0.003906v-20.418c-15.305-1.5078-27.719-6.3164-37.293-14.43-9.5586-8.0469-15.66-19.426-18.301-34.133l34.637-3.082c1.4219 5.918 4.0547 11.074 7.9414 15.422 3.8984 4.3125 8.2461 7.457 13.008 9.3711v-46.898c-17.328-4.1641-30.062-10.512-38.137-18.93-8.125-8.543-12.148-18.746-12.148-30.891 0-12.211 4.5469-22.508 13.719-30.836 9.1719-8.293 21.348-13.105 36.566-14.367v-11.102h19.258v11.102c14.062 1.4492 25.281 5.4883 33.578 12.148 8.3242 6.6602 13.625 15.629 15.969 26.797l-33.609 3.6641c-2.0352-8.7578-7.3359-14.766-15.938-17.883v43.75c21.242 4.9023 35.703 11.164 43.379 18.867 7.7383 7.7422 11.559 17.641 11.559 29.785 0.015625 13.441-4.8242 24.883-14.504 34.102z" />
            </svg>

            <p className="text-xs text-gray-700 antialiased">{funding}</p>
          </div>
        </div>
        <div className="flex items-center mt-1.5">
          {tags.map((t) => (
            <div
              key={t}
              className="text-[11px] leading-3 font-medium text-gray-700 tracking-normal mr-1"
            >
              {t}
            </div>
          ))}
        </div>
      </button>
    </div>
  </>
);

export default CompanyCard;
