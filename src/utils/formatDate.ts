const formatDate = (date: string): string => {
    const dateFormatted = new Date(date);
    const day = dateFormatted.getUTCDate() > 9 ? dateFormatted.getUTCDate() : `0${dateFormatted.getUTCDate()}`;
    const month = dateFormatted.getUTCMonth() + 1 > 9 ? dateFormatted.getUTCMonth() + 1 : `0${dateFormatted.getUTCMonth() + 1}`;
    const year = dateFormatted.getUTCFullYear();

    return `${day}/${month}/${year}`;
};

export default formatDate;
