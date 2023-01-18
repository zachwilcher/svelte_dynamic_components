import type { PageLoad } from './$types';
import type { ImportData } from '$lib/importer';

const packages = {
  'zac': [
      {
        component: 'hello',
        origin: 'packages',
        packageName: 'package1'
      }
  ],
  'jay': [
      {
        component: 'hello',
        origin: 'packages',
        packageName: 'package1'
      },
      {
        component: 'hi',
        origin: 'packages',
        packageName: 'package2'
      }
    ],
  'neil': [
    {
        component: 'hey',
        origin: 'packages',
        packageName: 'package3'
    }
  ]
};


export const load = (async ({ params }) => {

  /*
  const components = await Promise.all(packages[params.slug].map(async packageName => {
    return (await import(`${packageName}`)).default;
  }));
  console.log(components);
  */
  return {
    components: packages[params.slug]
  };
}) satisfies PageLoad;