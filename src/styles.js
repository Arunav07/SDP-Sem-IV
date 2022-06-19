import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
Navbar: {
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(20px)",
    "-webkit-backdrop-filter": "blur(20px)"
}
}));

export default useStyles;