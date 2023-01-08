import BarChart from "../../components/BarChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Bar = () => {
    return (
        <Box m="20px">
            <Header title = "BAR CHART" subtitle="Simple Bar Chart"/>
            <Box height="75vh">
                <BarChart/>
            </Box>
        </Box>
    )
}

export default Bar;