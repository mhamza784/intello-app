module.exports = {
    // this will check Typescript files

    // This will lint and format TypeScript and                                             //JavaScript files
    "**/*.(ts|tsx)": filenames => [
        `yarn prettier --write ${filenames.join(" ")}`,
    ],
};
