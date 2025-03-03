export class UserDataApi {
    ip: string;
    city: string;
    region: string;
    region_code: string;
    country: string;
    country_name: string;
    country_code: string;
    country_code_iso3: string;
    country_capital: string;
    continent_code: string;
    in_eu: boolean;
    postal: string;
    latitude: number;
    longitude: number;
    timezone: string;
    utc_offset: string;
    country_calling_code: string;
    currency: string;
    currency_name: string;
    languages: string;
    country_area: number;
    country_population: number;

    constructor (
        ip: string,
        city: string,
        region: string,
        region_code: string,
        country: string,
        country_name: string,
        country_code: string,
        country_code_iso3: string,
        country_capital: string,
        continent_code: string,
        in_eu: boolean,
        postal: string,
        latitude: number,
        longitude: number,
        timezone: string,
        utc_offset: string,
        country_calling_code: string,
        currency: string,
        currency_name: string,
        languages: string,
        country_area: number,
        country_population: number) {

        this.ip = ip;
        this.city = city;
        this.region = region;
        this.region_code = region_code;
        this.country = country;
        this.country_name = country_name;
        this.country_code = country_code;
        this.country_code_iso3 = country_code_iso3;
        this.country_capital = country_capital;
        this.continent_code = continent_code;
        this.in_eu = in_eu;
        this.postal = postal;
        this.latitude = latitude;
        this.longitude = longitude;
        this.timezone = timezone;
        this.utc_offset = utc_offset;
        this.country_calling_code = country_calling_code;
        this.currency = currency;
        this.currency_name = currency_name;
        this.languages = languages;
        this.country_area = country_area;
        this.country_population = country_population;
    }

    static fromJson(json: any) {
        return new UserDataApi(
            json?.ip,
            json?.city,
            json?.region,
            json?.region_code,
            json?.country,
            json?.country_name,
            json?.country_code,
            json?.country_code_iso3,
            json?.country_capital,
            json?.continent_code,
            json?.in_eu,
            json?.postal,
            json?.latitude,
            json?.longitude,
            json?.timezone,
            json?.utc_offset,
            json?.country_calling_code,
            json?.currency,
            json?.currency_name,
            json?.languages,
            json?.country_area,
            json?.country_population);
    }

  }