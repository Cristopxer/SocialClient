import { Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const theme = useSelector((state) => state.mode);

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Add</Typography>
      </FlexBetween>
      <img
        src={ theme === 'dark' ? "../assets/logo_dark.png" : "../assets/logo_light.png"}
        alt="ad"
        width="100%"
        height="auto"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Developed 💙 by Cristopher Ortiz</Typography>
        <a
          href="https://github.com/Cristopxer"
          target="_blank"
          rel="noreferrer"
          style={{ "text-decoration": "none", color: dark }}
        >
          Github - Cristopxer<Typography color={medium}></Typography>
        </a>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Curricula finished in Computer Science, Master's student in Computer
        Security, IA Developer, knowledge in React, Angular, Node.js, MongoDB,
        Firebase for web development, Python for data science and automation,
        cloud computing in AWS provider, working under agile methodologies such
        as XP, Kanban and Scrum.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
