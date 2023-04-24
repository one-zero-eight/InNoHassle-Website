function FormsIcon(props) {
  return (
    <svg
      width={39}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.296 27.852c0-.982.793-1.778 1.772-1.778H29.25c.979 0 1.773.796 1.773 1.778s-.794 1.778-1.773 1.778H15.068c-.979 0-1.772-.796-1.772-1.778zM13.296 34.963c0-.982.793-1.778 1.772-1.778H29.25c.979 0 1.773.796 1.773 1.778s-.794 1.778-1.773 1.778H15.068c-.979 0-1.772-.796-1.772-1.778zM13.296 20.74c0-.981.793-1.777 1.772-1.777H29.25c.979 0 1.773.796 1.773 1.778s-.794 1.777-1.773 1.777H15.068c-.979 0-1.772-.795-1.772-1.777z"
        fill={`${props.selected ? "#9A2EFF" : "#414141"}`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.038 4.597a3.54 3.54 0 012.507-1.041h8.864c.98 0 1.773.795 1.773 1.777 0 .982-.794 1.778-1.773 1.778H3.545v37.333h31.91V7.111H26.59a1.775 1.775 0 01-1.773-1.778c0-.982.794-1.777 1.773-1.777h8.864c.94 0 1.842.374 2.507 1.04A3.56 3.56 0 0139 7.112v37.333a3.56 3.56 0 01-1.038 2.515A3.54 3.54 0 0135.454 48H3.546a3.54 3.54 0 01-2.507-1.041A3.56 3.56 0 010 44.444V7.111a3.56 3.56 0 011.038-2.514z"
        fill={`${props.selected ? "#9A2EFF" : "#414141"}`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 3.556a7.08 7.08 0 00-5.014 2.082 7.121 7.121 0 00-2.077 5.029h14.182a7.121 7.121 0 00-2.077-5.029A7.08 7.08 0 0019.5 3.556zm-7.521-.432C13.974 1.124 16.679 0 19.5 0c2.82 0 5.526 1.124 7.521 3.124s3.115 4.714 3.115 7.543v1.777c0 .982-.793 1.778-1.772 1.778H10.636c-.979 0-1.772-.796-1.772-1.778v-1.777c0-2.83 1.12-5.542 3.115-7.543z"
        fill={`${props.selected ? "#9A2EFF" : "#414141"}`}
      />
      <path
        d="M11.523 20.74c0 .983-.794 1.779-1.773 1.779-.98 0-1.773-.796-1.773-1.778s.794-1.778 1.773-1.778c.979 0 1.773.796 1.773 1.778zM11.523 27.852c0 .982-.794 1.778-1.773 1.778-.98 0-1.773-.796-1.773-1.778s.794-1.778 1.773-1.778c.979 0 1.773.796 1.773 1.778zM11.523 34.963c0 .982-.794 1.778-1.773 1.778-.98 0-1.773-.796-1.773-1.778s.794-1.778 1.773-1.778c.979 0 1.773.796 1.773 1.778z"
        fill={`${props.selected ? "#9A2EFF" : "#414141"}`}
      />
    </svg>
  );
}

export default FormsIcon;
