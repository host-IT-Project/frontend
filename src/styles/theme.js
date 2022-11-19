const theme = {
  light: {
    id: "T_001",
    name: "Light",
    colors: {
      body: "#fff",
      text: "#222",
      background: "rgb(249,249,249)",
      button: {
        text: "#FFFFFF",
        background: "#000000",
      },
      link: {
        text: "teal",
        opacity: 1,
      },
      primary: "#3579F6",
      secondary: "#9aaae6",
      error: "#eb5757",
      black: "#000",
      darkgray: "#767676",
      middlegray: "#c4c4c4",
      lightgray: "#dbdbdb",
      whitegray: "#f2f2f2",
      white: "#fff",
    },
    font: {
      default:
        "Spoqa Han Sans Neo, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;",
      gmarketSans: "GmarketSans",
    },
  },
};

/**
 아래는 예시임
    const theme = {
        light: {
            id: 'T_001',
            name: 'Light',
            colors: {
                body: '#FFFFFF',
                text: '#000000',
                button: {
                    text: '#FFFFFF',
                    background: '#000000',
                },
                link: {
                    text: 'teal',
                    opacity: 1,
                },
            },
            font: 'Tinos',
        },
        seaWave: {
            id: 'T_007',
            name: 'Sea Wave',
            colors: {
                body: '#9be7ff',
                text: '#0d47a1',
                button: {
                    text: '#ffffff',
                    background: '#0d47a1',
                },
                link: {
                    text: '#0d47a1',
                    opacity: 0.8,
                },
            },
            font: 'Ubuntu',
        },
    };
*/

export default theme;
