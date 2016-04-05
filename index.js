if (!window.__DEVCARDS__) {
    throw new Error(`__devcards__ not defined.
Please check that you have included \`devcards/main\` before calling \`card\` or \`ns\`.`);
}

const {
    registerCard,
    registerNamespace
} = window.__DEVCARDS__;

export function doc(str) {
    return {
        isDoc: true,
        text: str.join("\n")
    };
}

export {
    registerCard as card,
    registerNamespace as ns
};
