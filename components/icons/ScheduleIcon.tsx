import { IconProps } from "@/lib/types/IconProps";

function ScheduleIcon({ width, height, className, fill }: IconProps) {
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
        d="M189.058-73.304q-30.994 0-53.374-22.38-22.38-22.38-22.38-53.374v-595.218q0-31.059 22.38-53.486 22.38-22.427 53.374-22.427h54.275v-66.666h74.544v66.666h324.246v-66.666h74.544v66.666h54.275q31.06 0 53.486 22.427 22.427 22.427 22.427 53.486v595.218q0 30.994-22.427 53.374-22.426 22.38-53.486 22.38H189.058Zm0-75.754h581.884v-417.609H189.058v417.609Zm0-484.275h581.884v-110.943H189.058v110.943Zm0 0v-110.943 110.943Zm290.959 234.927q-17.671 0-29.641-11.953-11.97-11.954-11.97-29.624 0-17.671 11.953-29.641 11.954-11.97 29.624-11.97 17.671 0 29.641 11.953 11.97 11.954 11.97 29.624 0 17.671-11.953 29.641-11.954 11.97-29.624 11.97Zm-160 0q-17.671 0-29.641-11.953-11.97-11.954-11.97-29.624 0-17.671 11.953-29.641 11.954-11.97 29.624-11.97 17.671 0 29.641 11.953 11.97 11.954 11.97 29.624 0 17.671-11.953 29.641-11.954 11.97-29.624 11.97Zm320 0q-17.336 0-29.474-11.953-12.137-11.954-12.137-29.624 0-17.671 12.121-29.641 12.121-11.97 29.576-11.97t29.473 11.953q12.018 11.954 12.018 29.624 0 17.671-11.953 29.641-11.954 11.97-29.624 11.97Zm-160 160q-17.671 0-29.641-12.121-11.97-12.121-11.97-29.576t11.953-29.473q11.954-12.018 29.624-12.018 17.671 0 29.641 11.953 11.97 11.954 11.97 29.624 0 17.336-11.953 29.474-11.954 12.137-29.624 12.137Zm-160 0q-17.671 0-29.641-12.121-11.97-12.121-11.97-29.576t11.953-29.473q11.954-12.018 29.624-12.018 17.671 0 29.641 11.953 11.97 11.954 11.97 29.624 0 17.336-11.953 29.474-11.954 12.137-29.624 12.137Zm320 0q-17.336 0-29.474-12.121-12.137-12.121-12.137-29.576t12.121-29.473q12.121-12.018 29.576-12.018t29.473 11.953q12.018 11.954 12.018 29.624 0 17.336-11.953 29.474-11.954 12.137-29.624 12.137Z"
      />
    </svg>
  );
}

export default ScheduleIcon;
