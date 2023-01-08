import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="frequently asked questions page"/>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the details for this component
                        It will contain important FAQ info
                    </Typography>
               </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the details for this component
                        It will contain important FAQ info
                    </Typography>
               </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        A third important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the details for this component
                        It will contain important FAQ info
                    </Typography>
               </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        A question that's no so important 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the details for this component
                        It will contain important FAQ info
                    </Typography>
               </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        A question nobody cares about
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the details for this component
                        It will contain important FAQ info
                    </Typography>
               </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;