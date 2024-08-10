export interface RegionInterface{
    name: string;
    code: string;
}

export const regions: RegionInterface[] = [
    { name: 'Africa', code: 'africa' },
    { name: 'Americas', code: 'americas' },
    { name: 'Asia', code: 'asia' },
    { name: 'Europe', code: 'europe' },
    { name: 'Oceania', code: 'oceania' }
];
