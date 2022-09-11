interface Props {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  noIcon?: boolean;
}

function Button({ title, onClick, width, loading, padding, noIcon }: Props) {
  return (
    <button
      className={`ease group relative z-30 box-border inline-flex ${
        width ? width : "w-auto"
      } ${padding} cursor-pointer items-center justify-center overflow-hidden rounded bg-indigo-600 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none`}
      onClick={onClick}
    >
      <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>

      <span className="relative z-20 flex items-center font-semibold">
        {noIcon && (
          <svg
            className="relative mr-2 h-5 w-5 flex-shrink-0 text-white fill-white"
	          viewBox="0 0 490 490"
          >
          <g>
            <g>
              <path d="M472.9,359.85H17.1c-6.2,0-11.3,5.1-11.3,11.3c0,6.2,5.1,11.3,11.3,11.3h455.4c6.2,0,11.3-5.1,11.3-11.3
                S478.7,359.85,472.9,359.85z"/>
              <path d="M452.7,404.25H37.3c-6.2,0-11.3,5.1-11.3,11.3c0,6.2,5.1,11.3,11.3,11.3h415.3c6.2,0,11.3-5.1,11.3-11.3
                C463.9,409.25,458.9,404.25,452.7,404.25z"/>
              <path d="M0,63.15v263.7h490V63.15H0z M245,300.35c-48.6,0-88.3-47.1-88.3-105.4s39.7-105.4,88.3-105.4s88.3,47.1,88.3,105.4
                C333.3,252.95,293.6,300.35,245,300.35z"/>
              <path d="M280.5,219.75c0-19.2-15.7-34.9-34.9-34.9c-8.2,0-14.9-6.7-14.9-14.9c0-8.2,6.7-14.9,14.9-14.9c4.2,0,8,1.7,10.9,4.7
                c3.8,4,10.1,4.2,14.1,0.4c4-3.8,4.2-10.1,0.4-14.1c-4.2-4.5-9.6-7.8-15.4-9.5v-6.9c0-5.5-4.5-10-10-10s-10,4.5-10,10v6.9
                c-14.4,4.3-24.9,17.7-24.9,33.4c0,19.2,15.7,34.9,34.9,34.9c8.2,0,14.9,6.7,14.9,14.9c0,8.2-6.7,14.9-14.9,14.9
                c-4.2,0-8-1.7-10.9-4.7c-3.8-4-10.1-4.2-14.1-0.4c-4,3.8-4.2,10.1-0.4,14.1c4.2,4.5,9.6,7.8,15.4,9.5v6.9c0,5.5,4.5,10,10,10
                s10-4.5,10-10v-6.9C270,248.85,280.5,235.45,280.5,219.75z"/>
            </g>
          </g>
          </svg>
        )}
        {loading ? "Loading..." : title}
      </span>
    </button>
  );
}

export default Button;