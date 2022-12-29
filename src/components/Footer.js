import { Avatar, Button, Stack, Box } from "@mui/material";



import "./Footer.css";



const Footer = () => {
    return(
    <Box className="footer">
        <Box>
            <img src="logo_dark.svg" alt="QKart-icon"></img>
        </Box>
        <Box>

            <p className="footer-text">
                QKart is your one stop solution...
            </p>

        </Box>

    </Box>
    
    )
}


export default Footer;