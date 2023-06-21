import React from "react";
import classNames from "classnames";

type SpinnerProps = {
  className?: string;
  Tag?: React.ElementType;
  size?: "lg" | "md" | "sm";
  type?: "bordered" | "grow";
  children?: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "muted"
    | "white";
};

const Spinner = ({
  size,
  children,
  className,
  Tag = "div",
  type = "bordered",
  color = "secondary",
}: SpinnerProps) => {
  return (
    <Tag
      role="status"
      data-testid="spinner"
      className={classNames(
        {
          "spinner-border": type === "bordered",
          "spinner-grow": type === "grow",
        },
        `text-${color}`,
        { [`avatar-${size}`]: size },
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Spinner;
