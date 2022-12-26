import { Coordinates } from "../interfaces/Dimensions"

export const start = (location: Coordinates): string => {
    return `M ${location.x} ${location.y}`
}

export const horizontalToLocation = (location: Coordinates): string => {
    return `H ${location.x}`
}

export const verticalToLocation = (location: Coordinates): string => {
    return `V ${location.y}`
}

export const lineTo = (location: Coordinates): string => {
    return `L ${location.x} ${location.y}`
}