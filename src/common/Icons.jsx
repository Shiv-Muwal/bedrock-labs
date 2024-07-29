const Icons = ({ icon, className }) => {
  const iconList = {
    Cross_Icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_43_475)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99998 8.72721L3.96972 2.69696L2.69693 3.96976L8.72718 10L2.69692 16.0303L3.96972 17.303L9.99998 11.2728L16.0303 17.3031L17.3031 16.0303L11.2728 10L17.3031 3.96973L16.0303 2.69694L9.99998 8.72721Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_43_475">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  };
  return (
    <span className={`inline-block d-flex ${className}`}>
      {icon && iconList[icon]}
    </span>
  );
};
export default Icons;
