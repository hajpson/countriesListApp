export class University {
    web_page: string;
    country: string;
    domain: string;
    name: string;

    constructor(
        web_page: string,
        country: string,
        domain: string,
        name: string) {
        this.web_page = web_page;
        this.country = country;
        this.domain = domain;
        this.name = name;
    }
}