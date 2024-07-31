import { parseISO } from "date-fns";

export const convertDatestringArrayToDates=(datestrings: string[]): Date[] => datestrings.map(eachDateString => parseISO(eachDateString))