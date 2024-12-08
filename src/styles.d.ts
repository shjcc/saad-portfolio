declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.gif' {
    const value: string;
    export default value;
}