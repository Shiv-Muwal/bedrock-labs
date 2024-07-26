const Icons = ({ icon, className }) => {
  const iconList = {
    Telegram_Icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM5.69082 14.6219L22.5902 8.1052C23.3613 7.75635 24.1066 8.29107 23.8121 9.47202L20.9346 23.0334C20.7334 23.998 20.153 24.2268 19.3447 23.7817L14.9612 20.5438L12.8537 22.5931C12.8459 22.6007 12.8381 22.6082 12.8303 22.6157C12.5952 22.8431 12.4003 23.0315 11.9759 23.0315L12.2752 18.5594L12.2733 18.5584H12.2752L20.4084 11.2182C20.7649 10.9017 20.3312 10.7464 19.8565 11.0352L9.81796 17.3689L5.47922 16.0154C4.54418 15.7285 4.53751 15.0851 5.69082 14.6219Z" fill="white"/>
        </svg>
        
    ),
    Discord_Icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM18.9439 8.28403L19.2279 8C22.0526 8.05044 24.6109 10.0059 24.6109 10.0059C27.4855 16.0069 27.3019 21.1885 27.3019 21.1885C24.962 24.214 21.485 23.9966 21.485 23.9966L20.298 22.4922C22.3871 22.0411 23.7079 20.1856 23.7079 20.1856C23.7079 20.1856 20.5653 22.3252 16.0521 22.3252C11.5389 22.3252 8.3964 20.1856 8.3964 20.1856C8.3964 20.1856 9.71667 22.0411 11.8063 22.4922L10.6197 23.9966C10.6197 23.9966 7.14273 24.214 4.80237 21.1885C4.80237 21.1885 4.61824 16.0069 7.49336 10.0059C7.49336 10.0059 10.0511 8.04995 12.8763 8L13.1604 8.28403C13.1604 8.28403 10.151 9.16993 8.4297 10.7076C8.4297 10.7076 11.5727 8.7855 16.0521 8.7855C20.5316 8.7855 23.6741 10.7076 23.6741 10.7076C21.9527 9.16993 18.9439 8.28403 18.9439 8.28403ZM10.6525 17.2434C10.6525 18.3967 11.5218 19.3663 12.5918 19.3663C13.678 19.3663 14.5472 18.3967 14.5472 17.2434C14.5644 16.0735 13.6785 15.1205 12.5918 15.1205C11.5051 15.1205 10.6525 16.0901 10.6525 17.2434ZM17.6236 17.2434C17.6236 18.3967 18.4924 19.3663 19.5624 19.3663C20.6486 19.3663 21.5178 18.4133 21.5178 17.2434C21.5178 16.0735 20.6486 15.1205 19.5624 15.1205C18.4762 15.1205 17.6236 16.0901 17.6236 17.2434Z" fill="white"/>
        </svg>
        
    ),
    Twitter_Icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM23.4682 8L17.5158 14.7757L23.9867 24H19.2258L14.8668 17.787L9.41002 24H8L14.2417 16.8955L8 8H12.7608L16.8875 13.882L22.0582 8H23.4682ZM12.0851 9.04127H9.91893L19.8904 23.0099H22.0571L12.0851 9.04127Z" fill="white"/>
        </svg>
        
    ),
    Circle_Icon: (
      <svg
        width="22"
        height="12"
        viewBox="0 0 22 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9182 5.9999C11.9182 9.31359 9.25026 12 5.95902 12C2.66779 12 0 9.3144 0 5.9999C0 2.6854 2.66799 0 5.95902 0C9.25005 0 11.9182 2.6862 11.9182 5.9999ZM15.4765 11.646C17.1221 11.646 18.4561 9.11732 18.4561 5.99801C18.4561 2.8787 17.1221 0.35 15.4765 0.35C13.8309 0.35 12.4969 2.8787 12.4969 5.99801C12.4969 9.11732 13.8309 11.646 15.4765 11.646ZM20.0823 11.0614C20.6611 11.0614 21.1303 8.79588 21.1303 6.00101C21.1303 3.20635 20.6615 0.940625 20.0826 0.940625C19.5036 0.940625 19.0344 3.20695 19.0344 6.00101C19.0344 8.79507 19.5036 11.0614 20.0823 11.0614Z"
          fill="#333333"
        />
      </svg>
    ),
    Cross_Icon:(
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_43_475)">
<path fillRule="evenodd" clipRule="evenodd" d="M9.99998 8.72721L3.96972 2.69696L2.69693 3.96976L8.72718 10L2.69692 16.0303L3.96972 17.303L9.99998 11.2728L16.0303 17.3031L17.3031 16.0303L11.2728 10L17.3031 3.96973L16.0303 2.69694L9.99998 8.72721Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_43_475">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

    )
  };
  return (
    <span className={`inline-block d-flex ${className}`}>
      {icon && iconList[icon]}
    </span>
  );
};
export default Icons;
