import { IconProps } from "@/lib/types/IconProps";

function CanteenIcon({ width, height, className, fill }: IconProps) {
  return (
    <svg
      width={width || 40}
      height={height || 40}
      viewBox="0 -960 960 960"
      xmlns="http://www.w3.org/2000/svg"
      className={"mr-4 hover:cursor-pointer " + className}
      fill={fill}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.457-558.667v-45.021q0-108.609 108.438-175.25Q292.333-845.58 480.12-845.58q187.786 0 296.105 66.642 108.319 66.641 108.319 175.25v45.021H75.457Zm80.919-71.209h647.248q-12.297-61.667-99.988-100.809-87.691-39.141-223.551-39.141-135.861 0-224.144 39.141-88.282 39.142-99.565 100.809Zm-80.92 248.861v-71.209q34 0 57.772-21.334 23.772-21.333 78.518-21.333 54.747 0 74.03 21.333 19.284 21.334 58.391 21.334 39.333 0 60.25-21.334 20.916-21.333 75.583-21.333t75.583 21.333q20.917 21.334 60.171 21.334 39.253 0 58.503-21.334 19.25-21.333 73.997-21.333 54.746 0 79.184 21.333 24.439 21.334 57.106 21.334v71.209q-54.589 0-75.125-21.333t-59.752-21.333q-39.334 0-59.25 21.333-19.917 21.333-74.663 21.333-54.747 0-75.584-21.333-20.837-21.333-60.17-21.333t-60.17 21.333q-20.837 21.333-75.584 21.333-54.746 0-74.03-21.333-19.283-21.333-58.39-21.333-39.275 0-60.41 21.333-21.135 21.333-75.96 21.333Zm75.754 271.138q-30.994 0-53.374-22.38-22.38-22.38-22.38-53.373v-130.036h809.088v130.036q0 30.993-22.38 53.373t-53.374 22.38H151.21Zm0-75.753h657.58v-58.667H151.21v58.667Zm0-58.667h657.58-657.58Zm5.166-385.579H803.624 156.376Z"
      />
    </svg>
  );
}

export default CanteenIcon;
