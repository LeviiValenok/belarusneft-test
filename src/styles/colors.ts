export const colors = {
    primaryColor: "#2F80ED",
    white: "#EFEFEF",
    hover: "#5EA2FF",
    buttonShadow: "rgba(47, 128, 237, 100)",
    disabled: "#B1B1B1",
    background: "#E5E5E5",
    activeText: "#FFFFFF",
    secondaryText: "#929292",
    imagePlaceholder: "#C4C4C4",
    primaryText: "#000000",
    titleText: "#4F4F4F",
    cardBackground: "#E5E5E5",
    cardHover: "#F6F6F6",
    lightGrey: "#828282",
    inputBackground: "#E0E0E0",
    errorBorder: "#EB5757",
};

const root = document.documentElement;

Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
});