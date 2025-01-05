export const colors = {
    primaryColor: "#2F80ED",
    white: "#EFEFEF",
    hover: "#5EA2FF",
    disabled: "#B1B1B1",
    background: "#E5E5E5",
    activeText: "#FFFFFF",
    secondaryText: "#929292",
    primaryText: "#000000",
};

const root = document.documentElement;

Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
});