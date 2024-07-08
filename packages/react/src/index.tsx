import { styled } from "./styles";
import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<typeof Button>

export const Button = styled("button", {
    fontfamily: "$default",
    backgroundColor: "$ignite300",
    border: 0,
    borderRadius: "$md",
    fontWeight: "$bold",
    color: "$white",

    variants: {
        size: {
            small: {
                fontSize: 14,
                padding: "$3 $4",
            },
            big: {
                fontSize: 16,
                padding: "$4 $6",
            }
        }
    },
    defaultVariants: {
        size: "small"
    }
})