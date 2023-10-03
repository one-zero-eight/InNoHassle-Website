import { IconProps } from "@/lib/types/IconProps";

export function LoginIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={48}
      width={48}
      {...props}
    >
      <path d="M479.565-114.022v-68.13h298.283v-595.696H479.565v-68.37h298.283q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v595.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H479.565Zm-60.5-182.369-48.978-48.5L471.13-445.935H114.022v-68.13H469.13L368.087-615.109l48.978-48.5L601.435-479l-182.37 182.609Z" />
    </svg>
  );
}