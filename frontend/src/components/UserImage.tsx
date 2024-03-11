import { Box } from "@mui/material";

interface Props {
  image: string | undefined;
  size?: string;
}
const UserImage = ({ image, size = "60px" }: Props) => {
  return (
    <Box width={size} height={size}>
      <img
        src={`http://localhost:8000/assets/${image}`}
        style={{ objectFit: "cover", borderRadius: "50%" }}
        height={size}
        width={size}
        alt="user"
      />
    </Box>
  );
};

export default UserImage;
