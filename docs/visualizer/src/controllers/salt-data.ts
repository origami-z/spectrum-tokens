export const saltData = {
  modes: ["$light", "$dark"],
  densities: ["$high", "$medium", "$low", "$touch"],
  foundations: {
    shadow: {
      "shadow-100-color": {
        $value: {
          $dark: "rgba(0, 0, 0, 0.5)",
          $light: "rgba(0, 0, 0, 0.1)",
        },
        $type: "color",
      },
      "shadow-200-color": {
        $value: {
          $dark: "rgba(0, 0, 0, 0.5)",
          $light: "rgba(0, 0, 0, 0.1)",
        },
        $type: "color",
      },
      "shadow-300-color": {
        $value: {
          $dark: "rgba(0, 0, 0, 0.55)",
          $light: "rgba(0, 0, 0, 0.15)",
        },
        $type: "color",
      },
      "shadow-400-color": {
        $value: {
          $dark: "rgba(0, 0, 0, 0.55)",
          $light: "rgba(0, 0, 0, 0.2)",
        },
        $type: "color",
      },
      "shadow-500-color": {
        $value: {
          $dark: "rgba(0, 0, 0, 0.65)",
          $light: "rgba(0, 0, 0, 0.3)",
        },
        $type: "color",
      },
      "shadow-100": {
        $value: "0 1px 3px 0 var(--salt-shadow-100-color)",
        $type: "color",
      },
      "shadow-200": {
        $value: "0 2px 4px 0 var(--salt-shadow-200-color)",
        $type: "color",
      },
      "shadow-300": {
        $value: "0 4px 8px 0 var(--salt-shadow-300-color)",
        $type: "color",
      },
      "shadow-400": {
        $value: "0 6px 10px 0 var(--salt-shadow-400-color)",
        $type: "color",
      },
      "shadow-500": {
        $value: "0 12px 40px 0 var(--salt-shadow-500-color)",
        $type: "color",
      },
    },
    curve: {
      "curve-0": {
        $value: {
          $low: "0",
          $touch: "0",
          $medium: "0",
          $high: "0",
        },
        $type: "color",
      },
      "curve-50": {
        $value: {
          $low: "3px",
          $touch: "4px",
          $medium: "2px",
          $high: "1px",
        },
        $type: "color",
      },
      "curve-100": {
        $value: {
          $low: "6px",
          $touch: "8px",
          $medium: "4px",
          $high: "2px",
        },
        $type: "color",
      },
      "curve-150": {
        $value: {
          $low: "9px",
          $touch: "12px",
          $medium: "6px",
          $high: "3px",
        },
        $type: "color",
      },
      "curve-999": {
        $value: {
          $low: "999px",
          $touch: "999px",
          $medium: "999px",
          $high: "999px",
        },
        $type: "color",
      },
    },
    size: {
      "size-adornment": {
        $value: {
          $low: "10px",
          $touch: "12px",
          $medium: "8px",
          $high: "6px",
        },
        $type: "color",
      },
      "size-bar": {
        $value: {
          $low: "6px",
          $touch: "8px",
          $medium: "4px",
          $high: "2px",
        },
        $type: "color",
      },
      "size-base": {
        $value: {
          $low: "36px",
          $touch: "44px",
          $medium: "28px",
          $high: "20px",
        },
        $type: "color",
      },
      "size-border": {
        $value: {
          $low: "1px",
          $touch: "1px",
          $medium: "1px",
          $high: "1px",
        },
        $type: "color",
      },
      "size-icon": {
        $value: {
          $low: "14px",
          $touch: "16px",
          $medium: "12px",
          $high: "10px",
        },
        $type: "color",
      },
      "size-indicator": {
        $value: {
          $low: "3px",
          $touch: "4px",
          $medium: "2px",
          $high: "1px",
        },
        $type: "color",
      },
      "size-selectable": {
        $value: {
          $low: "16px",
          $touch: "18px",
          $medium: "14px",
          $high: "12px",
        },
        $type: "color",
      },
      "size-bar-strong": {
        $value: {
          $low: "12px",
          $touch: "16px",
          $medium: "8px",
          $high: "4px",
        },
        $type: "color",
      },
      "size-bar-small": {
        $value: {
          $low: "2px",
          $touch: "2px",
          $medium: "2px",
          $high: "2px",
        },
        $type: "color",
      },
      "size-border-strong": {
        $value: {
          $low: "2px",
          $touch: "2px",
          $medium: "2px",
          $high: "2px",
        },
        $type: "color",
      },
    },
    spacing: {
      "spacing-100": {
        $value: {
          $low: "12px",
          $touch: "16px",
          $medium: "8px",
          $high: "4px",
        },
        $type: "color",
      },
    },
    zIndex: {
      "zIndex-default": {
        $value: {
          $low: "1",
          $touch: "1",
          $medium: "1",
          $high: "1",
        },
        $type: "color",
      },
      "zIndex-popout": {
        $value: {
          $low: "1000",
          $touch: "1000",
          $medium: "1000",
          $high: "1000",
        },
        $type: "color",
      },
      "zIndex-appHeader": {
        $value: {
          $low: "1100",
          $touch: "1100",
          $medium: "1100",
          $high: "1100",
        },
        $type: "color",
      },
      "zIndex-drawer": {
        $value: {
          $low: "1200",
          $touch: "1200",
          $medium: "1200",
          $high: "1200",
        },
        $type: "color",
      },
      "zIndex-modal": {
        $value: {
          $low: "1300",
          $touch: "1300",
          $medium: "1300",
          $high: "1300",
        },
        $type: "color",
      },
      "zIndex-notification": {
        $value: {
          $low: "1400",
          $touch: "1400",
          $medium: "1400",
          $high: "1400",
        },
        $type: "color",
      },
      "zIndex-dragObject": {
        $value: {
          $low: "1420",
          $touch: "1420",
          $medium: "1420",
          $high: "1420",
        },
        $type: "color",
      },
      "zIndex-contextMenu": {
        $value: {
          $low: "1450",
          $touch: "1450",
          $medium: "1450",
          $high: "1450",
        },
        $type: "color",
      },
      "zIndex-flyover": {
        $value: {
          $low: "1500",
          $touch: "1500",
          $medium: "1500",
          $high: "1500",
        },
        $type: "color",
      },
    },
    color: {
      "color-white": {
        $value: "rgb(255, 255, 255)",
        $type: "color",
      },
      "color-black": {
        $value: "rgb(0, 0, 0)",
        $type: "color",
      },
      "color-red-10": {
        $value: "rgb(255, 227, 224)",
        $type: "color",
      },
      "color-red-20": {
        $value: "rgb(255, 207, 201)",
        $type: "color",
      },
      "color-red-30": {
        $value: "rgb(255, 187, 178)",
        $type: "color",
      },
      "color-red-40": {
        $value: "rgb(255, 167, 156)",
        $type: "color",
      },
      "color-red-50": {
        $value: "rgb(255, 148, 133)",
        $type: "color",
      },
      "color-red-100": {
        $value: "rgb(255, 128, 111)",
        $type: "color",
      },
      "color-red-200": {
        $value: "rgb(255, 108, 88)",
        $type: "color",
      },
      "color-red-300": {
        $value: "rgb(255, 89, 66)",
        $type: "color",
      },
      "color-red-400": {
        $value: "rgb(237, 65, 42)",
        $type: "color",
      },
      "color-red-500": {
        $value: "rgb(227, 43, 22)",
        $type: "color",
      },
      "color-red-600": {
        $value: "rgb(196, 32, 16)",
        $type: "color",
      },
      "color-red-700": {
        $value: "rgb(166, 21, 11)",
        $type: "color",
      },
      "color-red-800": {
        $value: "rgb(136, 10, 5)",
        $type: "color",
      },
      "color-red-900": {
        $value: "rgb(65, 37, 34)",
        $type: "color",
      },
      "color-orange-10": {
        $value: "rgb(255, 232, 191)",
        $type: "color",
      },
      "color-orange-20": {
        $value: "rgb(254, 223, 166)",
        $type: "color",
      },
      "color-orange-30": {
        $value: "rgb(254, 214, 142)",
        $type: "color",
      },
      "color-orange-40": {
        $value: "rgb(254, 205, 118)",
        $type: "color",
      },
      "color-orange-50": {
        $value: "rgb(254, 197, 94)",
        $type: "color",
      },
      "color-orange-100": {
        $value: "rgb(250, 181, 81)",
        $type: "color",
      },
      "color-orange-200": {
        $value: "rgb(246, 165, 68)",
        $type: "color",
      },
      "color-orange-300": {
        $value: "rgb(242, 149, 56)",
        $type: "color",
      },
      "color-orange-400": {
        $value: "rgb(238, 133, 43)",
        $type: "color",
      },
      "color-orange-500": {
        $value: "rgb(234, 115, 25)",
        $type: "color",
      },
      "color-orange-600": {
        $value: "rgb(224, 101, 25)",
        $type: "color",
      },
      "color-orange-700": {
        $value: "rgb(214, 85, 19)",
        $type: "color",
      },
      "color-orange-800": {
        $value: "rgb(204, 68, 13)",
        $type: "color",
      },
      "color-orange-900": {
        $value: "rgb(54, 44, 36)",
        $type: "color",
      },
      "color-green-10": {
        $value: "rgb(209, 244, 201)",
        $type: "color",
      },
      "color-green-20": {
        $value: "rgb(184, 232, 182)",
        $type: "color",
      },
      "color-green-30": {
        $value: "rgb(160, 221, 164)",
        $type: "color",
      },
      "color-green-40": {
        $value: "rgb(136, 210, 145)",
        $type: "color",
      },
      "color-green-50": {
        $value: "rgb(112, 199, 127)",
        $type: "color",
      },
      "color-green-100": {
        $value: "rgb(93, 189, 116)",
        $type: "color",
      },
      "color-green-200": {
        $value: "rgb(77, 180, 105)",
        $type: "color",
      },
      "color-green-300": {
        $value: "rgb(60, 171, 96)",
        $type: "color",
      },
      "color-green-400": {
        $value: "rgb(48, 156, 90)",
        $type: "color",
      },
      "color-green-500": {
        $value: "rgb(36, 135, 75)",
        $type: "color",
      },
      "color-green-600": {
        $value: "rgb(24, 114, 61)",
        $type: "color",
      },
      "color-green-700": {
        $value: "rgb(12, 93, 46)",
        $type: "color",
      },
      "color-green-800": {
        $value: "rgb(1, 73, 32)",
        $type: "color",
      },
      "color-green-900": {
        $value: "rgb(35, 52, 43)",
        $type: "color",
      },
      "color-teal-10": {
        $value: "rgb(218, 240, 240)",
        $type: "color",
      },
      "color-teal-20": {
        $value: "rgb(199, 232, 232)",
        $type: "color",
      },
      "color-teal-30": {
        $value: "rgb(180, 224, 225)",
        $type: "color",
      },
      "color-teal-40": {
        $value: "rgb(162, 217, 218)",
        $type: "color",
      },
      "color-teal-50": {
        $value: "rgb(141, 205, 209)",
        $type: "color",
      },
      "color-teal-100": {
        $value: "rgb(123, 193, 200)",
        $type: "color",
      },
      "color-teal-200": {
        $value: "rgb(99, 181, 192)",
        $type: "color",
      },
      "color-teal-300": {
        $value: "rgb(73, 160, 172)",
        $type: "color",
      },
      "color-teal-400": {
        $value: "rgb(48, 149, 166)",
        $type: "color",
      },
      "color-teal-500": {
        $value: "rgb(0, 130, 151)",
        $type: "color",
      },
      "color-teal-600": {
        $value: "rgb(27, 107, 133)",
        $type: "color",
      },
      "color-teal-700": {
        $value: "rgb(0, 85, 113)",
        $type: "color",
      },
      "color-teal-800": {
        $value: "rgb(1, 65, 86)",
        $type: "color",
      },
      "color-teal-900": {
        $value: "rgb(0, 49, 76)",
        $type: "color",
      },
      "color-blue-10": {
        $value: "rgb(203, 231, 249)",
        $type: "color",
      },
      "color-blue-20": {
        $value: "rgb(183, 222, 246)",
        $type: "color",
      },
      "color-blue-30": {
        $value: "rgb(164, 213, 244)",
        $type: "color",
      },
      "color-blue-40": {
        $value: "rgb(144, 204, 242)",
        $type: "color",
      },
      "color-blue-50": {
        $value: "rgb(125, 195, 240)",
        $type: "color",
      },
      "color-blue-100": {
        $value: "rgb(100, 177, 228)",
        $type: "color",
      },
      "color-blue-200": {
        $value: "rgb(75, 159, 216)",
        $type: "color",
      },
      "color-blue-300": {
        $value: "rgb(51, 141, 205)",
        $type: "color",
      },
      "color-blue-400": {
        $value: "rgb(46, 132, 198)",
        $type: "color",
      },
      "color-blue-500": {
        $value: "rgb(38, 112, 169)",
        $type: "color",
      },
      "color-blue-600": {
        $value: "rgb(21, 92, 147)",
        $type: "color",
      },
      "color-blue-700": {
        $value: "rgb(0, 71, 123)",
        $type: "color",
      },
      "color-blue-800": {
        $value: "rgb(39, 60, 77)",
        $type: "color",
      },
      "color-blue-900": {
        $value: "rgb(35, 47, 56)",
        $type: "color",
      },
      "color-purple-10": {
        $value: "rgb(249, 224, 247)",
        $type: "color",
      },
      "color-purple-20": {
        $value: "rgb(247, 212, 244)",
        $type: "color",
      },
      "color-purple-30": {
        $value: "rgb(245, 201, 241)",
        $type: "color",
      },
      "color-purple-40": {
        $value: "rgb(243, 189, 238)",
        $type: "color",
      },
      "color-purple-50": {
        $value: "rgb(241, 178, 235)",
        $type: "color",
      },
      "color-purple-100": {
        $value: "rgb(223, 156, 225)",
        $type: "color",
      },
      "color-purple-200": {
        $value: "rgb(205, 135, 215)",
        $type: "color",
      },
      "color-purple-300": {
        $value: "rgb(192, 116, 203)",
        $type: "color",
      },
      "color-purple-400": {
        $value: "rgb(169, 97, 181)",
        $type: "color",
      },
      "color-purple-500": {
        $value: "rgb(150, 78, 162)",
        $type: "color",
      },
      "color-purple-600": {
        $value: "rgb(129, 60, 141)",
        $type: "color",
      },
      "color-purple-700": {
        $value: "rgb(103, 46, 122)",
        $type: "color",
      },
      "color-purple-800": {
        $value: "rgb(83, 37, 109)",
        $type: "color",
      },
      "color-purple-900": {
        $value: "rgb(59, 16, 84)",
        $type: "color",
      },
      "color-gray-10": {
        $value: "rgb(242, 244, 246)",
        $type: "color",
      },
      "color-gray-20": {
        $value: "rgb(234, 237, 239)",
        $type: "color",
      },
      "color-gray-30": {
        $value: "rgb(224, 228, 233)",
        $type: "color",
      },
      "color-gray-40": {
        $value: "rgb(217, 221, 227)",
        $type: "color",
      },
      "color-gray-50": {
        $value: "rgb(206, 210, 217)",
        $type: "color",
      },
      "color-gray-60": {
        $value: "rgb(197, 201, 208)",
        $type: "color",
      },
      "color-gray-70": {
        $value: "rgb(180, 183, 190)",
        $type: "color",
      },
      "color-gray-80": {
        $value: "rgb(159, 163, 170)",
        $type: "color",
      },
      "color-gray-90": {
        $value: "rgb(132, 135, 142)",
        $type: "color",
      },
      "color-gray-100": {
        $value: "rgb(116, 119, 127)",
        $type: "color",
      },
      "color-gray-200": {
        $value: "rgb(97, 101, 110)",
        $type: "color",
      },
      "color-gray-300": {
        $value: "rgb(76, 80, 91)",
        $type: "color",
      },
      "color-gray-400": {
        $value: "rgb(68, 72, 79)",
        $type: "color",
      },
      "color-gray-500": {
        $value: "rgb(59, 63, 70)",
        $type: "color",
      },
      "color-gray-600": {
        $value: "rgb(47, 49, 54)",
        $type: "color",
      },
      "color-gray-700": {
        $value: "rgb(42, 44, 47)",
        $type: "color",
      },
      "color-gray-800": {
        $value: "rgb(36, 37, 38)",
        $type: "color",
      },
      "color-gray-900": {
        $value: "rgb(22, 22, 22)",
        $type: "color",
      },
      "color-blue-100-fade-foreground": {
        $value: "rgba(100, 177, 228, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-blue-500-fade-foreground": {
        $value: "rgba(38, 112, 169, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-blue-600-fade-foreground": {
        $value: "rgba(21, 92, 147, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-200-fade-foreground": {
        $value: "rgba(97, 101, 110, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-70-fade-foreground": {
        $value: "rgba(180, 183, 190, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-90-fade-foreground": {
        $value: "rgba(132, 135, 142, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-900-fade-foreground": {
        $value: "rgba(22, 22, 22, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-green-300-fade-foreground": {
        $value: "rgba(60, 171, 96, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-green-400-fade-foreground": {
        $value: "rgba(48, 156, 90, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-green-500-fade-foreground": {
        $value: "rgba(36, 135, 75, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-green-700-fade-foreground": {
        $value: "rgba(12, 93, 46, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-red-300-fade-foreground": {
        $value: "rgba(255, 89, 66, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-red-500-fade-foreground": {
        $value: "rgba(227, 43, 22, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-red-700-fade-foreground": {
        $value: "rgba(166, 21, 11, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-white-fade-foreground": {
        $value: "rgba(255, 255, 255, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-blue-500-fade-border": {
        $value: "rgba(38, 112, 169, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-50-fade-border": {
        $value: "rgba(206, 210, 217, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-60-fade-border": {
        $value: "rgba(197, 201, 208, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-90-fade-border": {
        $value: "rgba(132, 135, 142, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-200-fade-border": {
        $value: "rgba(97, 101, 110, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-300-fade-border": {
        $value: "rgba(76, 80, 91, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-green-400-fade-border": {
        $value: "rgba(48, 156, 90, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-green-500-fade-border": {
        $value: "rgba(36, 135, 75, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-orange-400-fade-border": {
        $value: "rgba(238, 133, 43, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-orange-500-fade-border": {
        $value: "rgba(234, 115, 25, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-orange-600-fade-border": {
        $value: "rgba(224, 101, 25, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-orange-700-fade-border": {
        $value: "rgba(214, 85, 19, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-red-500-fade-border": {
        $value: "rgba(227, 43, 22, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-90-fade-border-readonly": {
        $value:
          "rgba(132, 135, 142, var(--salt-palette-opacity-border-readonly))",
        $type: "color",
      },
      "color-gray-200-fade-border-readonly": {
        $value:
          "rgba(97, 101, 110, var(--salt-palette-opacity-border-readonly))",
        $type: "color",
      },
      "color-blue-30-fade-background": {
        $value: "rgba(164, 213, 244, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-blue-500-fade-background": {
        $value: "rgba(38, 112, 169, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-blue-600-fade-background": {
        $value: "rgba(21, 92, 147, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-blue-700-fade-background": {
        $value: "rgba(0, 71, 123, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-20-fade-background": {
        $value: "rgba(234, 237, 239, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-60-fade-background": {
        $value: "rgba(197, 201, 208, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-70-fade-background": {
        $value: "rgba(180, 183, 190, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-200-fade-background": {
        $value: "rgba(97, 101, 110, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-300-fade-background": {
        $value: "rgba(76, 80, 91, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-600-fade-background": {
        $value: "rgba(47, 49, 54, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-gray-800-fade-background": {
        $value: "rgba(36, 37, 38, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-white-fade-background": {
        $value: "rgba(255, 255, 255, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-white-fade-background-readonly": {
        $value:
          "rgba(255, 255, 255, var(--salt-palette-opacity-background-readonly))",
        $type: "color",
      },
      "color-gray-20-fade-background-readonly": {
        $value:
          "rgba(234, 237, 239, var(--salt-palette-opacity-background-readonly))",
        $type: "color",
      },
      "color-gray-600-fade-background-readonly": {
        $value:
          "rgba(47, 49, 54, var(--salt-palette-opacity-background-readonly))",
        $type: "color",
      },
      "color-gray-800-fade-background-readonly": {
        $value:
          "rgba(36, 37, 38, var(--salt-palette-opacity-background-readonly))",
        $type: "color",
      },
      "color-white-fade-backdrop": {
        $value: "rgba(255, 255, 255, var(--salt-palette-opacity-backdrop))",
        $type: "color",
      },
      "color-black-fade-backdrop": {
        $value: "rgba(0, 0, 0, var(--salt-palette-opacity-backdrop))",
        $type: "color",
      },
      "color-blue-100-fade-fill": {
        $value: "rgba(100, 177, 228, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-blue-600-fade-fill": {
        $value: "rgba(21, 92, 147, var(--salt-palette-opacity-disabled))",
        $type: "color",
      },
      "color-white-fade-separatorOpacity-primary": {
        $value:
          "rgba(255, 255, 255, var(--salt-palette-opacity-primary-border))",
        $type: "color",
      },
      "color-white-fade-separatorOpacity-secondary": {
        $value:
          "rgba(255, 255, 255, var(--salt-palette-opacity-secondary-border))",
        $type: "color",
      },
      "color-white-fade-separatorOpacity-tertiary": {
        $value:
          "rgba(255, 255, 255, var(--salt-palette-opacity-tertiary-border))",
        $type: "color",
      },
      "color-black-fade-separatorOpacity-primary": {
        $value: "rgba(0, 0, 0, var(--salt-palette-opacity-primary-border))",
        $type: "color",
      },
      "color-black-fade-separatorOpacity-secondary": {
        $value: "rgba(0, 0, 0, var(--salt-palette-opacity-secondary-border))",
        $type: "color",
      },
      "color-black-fade-separatorOpacity-tertiary": {
        $value: "rgba(0, 0, 0, var(--salt-palette-opacity-tertiary-border))",
        $type: "color",
      },
      "color-black-fade-background-hover": {
        $value: "rgba(0, 0, 0, var(--salt-opacity-8))",
        $type: "color",
      },
      "color-white-fade-background-hover": {
        $value: "rgba(255, 255, 255, var(--salt-opacity-8))",
        $type: "color",
      },
    },
    duration: {
      "duration-instant": {
        $value: "0ms",
        $type: "color",
      },
      "duration-perceptible": {
        $value: "300ms",
        $type: "color",
      },
      "duration-notable": {
        $value: "1000ms",
        $type: "color",
      },
      "duration-cutoff": {
        $value: "10000ms",
        $type: "color",
      },
    },
    opacity: {
      "opacity-0": {
        $value: "0",
        $type: "number",
      },
      "opacity-8": {
        $value: "0.08",
        $type: "number",
      },
      "opacity-15": {
        $value: "0.15",
        $type: "number",
      },
      "opacity-25": {
        $value: "0.25",
        $type: "number",
      },
      "opacity-40": {
        $value: "0.4",
        $type: "number",
      },
      "opacity-70": {
        $value: "0.7",
        $type: "number",
      },
    },
    typography: {
      "typography-fontFamily": {
        $value: '"Open Sans"',
        $type: "color",
      },
      "typography-fontFamily-code": {
        $value: '"PT Mono"',
        $type: "color",
      },
      "typography-fontWeight-light": {
        $value: "300",
        $type: "color",
      },
      "typography-fontWeight-regular": {
        $value: "400",
        $type: "color",
      },
      "typography-fontWeight-medium": {
        $value: "500",
        $type: "color",
      },
      "typography-fontWeight-semiBold": {
        $value: "600",
        $type: "color",
      },
      "typography-fontWeight-bold": {
        $value: "700",
        $type: "color",
      },
      "typography-fontWeight-extraBold": {
        $value: "800",
        $type: "color",
      },
    },
  },
  palette: {
    accent: {
      "palette-accent-background": {
        $value: {
          $dark: "{foundations.color.color-blue-500}",
          $light: "{foundations.color.color-blue-500}",
        },
        $type: "color",
      },
      "palette-accent-border": {
        $value: {
          $dark: "{foundations.color.color-blue-500}",
          $light: "{foundations.color.color-blue-500}",
        },
        $type: "color",
      },
      "palette-accent-foreground": {
        $value: {
          $dark: "{foundations.color.color-white}",
          $light: "{foundations.color.color-white}",
        },
        $type: "color",
      },
    },
    error: {
      "palette-error-background": {
        $value: {
          $dark: "{foundations.color.color-red-900}",
          $light: "{foundations.color.color-red-10}",
        },
        $type: "color",
      },
      "palette-error-background-selected": {
        $value: {
          $dark: "{foundations.color.color-red-900}",
          $light: "{foundations.color.color-red-20}",
        },
        $type: "color",
      },
      "palette-error-border": {
        $value: {
          $dark: "{foundations.color.color-red-500}",
          $light: "{foundations.color.color-red-500}",
        },
        $type: "color",
      },
      "palette-error-foreground": {
        $value: {
          $dark: "{foundations.color.color-red-500}",
          $light: "{foundations.color.color-red-500}",
        },
        $type: "color",
      },
    },
    info: {
      "palette-info-background": {
        $value: {
          $dark: "{foundations.color.color-blue-900}",
          $light: "{foundations.color.color-blue-10}",
        },
        $type: "color",
      },
      "palette-info-border": {
        $value: {
          $dark: "{foundations.color.color-blue-500}",
          $light: "{foundations.color.color-blue-500}",
        },
        $type: "color",
      },
      "palette-info-foreground": {
        $value: {
          $dark: "{foundations.color.color-blue-500}",
          $light: "{foundations.color.color-blue-500}",
        },
        $type: "color",
      },
    },
    interact: {
      "palette-interact-background": {
        $value: {
          $dark: "transparent",
          $light: "transparent",
        },
        $type: "color",
      },
      "palette-interact-background-blurSelected": {
        $value: {
          $dark: "{foundations.color.color-gray-600}",
          $light: "{foundations.color.color-gray-30}",
        },
        $type: "color",
      },
      "palette-interact-background-hover": {
        $value: {
          $dark: "{foundations.color.color-blue-800}",
          $light: "{foundations.color.color-blue-10}",
        },
        $type: "color",
      },
      "palette-interact-background-active": {
        $value: {
          $dark: "{foundations.color.color-blue-700}",
          $light: "{foundations.color.color-blue-30}",
        },
        $type: "color",
      },
      "palette-interact-background-disabled": {
        $value: {
          $dark: "transparent",
          $light: "transparent",
        },
        $type: "color",
      },
      "palette-interact-background-activeDisabled": {
        $value: {
          $dark: "{foundations.color.color-blue-700-fade-background}",
          $light: "{foundations.color.color-blue-30-fade-background}",
        },
        $type: "color",
      },
      "palette-interact-border": {
        $value: {
          $dark: "{foundations.color.color-gray-90}",
          $light: "{foundations.color.color-gray-200}",
        },
        $type: "color",
      },
      "palette-interact-border-active": {
        $value: {
          $dark: "{foundations.color.color-blue-100}",
          $light: "{foundations.color.color-blue-600}",
        },
        $type: "color",
      },
      "palette-interact-border-activeDisabled": {
        $value: {
          $dark: "{foundations.color.color-blue-100-fade-fill}",
          $light: "{foundations.color.color-blue-600-fade-fill}",
        },
        $type: "color",
      },
      "palette-interact-border-disabled": {
        $value: {
          $dark: "{foundations.color.color-gray-90-fade-border}",
          $light: "{foundations.color.color-gray-200-fade-border}",
        },
        $type: "color",
      },
      "palette-interact-border-hover": {
        $value: {
          $dark: "{foundations.color.color-blue-500}",
          $light: "{foundations.color.color-blue-500}",
        },
        $type: "color",
      },
      "palette-interact-border-readonly": {
        $value: {
          $dark: "{foundations.color.color-gray-90-fade-border-readonly}",
          $light: "{foundations.color.color-gray-200-fade-border-readonly}",
        },
        $type: "color",
      },
      "palette-interact-foreground": {
        $value: {
          $dark: "{foundations.color.color-gray-90}",
          $light: "{foundations.color.color-gray-200}",
        },
        $type: "color",
      },
      "palette-interact-foreground-active": {
        $value: {
          $dark: "{foundations.color.color-blue-100}",
          $light: "{foundations.color.color-blue-600}",
        },
        $type: "color",
      },
      "palette-interact-foreground-activeDisabled": {
        $value: {
          $dark: "{foundations.color.color-blue-100-fade-foreground}",
          $light: "{foundations.color.color-blue-600-fade-foreground}",
        },
        $type: "color",
      },
      "palette-interact-foreground-disabled": {
        $value: {
          $dark: "{foundations.color.color-gray-90-fade-foreground}",
          $light: "{foundations.color.color-gray-200-fade-foreground}",
        },
        $type: "color",
      },
      "palette-interact-foreground-hover": {
        $value: {
          $dark: "{foundations.color.color-blue-500}",
          $light: "{foundations.color.color-blue-500}",
        },
        $type: "color",
      },
      "palette-interact-outline": {
        $value: {
          $dark: "{foundations.color.color-blue-100}",
          $light: "{foundations.color.color-blue-600}",
        },
        $type: "color",
      },
      "palette-interact-cta-background": {
        $value: {
          $dark: "{foundations.color.color-blue-600}",
          $light: "{foundations.color.color-blue-600}",
        },
        $type: "color",
      },
      "palette-interact-cta-background-active": {
        $value: {
          $dark: "{foundations.color.color-blue-700}",
          $light: "{foundations.color.color-blue-700}",
        },
        $type: "color",
      },
      "palette-interact-cta-background-disabled": {
        $value: {
          $dark: "{foundations.color.color-blue-600-fade-background}",
          $light: "{foundations.color.color-blue-600-fade-background}",
        },
        $type: "color",
      },
      "palette-interact-cta-background-hover": {
        $value: {
          $dark: "{foundations.color.color-blue-500}",
          $light: "{foundations.color.color-blue-500}",
        },
        $type: "color",
      },
      "palette-interact-cta-foreground": {
        $value: {
          $dark: "{foundations.color.color-white}",
          $light: "{foundations.color.color-white}",
        },
        $type: "color",
      },
      "palette-interact-cta-foreground-active": {
        $value: {
          $dark: "{foundations.color.color-white}",
          $light: "{foundations.color.color-white}",
        },
        $type: "color",
      },
      "palette-interact-cta-foreground-disabled": {
        $value: {
          $dark: "{foundations.color.color-white-fade-foreground}",
          $light: "{foundations.color.color-white-fade-foreground}",
        },
        $type: "color",
      },
      "palette-interact-cta-foreground-hover": {
        $value: {
          $dark: "{foundations.color.color-white}",
          $light: "{foundations.color.color-white}",
        },
        $type: "color",
      },
      "palette-interact-primary-background": {
        $value: {
          $dark: "{foundations.color.color-gray-300}",
          $light: "{foundations.color.color-gray-60}",
        },
        $type: "color",
      },
      "palette-interact-primary-background-active": {
        $value: {
          $dark: "{foundations.color.color-gray-70}",
          $light: "{foundations.color.color-gray-200}",
        },
        $type: "color",
      },
      "palette-interact-primary-background-disabled": {
        $value: {
          $dark: "{foundations.color.color-gray-300-fade-background}",
          $light: "{foundations.color.color-gray-60-fade-background}",
        },
        $type: "color",
      },
      "palette-interact-primary-background-hover": {
        $value: {
          $dark: "{foundations.color.color-gray-200}",
          $light: "{foundations.color.color-gray-40}",
        },
        $type: "color",
      },
      "palette-interact-primary-foreground": {
        $value: {
          $dark: "{foundations.color.color-white}",
          $light: "{foundations.color.color-gray-900}",
        },
        $type: "color",
      },
      "palette-interact-primary-foreground-active": {
        $value: {
          $dark: "{foundations.color.color-gray-900}",
          $light: "{foundations.color.color-white}",
        },
        $type: "color",
      },
      "palette-interact-primary-foreground-disabled": {
        $value: {
          $dark: "{foundations.color.color-white-fade-foreground}",
          $light: "{foundations.color.color-gray-900-fade-foreground}",
        },
        $type: "color",
      },
      "palette-interact-primary-foreground-hover": {
        $value: {
          $dark: "{foundations.color.color-white}",
          $light: "{foundations.color.color-gray-900}",
        },
        $type: "color",
      },
      "palette-interact-secondary-background": {
        $value: {
          $dark: "transparent",
          $light: "transparent",
        },
        $type: "color",
      },
      "palette-interact-secondary-background-active": {
        $value: {
          $dark: "{foundations.color.color-gray-70}",
          $light: "{foundations.color.color-gray-200}",
        },
        $type: "color",
      },
      "palette-interact-secondary-background-disabled": {
        $value: {
          $dark: "transparent",
          $light: "transparent",
        },
        $type: "color",
      },
      "palette-interact-secondary-background-hover": {
        $value: {
          $dark: "{foundations.color.color-gray-200}",
          $light: "{foundations.color.color-gray-40}",
        },
        $type: "color",
      },
      "palette-interact-secondary-foreground": {
        $value: {
          $dark: "{foundations.color.color-white}",
          $light: "{foundations.color.color-gray-900}",
        },
        $type: "color",
      },
      "palette-interact-secondary-foreground-active": {
        $value: {
          $dark: "{foundations.color.color-gray-900}",
          $light: "{foundations.color.color-white}",
        },
        $type: "color",
      },
      "palette-interact-secondary-foreground-disabled": {
        $value: {
          $dark: "{foundations.color.color-white-fade-foreground}",
          $light: "{foundations.color.color-gray-900-fade-foreground}",
        },
        $type: "color",
      },
      "palette-interact-secondary-foreground-hover": {
        $value: {
          $dark: "{foundations.color.color-white}",
          $light: "{foundations.color.color-gray-900}",
        },
        $type: "color",
      },
    },
    navigate: {
      "palette-navigate-background-hover": {
        $value: {
          $dark: "{foundations.color.color-white-fade-background-hover}",
          $light: "{foundations.color.color-black-fade-background-hover}",
        },
        $type: "color",
      },
      "palette-navigate-foreground-hover": {
        $value: {
          $dark: "{foundations.color.color-blue-200}",
          $light: "{foundations.color.color-blue-600}",
        },
        $type: "color",
      },
      "palette-navigate-foreground-active": {
        $value: {
          $dark: "{foundations.color.color-blue-300}",
          $light: "{foundations.color.color-blue-700}",
        },
        $type: "color",
      },
      "palette-navigate-foreground-visited": {
        $value: {
          $dark: "{foundations.color.color-purple-100}",
          $light: "{foundations.color.color-purple-800}",
        },
        $type: "color",
      },
      "palette-navigate-indicator-hover": {
        $value: {
          $dark: "{foundations.color.color-gray-90}",
          $light: "{foundations.color.color-gray-90}",
        },
        $type: "color",
      },
      "palette-navigate-indicator-active": {
        $value: {
          $dark: "{foundations.color.color-orange-400}",
          $light: "{foundations.color.color-orange-600}",
        },
        $type: "color",
      },
    },
    negative: {
      "palette-negative-foreground": {
        $value: {
          $dark: "{foundations.color.color-red-300}",
          $light: "{foundations.color.color-red-700}",
        },
        $type: "color",
      },
    },
    neutral: {
      "palette-neutral-primary-background": {
        $value: {
          $dark: "{foundations.color.color-gray-800}",
          $light: "{foundations.color.color-white}",
        },
        $type: "color",
      },
      "palette-neutral-primary-background-disabled": {
        $value: {
          $dark: "{foundations.color.color-gray-800-fade-background}",
          $light: "{foundations.color.color-white-fade-background}",
        },
        $type: "color",
      },
      "palette-neutral-primary-background-readonly": {
        $value: {
          $dark: "{foundations.color.color-gray-800-fade-background-readonly}",
          $light: "{foundations.color.color-white-fade-background-readonly}",
        },
        $type: "color",
      },
      "palette-neutral-primary-foreground": {
        $value: {
          $dark: "{foundations.color.color-white}",
          $light: "{foundations.color.color-gray-900}",
        },
        $type: "color",
      },
      "palette-neutral-primary-foreground-disabled": {
        $value: {
          $dark: "{foundations.color.color-white-fade-foreground}",
          $light: "{foundations.color.color-gray-900-fade-foreground}",
        },
        $type: "color",
      },
      "palette-neutral-primary-separator": {
        $value: {
          $dark:
            "{foundations.color.color-white-fade-separatorOpacity-primary}",
          $light:
            "{foundations.color.color-black-fade-separatorOpacity-primary}",
        },
        $type: "color",
      },
      "palette-neutral-primary-border": {
        $value: {
          $dark: "{foundations.color.color-gray-300}",
          $light: "{foundations.color.color-gray-50}",
        },
        $type: "color",
      },
      "palette-neutral-primary-border-disabled": {
        $value: {
          $dark: "{foundations.color.color-gray-300-fade-border}",
          $light: "{foundations.color.color-gray-50-fade-border}",
        },
        $type: "color",
      },
      "palette-neutral-secondary-background": {
        $value: {
          $dark: "{foundations.color.color-gray-600}",
          $light: "{foundations.color.color-gray-20}",
        },
        $type: "color",
      },
      "palette-neutral-secondary-background-disabled": {
        $value: {
          $dark: "{foundations.color.color-gray-600-fade-background}",
          $light: "{foundations.color.color-gray-20-fade-background}",
        },
        $type: "color",
      },
      "palette-neutral-secondary-background-readonly": {
        $value: {
          $dark: "{foundations.color.color-gray-600-fade-background-readonly}",
          $light: "{foundations.color.color-gray-20-fade-background-readonly}",
        },
        $type: "color",
      },
      "palette-neutral-secondary-border": {
        $value: {
          $dark: "{foundations.color.color-gray-300}",
          $light: "{foundations.color.color-gray-50}",
        },
        $type: "color",
      },
      "palette-neutral-secondary-border-disabled": {
        $value: {
          $dark: "{foundations.color.color-gray-300-fade-border}",
          $light: "{foundations.color.color-gray-50-fade-border}",
        },
        $type: "color",
      },
      "palette-neutral-secondary-foreground": {
        $value: {
          $dark: "{foundations.color.color-gray-70}",
          $light: "{foundations.color.color-gray-200}",
        },
        $type: "color",
      },
      "palette-neutral-secondary-foreground-disabled": {
        $value: {
          $dark: "{foundations.color.color-gray-70-fade-foreground}",
          $light: "{foundations.color.color-gray-200-fade-foreground}",
        },
        $type: "color",
      },
      "palette-neutral-backdrop": {
        $value: {
          $dark: "{foundations.color.color-black-fade-backdrop}",
          $light: "{foundations.color.color-white-fade-backdrop}",
        },
        $type: "color",
      },
      "palette-neutral-secondary-separator": {
        $value: {
          $dark:
            "{foundations.color.color-white-fade-separatorOpacity-secondary}",
          $light:
            "{foundations.color.color-black-fade-separatorOpacity-secondary}",
        },
        $type: "color",
      },
      "palette-neutral-tertiary-separator": {
        $value: {
          $dark:
            "{foundations.color.color-white-fade-separatorOpacity-tertiary}",
          $light:
            "{foundations.color.color-black-fade-separatorOpacity-tertiary}",
        },
        $type: "color",
      },
    },
    positive: {
      "palette-positive-foreground": {
        $value: {
          $dark: "{foundations.color.color-green-300}",
          $light: "{foundations.color.color-green-700}",
        },
        $type: "color",
      },
    },
    success: {
      "palette-success-background": {
        $value: {
          $dark: "{foundations.color.color-green-900}",
          $light: "{foundations.color.color-green-10}",
        },
        $type: "color",
      },
      "palette-success-background-selected": {
        $value: {
          $dark: "{foundations.color.color-green-900}",
          $light: "{foundations.color.color-green-20}",
        },
        $type: "color",
      },
      "palette-success-border": {
        $value: {
          $dark: "{foundations.color.color-green-400}",
          $light: "{foundations.color.color-green-500}",
        },
        $type: "color",
      },
      "palette-success-foreground": {
        $value: {
          $dark: "{foundations.color.color-green-400}",
          $light: "{foundations.color.color-green-500}",
        },
        $type: "color",
      },
    },
    warning: {
      "palette-warning-background": {
        $value: {
          $dark: "{foundations.color.color-orange-900}",
          $light: "{foundations.color.color-orange-10}",
        },
        $type: "color",
      },
      "palette-warning-background-selected": {
        $value: {
          $dark: "{foundations.color.color-orange-900}",
          $light: "{foundations.color.color-orange-20}",
        },
        $type: "color",
      },
      "palette-warning-border": {
        $value: {
          $dark: "{foundations.color.color-orange-500}",
          $light: "{foundations.color.color-orange-700}",
        },
        $type: "color",
      },
      "palette-warning-foreground": {
        $value: {
          $dark: "{foundations.color.color-orange-500}",
          $light: "{foundations.color.color-orange-700}",
        },
        $type: "color",
      },
    },
    opacity: {
      "palette-opacity-backdrop": {
        $value: "{foundations.opacity.opacity-70}",
        $type: "number",
      },
      "palette-opacity-disabled": {
        $value: "{foundations.opacity.opacity-40}",
        $type: "number",
      },
      "palette-opacity-background-readonly": {
        $value: "{foundations.opacity.opacity-0}",
        $type: "number",
      },
      "palette-opacity-border-readonly": {
        $value: "{foundations.opacity.opacity-15}",
        $type: "number",
      },
      "palette-opacity-primary-border": {
        $value: "{foundations.opacity.opacity-40}",
        $type: "number",
      },
      "palette-opacity-secondary-border": {
        $value: "{foundations.opacity.opacity-25}",
        $type: "number",
      },
      "palette-opacity-tertiary-border": {
        $value: "{foundations.opacity.opacity-15}",
        $type: "number",
      },
    },
  },
  characteristics: {
    text: {
      "text-h1-fontSize": {
        $value: {
          $low: "32px",
          $touch: "42px",
          $medium: "24px",
          $high: "18px",
        },
        $type: "fontSize",
      },
      "text-h1-lineHeight": {
        $value: {
          $low: "42px",
          $touch: "54px",
          $medium: "32px",
          $high: "24px",
        },
        $type: "lineHeight",
      },
      "text-h2-fontSize": {
        $value: {
          $low: "24px",
          $touch: "32px",
          $medium: "18px",
          $high: "14px",
        },
        $type: "fontSize",
      },
      "text-h2-lineHeight": {
        $value: {
          $low: "32px",
          $touch: "42px",
          $medium: "24px",
          $high: "18px",
        },
        $type: "lineHeight",
      },
      "text-h3-fontSize": {
        $value: {
          $low: "18px",
          $touch: "24px",
          $medium: "14px",
          $high: "12px",
        },
        $type: "fontSize",
      },
      "text-h3-lineHeight": {
        $value: {
          $low: "24px",
          $touch: "32px",
          $medium: "18px",
          $high: "16px",
        },
        $type: "lineHeight",
      },
      "text-h4-fontSize": {
        $value: {
          $low: "14px",
          $touch: "16px",
          $medium: "12px",
          $high: "11px",
        },
        $type: "fontSize",
      },
      "text-h4-lineHeight": {
        $value: {
          $low: "18px",
          $touch: "20px",
          $medium: "16px",
          $high: "14px",
        },
        $type: "lineHeight",
      },
      "text-label-fontSize": {
        $value: {
          $low: "12px",
          $touch: "14px",
          $medium: "11px",
          $high: "10px",
        },
        $type: "fontSize",
      },
      "text-label-lineHeight": {
        $value: {
          $low: "16px",
          $touch: "18px",
          $medium: "14px",
          $high: "13px",
        },
        $type: "lineHeight",
      },
      "text-fontSize": {
        $value: {
          $low: "14px",
          $touch: "16px",
          $medium: "12px",
          $high: "11px",
        },
        $type: "fontSize",
      },
      "text-lineHeight": {
        $value: {
          $low: "18px",
          $touch: "20px",
          $medium: "16px",
          $high: "14px",
        },
        $type: "lineHeight",
      },
      "text-minHeight": {
        $value: {
          $low: "18px",
          $touch: "20px",
          $medium: "16px",
          $high: "14px",
        },
        $type: "minHeight",
      },
      "text-display1-fontSize": {
        $value: {
          $low: "68px",
          $touch: "84px",
          $medium: "54px",
          $high: "42px",
        },
        $type: "fontSize",
      },
      "text-display1-lineHeight": {
        $value: {
          $low: "88px",
          $touch: "109px",
          $medium: "70px",
          $high: "54px",
        },
        $type: "lineHeight",
      },
      "text-display2-fontSize": {
        $value: {
          $low: "46px",
          $touch: "58px",
          $medium: "36px",
          $high: "28px",
        },
        $type: "fontSize",
      },
      "text-display2-lineHeight": {
        $value: {
          $low: "60px",
          $touch: "76px",
          $medium: "47px",
          $high: "36px",
        },
        $type: "lineHeight",
      },
      "text-display3-fontSize": {
        $value: {
          $low: "32px",
          $touch: "42px",
          $medium: "24px",
          $high: "18px",
        },
        $type: "fontSize",
      },
      "text-display3-lineHeight": {
        $value: {
          $low: "42px",
          $touch: "54px",
          $medium: "32px",
          $high: "24px",
        },
        $type: "lineHeight",
      },
      "text-notation-fontSize": {
        $value: {
          $low: "12px",
          $touch: "14px",
          $medium: "10px",
          $high: "8px",
        },
        $type: "fontSize",
      },
      "text-notation-lineHeight": {
        $value: {
          $low: "16px",
          $touch: "18px",
          $medium: "13px",
          $high: "10px",
        },
        $type: "lineHeight",
      },
      "text-letterSpacing": {
        $value: "0",
        $type: "letterSpacing",
      },
      "text-textAlign": {
        $value: "left",
        $type: "textAlign",
      },
      "text-textAlign-embedded": {
        $value: "center",
        $type: "textAlign",
      },
      "text-textTransform": {
        $value: "none",
        $type: "textTransform",
      },
      "text-action-letterSpacing": {
        $value: "0.6px",
        $type: "letterSpacing",
      },
      "text-action-textTransform": {
        $value: "uppercase",
        $type: "textTransform",
      },
      "text-action-textAlign": {
        $value: "center",
        $type: "textAlign",
      },
      "text-action-fontWeight": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "text-fontFamily": {
        $value: "var(--salt-typography-fontFamily)",
        $type: "fontFamily",
      },
      "text-fontWeight": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "text-fontWeight-small": {
        $value: "var(--salt-typography-fontWeight-light)",
        $type: "fontWeight",
      },
      "text-fontWeight-strong": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "text-notation-fontFamily": {
        $value: "var(--salt-typography-fontFamily)",
        $type: "fontFamily",
      },
      "text-notation-fontWeight": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "text-notation-fontWeight-small": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "text-notation-fontWeight-strong": {
        $value: "var(--salt-typography-fontWeight-bold)",
        $type: "fontWeight",
      },
      "text-h1-fontFamily": {
        $value: "var(--salt-typography-fontFamily)",
        $type: "fontFamily",
      },
      "text-h1-fontWeight": {
        $value: "var(--salt-typography-fontWeight-bold)",
        $type: "fontWeight",
      },
      "text-h1-fontWeight-small": {
        $value: "var(--salt-typography-fontWeight-medium)",
        $type: "fontWeight",
      },
      "text-h1-fontWeight-strong": {
        $value: "var(--salt-typography-fontWeight-extraBold)",
        $type: "fontWeight",
      },
      "text-h2-fontFamily": {
        $value: "var(--salt-typography-fontFamily)",
        $type: "fontFamily",
      },
      "text-h2-fontWeight": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "text-h2-fontWeight-small": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "text-h2-fontWeight-strong": {
        $value: "var(--salt-typography-fontWeight-bold)",
        $type: "fontWeight",
      },
      "text-h3-fontFamily": {
        $value: "var(--salt-typography-fontFamily)",
        $type: "fontFamily",
      },
      "text-h3-fontWeight": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "text-h3-fontWeight-small": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "text-h3-fontWeight-strong": {
        $value: "var(--salt-typography-fontWeight-bold)",
        $type: "fontWeight",
      },
      "text-h4-fontFamily": {
        $value: "var(--salt-typography-fontFamily)",
        $type: "fontFamily",
      },
      "text-h4-fontWeight": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "text-h4-fontWeight-small": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "text-h4-fontWeight-strong": {
        $value: "var(--salt-typography-fontWeight-bold)",
        $type: "fontWeight",
      },
      "text-label-fontFamily": {
        $value: "var(--salt-typography-fontFamily)",
        $type: "fontFamily",
      },
      "text-label-fontWeight": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "text-label-fontWeight-small": {
        $value: "var(--salt-typography-fontWeight-light)",
        $type: "fontWeight",
      },
      "text-label-fontWeight-strong": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "text-display1-fontFamily": {
        $value: "var(--salt-typography-fontFamily)",
        $type: "fontFamily",
      },
      "text-display1-fontWeight": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "text-display1-fontWeight-strong": {
        $value: "var(--salt-typography-fontWeight-bold)",
        $type: "fontWeight",
      },
      "text-display1-fontWeight-small": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "text-display2-fontFamily": {
        $value: "var(--salt-typography-fontFamily)",
        $type: "fontFamily",
      },
      "text-display2-fontWeight": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "text-display2-fontWeight-strong": {
        $value: "var(--salt-typography-fontWeight-bold)",
        $type: "fontWeight",
      },
      "text-display2-fontWeight-small": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "text-display3-fontFamily": {
        $value: "var(--salt-typography-fontFamily)",
        $type: "fontFamily",
      },
      "text-display3-fontWeight": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "text-display3-fontWeight-strong": {
        $value: "var(--salt-typography-fontWeight-bold)",
        $type: "fontWeight",
      },
      "text-display3-fontWeight-small": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "text-code-fontFamily": {
        $value: "var(--salt-typography-fontFamily-code)",
        $type: "fontFamily",
      },
    },
    accent: {
      "accent-background": {
        $value: "{palette.accent.palette-accent-background}",
        $type: "color",
      },
      "accent-borderColor": {
        $value: "{palette.accent.palette-accent-border}",
        $type: "color",
      },
      "accent-foreground": {
        $value: "{palette.accent.palette-accent-foreground}",
        $type: "color",
      },
    },
    actionable: {
      "actionable-cursor-hover": {
        $value: "pointer",
        $type: "cursor",
      },
      "actionable-cursor-active": {
        $value: "pointer",
        $type: "cursor",
      },
      "actionable-cursor-disabled": {
        $value: "not-allowed",
        $type: "cursor",
      },
      "actionable-primary-foreground": {
        $value: "{palette.interact.palette-interact-primary-foreground}",
        $type: "color",
      },
      "actionable-primary-foreground-hover": {
        $value: "{palette.interact.palette-interact-primary-foreground-hover}",
        $type: "color",
      },
      "actionable-primary-foreground-active": {
        $value: "{palette.interact.palette-interact-primary-foreground-active}",
        $type: "color",
      },
      "actionable-primary-foreground-disabled": {
        $value:
          "{palette.interact.palette-interact-primary-foreground-disabled}",
        $type: "color",
      },
      "actionable-primary-background": {
        $value: "{palette.interact.palette-interact-primary-background}",
        $type: "color",
      },
      "actionable-primary-background-hover": {
        $value: "{palette.interact.palette-interact-primary-background-hover}",
        $type: "color",
      },
      "actionable-primary-background-active": {
        $value: "{palette.interact.palette-interact-primary-background-active}",
        $type: "color",
      },
      "actionable-primary-background-disabled": {
        $value:
          "{palette.interact.palette-interact-primary-background-disabled}",
        $type: "color",
      },
      "actionable-cta-foreground": {
        $value: "{palette.interact.palette-interact-cta-foreground}",
        $type: "color",
      },
      "actionable-cta-foreground-hover": {
        $value: "{palette.interact.palette-interact-cta-foreground-hover}",
        $type: "color",
      },
      "actionable-cta-foreground-active": {
        $value: "{palette.interact.palette-interact-cta-foreground-active}",
        $type: "color",
      },
      "actionable-cta-foreground-disabled": {
        $value: "{palette.interact.palette-interact-cta-foreground-disabled}",
        $type: "color",
      },
      "actionable-cta-background": {
        $value: "{palette.interact.palette-interact-cta-background}",
        $type: "color",
      },
      "actionable-cta-background-hover": {
        $value: "{palette.interact.palette-interact-cta-background-hover}",
        $type: "color",
      },
      "actionable-cta-background-active": {
        $value: "{palette.interact.palette-interact-cta-background-active}",
        $type: "color",
      },
      "actionable-cta-background-disabled": {
        $value: "{palette.interact.palette-interact-cta-background-disabled}",
        $type: "color",
      },
      "actionable-secondary-foreground": {
        $value: "{palette.interact.palette-interact-secondary-foreground}",
        $type: "color",
      },
      "actionable-secondary-foreground-hover": {
        $value:
          "{palette.interact.palette-interact-secondary-foreground-hover}",
        $type: "color",
      },
      "actionable-secondary-foreground-active": {
        $value:
          "{palette.interact.palette-interact-secondary-foreground-active}",
        $type: "color",
      },
      "actionable-secondary-foreground-disabled": {
        $value:
          "{palette.interact.palette-interact-secondary-foreground-disabled}",
        $type: "color",
      },
      "actionable-secondary-background": {
        $value: "{palette.interact.palette-interact-secondary-background}",
        $type: "color",
      },
      "actionable-secondary-background-hover": {
        $value:
          "{palette.interact.palette-interact-secondary-background-hover}",
        $type: "color",
      },
      "actionable-secondary-background-active": {
        $value:
          "{palette.interact.palette-interact-secondary-background-active}",
        $type: "color",
      },
      "actionable-secondary-background-disabled": {
        $value:
          "{palette.interact.palette-interact-secondary-background-disabled}",
        $type: "color",
      },
    },
    container: {
      "container-borderStyle": {
        $value: "solid",
        $type: "borderStyle",
      },
      "container-primary-background": {
        $value: "{palette.neutral.palette-neutral-primary-background}",
        $type: "color",
      },
      "container-primary-background-disabled": {
        $value: "{palette.neutral.palette-neutral-primary-background-disabled}",
        $type: "color",
      },
      "container-primary-borderColor": {
        $value: "{palette.neutral.palette-neutral-primary-border}",
        $type: "color",
      },
      "container-primary-borderColor-disabled": {
        $value: "{palette.neutral.palette-neutral-primary-border-disabled}",
        $type: "color",
      },
      "container-secondary-background": {
        $value: "{palette.neutral.palette-neutral-secondary-background}",
        $type: "color",
      },
      "container-secondary-background-disabled": {
        $value:
          "{palette.neutral.palette-neutral-secondary-background-disabled}",
        $type: "color",
      },
      "container-secondary-borderColor": {
        $value: "{palette.neutral.palette-neutral-secondary-border}",
        $type: "color",
      },
      "container-secondary-borderColor-disabled": {
        $value: "{palette.neutral.palette-neutral-secondary-border-disabled}",
        $type: "color",
      },
    },
    content: {
      "content-primary-foreground": {
        $value: "{palette.neutral.palette-neutral-primary-foreground}",
        $type: "color",
      },
      "content-primary-foreground-disabled": {
        $value: "{palette.neutral.palette-neutral-primary-foreground-disabled}",
        $type: "color",
      },
      "content-secondary-foreground": {
        $value: "{palette.neutral.palette-neutral-secondary-foreground}",
        $type: "color",
      },
      "content-secondary-foreground-disabled": {
        $value:
          "{palette.neutral.palette-neutral-secondary-foreground-disabled}",
        $type: "color",
      },
      "content-foreground-hover": {
        $value: "{palette.navigate.palette-navigate-foreground-hover}",
        $type: "color",
      },
      "content-foreground-active": {
        $value: "{palette.navigate.palette-navigate-foreground-active}",
        $type: "color",
      },
      "content-foreground-visited": {
        $value: "{palette.navigate.palette-navigate-foreground-visited}",
        $type: "color",
      },
      "content-foreground-highlight": {
        $value: "{palette.interact.palette-interact-background-active}",
        $type: "color",
      },
    },
    draggable: {
      "draggable-horizontal-cursor-hover": {
        $value: "row-resize",
        $type: "cursor",
      },
      "draggable-horizontal-cursor-active": {
        $value: "row-resize",
        $type: "cursor",
      },
      "draggable-vertical-cursor-hover": {
        $value: "col-resize",
        $type: "cursor",
      },
      "draggable-vertical-cursor-active": {
        $value: "col-resize",
        $type: "cursor",
      },
      "draggable-grab-cursor-hover": {
        $value: "grab",
        $type: "cursor",
      },
      "draggable-grab-cursor-active": {
        $value: "grabbing",
        $type: "cursor",
      },
    },
    editable: {
      "editable-cursor-hover": {
        $value: "text",
        $type: "cursor",
      },
      "editable-cursor-active": {
        $value: "text",
        $type: "cursor",
      },
      "editable-cursor-disabled": {
        $value: "not-allowed",
        $type: "cursor",
      },
      "editable-cursor-readonly": {
        $value: "text",
        $type: "cursor",
      },
      "editable-borderStyle": {
        $value: "solid",
        $type: "borderStyle",
      },
      "editable-borderStyle-hover": {
        $value: "solid",
        $type: "borderStyle",
      },
      "editable-borderStyle-active": {
        $value: "solid",
        $type: "borderStyle",
      },
      "editable-borderStyle-disabled": {
        $value: "solid",
        $type: "borderStyle",
      },
      "editable-borderStyle-readonly": {
        $value: "solid",
        $type: "borderStyle",
      },
      "editable-borderWidth-active": {
        $value: "2px",
        $type: "borderWidth",
      },
      "editable-borderColor": {
        $value: "{palette.interact.palette-interact-border}",
        $type: "color",
      },
      "editable-borderColor-active": {
        $value: "{palette.interact.palette-interact-border-active}",
        $type: "color",
      },
      "editable-borderColor-disabled": {
        $value: "{palette.interact.palette-interact-border-disabled}",
        $type: "color",
      },
      "editable-borderColor-hover": {
        $value: "{palette.interact.palette-interact-border-hover}",
        $type: "color",
      },
      "editable-borderColor-readonly": {
        $value: "{palette.interact.palette-interact-border-readonly}",
        $type: "color",
      },
      "editable-primary-background": {
        $value: "{palette.neutral.palette-neutral-primary-background}",
        $type: "color",
      },
      "editable-primary-background-active": {
        $value: "{palette.neutral.palette-neutral-primary-background}",
        $type: "color",
      },
      "editable-primary-background-disabled": {
        $value: "{palette.neutral.palette-neutral-primary-background-disabled}",
        $type: "color",
      },
      "editable-primary-background-hover": {
        $value: "{palette.neutral.palette-neutral-primary-background}",
        $type: "color",
      },
      "editable-primary-background-readonly": {
        $value: "{palette.neutral.palette-neutral-primary-background-readonly}",
        $type: "color",
      },
      "editable-secondary-background": {
        $value: "{palette.neutral.palette-neutral-secondary-background}",
        $type: "color",
      },
      "editable-secondary-background-active": {
        $value: "{palette.neutral.palette-neutral-secondary-background}",
        $type: "color",
      },
      "editable-secondary-background-disabled": {
        $value:
          "{palette.neutral.palette-neutral-secondary-background-disabled}",
        $type: "color",
      },
      "editable-secondary-background-hover": {
        $value: "{palette.neutral.palette-neutral-secondary-background}",
        $type: "color",
      },
      "editable-secondary-background-readonly": {
        $value:
          "{palette.neutral.palette-neutral-secondary-background-readonly}",
        $type: "color",
      },
      "editable-help-fontStyle": {
        $value: "italic",
        $type: "fontStyle",
      },
    },
    focused: {
      "focused-outlineColor": {
        $value: "{palette.interact.palette-interact-outline}",
        $type: "color",
      },
      "focused-outlineStyle": {
        $value: "dotted",
        $type: "outlineStyle",
      },
      "focused-outlineWidth": {
        $value: "2px",
        $type: "outlineWidth",
      },
      "focused-outlineInset": {
        $value: "0",
        $type: "outlineInset",
      },
      "focused-outlineOffset": {
        $value: "0",
        $type: "outlineOffset",
      },
      "focused-outline": {
        $value: {
          $outlineWidth: "{characteristics.focused.focused-outlineWidth}",
          $outlineStyle: "{characteristics.focused.focused-outlineStyle}",
          $outlineColor: "{characteristics.focused.focused-outlineColor}",
        },
        $type: "outline",
      },
    },
    navigable: {
      "navigable-cursor-active": {
        $value: "pointer",
        $type: "cursor",
      },
      "navigable-cursor-hover": {
        $value: "pointer",
        $type: "cursor",
      },
      "navigable-cursor-disabled": {
        $value: "not-allowed",
        $type: "cursor",
      },
      "navigable-cursor-edit": {
        $value: "text",
        $type: "cursor",
      },
      "navigable-fontWeight": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "navigable-fontWeight-hover": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "navigable-fontWeight-active": {
        $value: "var(--salt-typography-fontWeight-semiBold)",
        $type: "fontWeight",
      },
      "navigable-fontWeight-edit": {
        $value: "var(--salt-typography-fontWeight-regular)",
        $type: "fontWeight",
      },
      "navigable-indicator-hover": {
        $value: "{palette.navigate.palette-navigate-indicator-hover}",
        $type: "color",
      },
      "navigable-indicator-active": {
        $value: "{palette.navigate.palette-navigate-indicator-active}",
        $type: "color",
      },
      "navigable-background-hover": {
        $value: "{palette.navigate.palette-navigate-background-hover}",
        $type: "color",
      },
    },
    overlayable: {
      "overlayable-shadow-scroll": {
        $value: "{foundations.shadow.shadow-100}",
        $type: "shadow",
      },
      "overlayable-shadow-region": {
        $value: "{foundations.shadow.shadow-200}",
        $type: "shadow",
      },
      "overlayable-shadow": {
        $value: "{foundations.shadow.shadow-200}",
        $type: "shadow",
      },
      "overlayable-shadow-hover": {
        $value: "{foundations.shadow.shadow-300}",
        $type: "shadow",
      },
      "overlayable-shadow-popout": {
        $value: "{foundations.shadow.shadow-400}",
        $type: "shadow",
      },
      "overlayable-shadow-drag": {
        $value: "{foundations.shadow.shadow-400}",
        $type: "shadow",
      },
      "overlayable-shadow-modal": {
        $value: "{foundations.shadow.shadow-500}",
        $type: "shadow",
      },
      "overlayable-background": {
        $value: "{palette.neutral.palette-neutral-backdrop}",
        $type: "color",
      },
    },
    selectable: {
      "selectable-cursor-hover": {
        $value: "pointer",
        $type: "cursor",
      },
      "selectable-cursor-selected": {
        $value: "pointer",
        $type: "cursor",
      },
      "selectable-cursor-blurSelected": {
        $value: "pointer",
        $type: "cursor",
      },
      "selectable-cursor-disabled": {
        $value: "not-allowed",
        $type: "cursor",
      },
      "selectable-cursor-readonly": {
        $value: "not-allowed",
        $type: "cursor",
      },
      "selectable-borderStyle": {
        $value: "solid",
        $type: "borderStyle",
      },
      "selectable-borderStyle-hover": {
        $value: "solid",
        $type: "borderStyle",
      },
      "selectable-borderStyle-selected": {
        $value: "solid",
        $type: "borderStyle",
      },
      "selectable-borderStyle-blurSelected": {
        $value: "solid",
        $type: "borderStyle",
      },
      "selectable-borderColor": {
        $value: "{palette.interact.palette-interact-border}",
        $type: "color",
      },
      "selectable-borderColor-hover": {
        $value: "{palette.interact.palette-interact-border-hover}",
        $type: "color",
      },
      "selectable-borderColor-selected": {
        $value: "{palette.interact.palette-interact-border-active}",
        $type: "color",
      },
      "selectable-borderColor-selectedDisabled": {
        $value: "{palette.interact.palette-interact-border-activeDisabled}",
        $type: "color",
      },
      "selectable-borderColor-disabled": {
        $value: "{palette.interact.palette-interact-border-disabled}",
        $type: "color",
      },
      "selectable-borderColor-readonly": {
        $value: "{palette.interact.palette-interact-border-readonly}",
        $type: "color",
      },
      "selectable-foreground": {
        $value: "{palette.interact.palette-interact-foreground}",
        $type: "color",
      },
      "selectable-foreground-disabled": {
        $value: "{palette.interact.palette-interact-foreground-disabled}",
        $type: "color",
      },
      "selectable-foreground-hover": {
        $value: "{palette.interact.palette-interact-foreground-hover}",
        $type: "color",
      },
      "selectable-foreground-selected": {
        $value: "{palette.interact.palette-interact-foreground-active}",
        $type: "color",
      },
      "selectable-foreground-selectedDisabled": {
        $value: "{palette.interact.palette-interact-foreground-activeDisabled}",
        $type: "color",
      },
      "selectable-background": {
        $value: "{palette.interact.palette-interact-background}",
        $type: "color",
      },
      "selectable-background-hover": {
        $value: "{palette.interact.palette-interact-background-hover}",
        $type: "color",
      },
      "selectable-background-selected": {
        $value: "{palette.interact.palette-interact-background-active}",
        $type: "color",
      },
      "selectable-background-blurSelected": {
        $value: "{palette.interact.palette-interact-background-blurSelected}",
        $type: "color",
      },
      "selectable-background-disabled": {
        $value: "{palette.interact.palette-interact-background-disabled}",
        $type: "color",
      },
      "selectable-background-selectedDisabled": {
        $value: "{palette.interact.palette-interact-background-activeDisabled}",
        $type: "color",
      },
    },
    separable: {
      "separable-borderStyle": {
        $value: "solid",
        $type: "borderStyle",
      },
      "separable-primary-borderColor": {
        $value: "{palette.neutral.palette-neutral-primary-separator}",
        $type: "color",
      },
      "separable-secondary-borderColor": {
        $value: "{palette.neutral.palette-neutral-secondary-separator}",
        $type: "color",
      },
      "separable-tertiary-borderColor": {
        $value: "{palette.neutral.palette-neutral-tertiary-separator}",
        $type: "color",
      },
    },
    status: {
      "status-info-foreground": {
        $value: "{palette.info.palette-info-foreground}",
        $type: "color",
      },
      "status-success-foreground": {
        $value: "{palette.success.palette-success-foreground}",
        $type: "color",
      },
      "status-warning-foreground": {
        $value: "{palette.warning.palette-warning-foreground}",
        $type: "color",
      },
      "status-error-foreground": {
        $value: "{palette.error.palette-error-foreground}",
        $type: "color",
      },
      "status-static-foreground": {
        $value: "{palette.neutral.palette-neutral-secondary-foreground}",
        $type: "color",
      },
      "status-negative-foreground": {
        $value: "{palette.negative.palette-negative-foreground}",
        $type: "color",
      },
      "status-positive-foreground": {
        $value: "{palette.positive.palette-positive-foreground}",
        $type: "color",
      },
      "status-info-borderColor": {
        $value: "{palette.info.palette-info-border}",
        $type: "color",
      },
      "status-success-borderColor": {
        $value: "{palette.success.palette-success-border}",
        $type: "color",
      },
      "status-warning-borderColor": {
        $value: "{palette.warning.palette-warning-border}",
        $type: "color",
      },
      "status-error-borderColor": {
        $value: "{palette.error.palette-error-border}",
        $type: "color",
      },
      "status-info-background": {
        $value: "{palette.info.palette-info-background}",
        $type: "color",
      },
      "status-success-background": {
        $value: "{palette.success.palette-success-background}",
        $type: "color",
      },
      "status-warning-background": {
        $value: "{palette.warning.palette-warning-background}",
        $type: "color",
      },
      "status-error-background": {
        $value: "{palette.error.palette-error-background}",
        $type: "color",
      },
      "status-success-background-selected": {
        $value: "{palette.success.palette-success-background-selected}",
        $type: "color",
      },
      "status-warning-background-selected": {
        $value: "{palette.warning.palette-warning-background-selected}",
        $type: "color",
      },
      "status-error-background-selected": {
        $value: "{palette.error.palette-error-background-selected}",
        $type: "color",
      },
    },
    target: {
      "target-background-hover": {
        $value: "{palette.interact.palette-interact-background-hover}",
        $type: "color",
      },
      "target-borderColor-hover": {
        $value: "{palette.interact.palette-interact-border-hover}",
        $type: "color",
      },
      "target-borderStyle": {
        $value: "dashed",
        $type: "borderStyle",
      },
      "target-borderStyle-hover": {
        $value: "solid",
        $type: "borderStyle",
      },
      "target-borderStyle-disabled": {
        $value: "dashed",
        $type: "borderStyle",
      },
      "target-cursor-disabled": {
        $value: "not-allowed",
        $type: "cursor",
      },
    },
    track: {
      "track-borderStyle": {
        $value: "solid",
        $type: "borderStyle",
      },
      "track-borderStyle-active": {
        $value: "solid",
        $type: "borderStyle",
      },
      "track-borderStyle-complete": {
        $value: "solid",
        $type: "borderStyle",
      },
      "track-borderStyle-incomplete": {
        $value: "dotted",
        $type: "borderStyle",
      },
      "track-borderColor": {
        $value: "{palette.neutral.palette-neutral-secondary-border}",
        $type: "color",
      },
    },
  },
};
