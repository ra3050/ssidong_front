
const deviceSizes = {
    mobile_small: 375,
    mobile_big: 425,
    tablet: 768,
    laptop: 1024,
    computer: 1400,
}

const device = {
    mobile_small: `screen and (max-width: ${deviceSizes.mobile_small}px)`,
    mobile_big: `screen and (max-width: ${deviceSizes.mobile_big}px)`,
    tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
    laptop: `screen and (max-width: ${deviceSizes.laptop}px)`,
    computer: `screen and (min-width: ${deviceSizes.computer}px)`,
}

const windowSource = {
    header_height: `50px`,
    footer_height: `75px`,
    window_width: `${window.innerWidth}px`,
}


const theme = {
    device,
    windowSource,
}

export default theme;