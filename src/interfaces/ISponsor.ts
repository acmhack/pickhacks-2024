import { StaticImageData } from "next/image";

export interface ISponsor {
    name: string;
    tier: string;
    logo: StaticImageData;
}
