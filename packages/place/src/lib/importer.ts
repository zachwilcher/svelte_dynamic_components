import type { SvelteComponent } from "svelte";


export type ComponentOrigin = "lib" | "packages" | "node_modules";

export interface ImportData {
    component: string;
    origin: ComponentOrigin;
    packageName?: string;
}


export async function importComponent({component, origin, packageName}: ImportData): Promise<typeof SvelteComponent> {

    switch(origin) {
        // local to this package
        case "lib":
            return (await import(`./${component}.svelte`)).default;

        // local to the monorepo
        case "packages":
            if(packageName) {
                return (await import(`../../../${packageName}/package/${component}.svelte`)).default;
            }
            throw new Error("Must specify package name");

        // installed from npm
        case "node_modules":
            if(packageName) {
                return (await import(`../../node_modules/${packageName}/${component}.svelte`)).default;
            }
            throw new Error("Must specify package name");

        default:
             throw new Error("Invalid component origin");

    }
}