export default {
    palette: {
      primary: {
        light: "#66ffa6",
        main: "#00e676",
        dark: "#00b248",
        contrastText: "#fffff"
      },
      secondary: {
        light: "#67daff",
        main: "#03a9f4",
        dark: "#007ac1",
        contrastText: "#fffff"
      }
    },
    styles: {
      typography: {
        useNextVariants: true
      },
      form: {
        textAlign: "center"
      },
      logo: {
        width: 100,
        height: 100,
        margin: "20px auto 20px auto"
      },
      pageTitle: {
        margin: "10px auto 10px auto"
      },
      TextField: {
        margin: "10px auto 10px auto"
      },
      button: {
        margin: "10px auto 10px auto",
        position: "relative"
      },
      customError: {
        color: "red",
        fontSize: "0.8rem",
        marginTop: 10
      },
      progress: {
        positions: "absolute"
      },
      invisibleSeparator: {
        border: "none",
        margin: 4
      },
      visibleSeparator: {
        width: "100%",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        marginBottom: 20
      },
      paper: {
        padding: 20
      },
      expenseType: {
        paddingTop: 10.6
      },
      profile: {
        "& .image-wrapper": {
          textAlign: "center",
          position: "relative",
          "& button": {
            position: "absolute",
            top: "80%",
            left: "70%"
          }
        },
        "& .profile-image": {
          width: 200,
          height: 200,
          objectFit: "cover",
          maxWidth: "100%",
          borderRadius: "50%"
        },
        "& .profile-details": {
          textAlign: "center",
          "& span, svg": {
            verticalAlign: "middle"
          },
          "& a": {
            color: "#00e676"
          }
        },
        "& hr": {
          border: "none",
          margin: "0 0 10px 0"
        },
        "& svg.button": {
          "&:hover": {
            cursor: "pointer"
          }
        }
      },
      buttons: {
        textAlign: "center",
        "& a": {
          margin: "20px 10px"
        }
      }
    }
  };
  