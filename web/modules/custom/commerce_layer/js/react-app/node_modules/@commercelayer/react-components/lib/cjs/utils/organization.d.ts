interface ReturnObj {
    organization: string;
    domain: string;
}
export default function getOrganizationSlug<E extends string>(endpoint: E): ReturnObj;
export {};
