const OmniUtils = require("./omniutils.cjs")

try {
  OmniUtils.internal.debug("colorUtils module imported.")

  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
  
    if (max === min) {
      return [0, 0, l * 100];
    }
  
    const d = max - min;
    let h;
    if (max === r) {
      h = (g - b) / d;
    } else if (max === g) {
      h = 2 + (b - r) / d;
    } else {
      h = 4 + (r - g) / d;
    }
  
    h *= 60;
    if (h < 0) {
      h += 360;
    }
  
    const s = d / (1 - Math.abs(2 * l - 1));
  
    return [h, s * 100, l * 100];
  }
  
  function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
  
    if (s === 0) {
      return [l * 255, l * 255, l * 255];
    }
  
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
  
    let r, g, b;
    if (h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }
  
    r = (r + m) * 255;
    g = (g + m) * 255;
    b = (b + m) * 255;
  
    return [r, g, b];
  }
  
  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }
  
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
  }
  
  function hsvToRgb(h, s, v) {
    s /= 100;
    v /= 100;
  
    if (s === 0) {
      return [v * 255, v * 255, v * 255];
    }
  
    const hi = Math.floor(h / 60) % 6;
    const f = h / 60 - Math.floor(h / 60);
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
  
    let r, g, b;
    switch (hi) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
        break;
    }
  
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
  
    return [r, g, b];
  }
  
  function rgbToHsv(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const v = max;
  
    if (max === min) {
      return [0, 0, v * 100];
    }
  
    const d = max - min;
    let h;
    if (max === r) {
      h = (g - b) / d;
    } else if (max === g) {
      h = 2 + (b - r) / d;
    } else {
      h = 4 + (r - g) / d;
    }
  
    h *= 60;
    if (h < 0) {
      h += 360;
    }
  
    const s = d / max;
  
    return [h, s * 100, v * 100];
  }
  
  function lighten(color, percent) {
    const [r, g, b] = hexToRgb(color);
    const newR = Math.min(255, Math.floor(r * (1 + percent)));
    const newG = Math.min(255, Math.floor(g * (1 + percent)));
    const newB = Math.min(255, Math.floor(b * (1 + percent)));
    return rgbToHex(newR, newG, newB);
  }
  
  function darken(color, percent) {
    const [r, g, b] = hexToRgb(color);
    const newR = Math.max(0, Math.floor(r * (1 - percent)));
    const newG = Math.max(0, Math.floor(g * (1 - percent)));
    const newB = Math.max(0, Math.floor(b * (1 - percent)));
    return rgbToHex(newR, newG, newB);
  }
  
  function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return rgbToHex(r, g, b);
  }
  
  module.exports = {
    rgbToHsl,
    hslToRgb,
    rgbToHex,
    hexToRgb,
    hsvToRgb,
    rgbToHsv,
    lighten,
    darken,
    randomColor,
  };
} catch (error) {
  OmniUtils.internal.error(error)
}