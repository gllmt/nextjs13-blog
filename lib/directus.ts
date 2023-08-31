import { Directus } from '@directus/sdk';
// Directus SDK change in version 11.0.0 be carefull when upgrading
// this is old way to connect to directus SDK work on version 10.3.3
const directus = new Directus(process.env.NEXT_PUBLIC_API_URL as string, {
    auth: {
        staticToken: process.env.ADMIN_TOKEN as string,
    },
});

export default directus;
