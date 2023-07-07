import { IconProps } from "@/lib/types/IconProps";

function CalendarAddIcon({ width, height, className, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || 48}
      viewBox="0 -960 960 960"
      width={width || 48}
      fill={fill}
      className={className}
    >
      <path d="M695.935-71.152v-120h-120v-68.37h120v-120h68.13v120h120v68.37h-120v120h-68.13Zm-513.783-82.87q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-535.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337H245v-60h69.065v60h251.87v-60H635v60h62.848q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v301.522q-17.392-3.196-34.305-3.315-16.913-.12-34.065 2.358V-570H182.152v347.848h314.022q-.718 17.152 2.402 34.065 3.12 16.913 8.598 34.065H182.152Zm0-475.978h515.696v-127.848H182.152V-630Zm0 0v-127.848V-630Z" />
    </svg>
  );
}

export default CalendarAddIcon;
