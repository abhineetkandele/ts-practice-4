export const dateStringToDate = (date: string): Date => {
    const dateSplit = date.split('/').map((dateItem) => parseInt(dateItem));

    return new Date(dateSplit[2], dateSplit[1], dateSplit[0]);
}