import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form"

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Box
        component={"div"}
        width={"100%"}
        sx={{ backgroundColor: theme.palette.background.alt }}
        p="1rem 6%"
        textAlign={"center"}
      >
        <Typography fontWeight="bold" fontSize={"32px"} color="primary">
          Social
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreen ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius={"1.5rem"}
        sx={{
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <Typography
          fontWeight={500}
          variant="h5"
          sx={{ mb: "1.5rem" }}
        >
          Welcome to social
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
