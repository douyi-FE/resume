declare module 'custom-theme' {
    export function applyTheme(theme: string): void;
}

declare module 'shared' {
    export const http: {
        get: (url: string, config: any) => Promise<any>;
        post: (url: string, data: any, config: any) => Promise<any>;
    };
}