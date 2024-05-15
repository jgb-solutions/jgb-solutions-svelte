import dayjs from "dayjs"

export const formatDate = (date: string | Date) => dayjs(date).format("DD MMM YYYY")