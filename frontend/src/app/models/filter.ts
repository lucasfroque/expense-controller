export class Filter{
    dateFilter: String = ((new Date).getUTCFullYear()) + "-0" + ((new Date).getMonth() + 1)
    descriptionFilter: String = "";
}