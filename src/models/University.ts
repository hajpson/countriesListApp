export class University {
    web_pages: string[];
    country: string;
    domains: string[];
    name: string;

    constructor(
        web_pages: string[],
        country: string,
        domains: string[],
        name: string) {
        this.web_pages = web_pages;
        this.country = country;
        this.domains = domains;
        this.name = name;
    }
}