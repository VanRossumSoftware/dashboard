import {Box, Button, IconButton, Typography, useTheme} from "@mui/material"
import Header from "../../components/Header"
import {tokens } from "../../theme"
import {mockTransactions as data, mockTransactions} from "../../data/mockData";
import DownloadOutlinedIcon  from "@mui/icons-material/DownloadOutlined";
import EmailIcon  from "@mui/icons-material/Email";
import PointOfSaleIcon  from "@mui/icons-material/PointOfSale";
import PersonAddIcon  from "@mui/icons-material/PersonAdd";
import TrafficIcon  from "@mui/icons-material/Traffic";

import LineChart from "../../components/LineChart"
import BarChart from "../../components/BarChart"
import GeographyChart from "../../components/GeographyChart"
import StatBox from "../../components/StatBox"
import ProgressCircle from "../../components/ProgressCircle"
import { Email } from "@mui/icons-material";
import { Bar } from "@nivo/bar";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to the dashboard"/>

                <Box>
                    <Button
                        sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px, 20px"}}>
                            <DownloadOutlinedIcon sx={{ mr: "10px"}} />
                            Download Reports
                    </Button>
                </Box>
            </Box>

            {/* Grid & Charts */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px">
                
                {/* Row 1 */}
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="12,361" subtitle="Emails Sent" progress="0.65" increase="14%" icon= {<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}} /> }/>
                </Box>
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="498,498" subtitle="Sales" progress="0.85" increase="3%" icon= {<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}} /> }/>
                </Box>
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="133,465" subtitle="New Clients" progress="0.78" increase="7%" icon= {<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}} /> }/>
                </Box>
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="1,143,165" subtitle="Traffic Inbound" progress="0.35" increase="4%" icon= {<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}} /> }/>
                </Box>

                {/* Row 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}>
                    
                    <Box>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.grey[100]}
                        >
                            Revenue Generated
                        </Typography>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color={colors.greenAccent[500]}
                        >
                            $59,342.32
                        </Typography>
                    </Box>

                    {/* TODO: Put download icon into the top-right of this component */}
                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon
                                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                            />
                        </IconButton>
                    </Box>
                    <Box height="250px" mt="-20px">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>

                {/* Transactions */}
                <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
                    <Box 
                        display="flex" 
                        justifyContent="space-between" 
                        alignItems="center" 
                        borderBottom={`4px solid ${colors.primary[500]}`} 
                        colors={colors.grey[100]} 
                        p="15px"
                        >
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                            >
                            <Box>
                                <Typography variant="h5" fontWeight="600" color={colors.greenAccent[500]}>
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box>
                            <Box backgroundColor={colors.greenAccent[500]} padding="5px 10px" borderRadius="4px">
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Row 3 */}
                <Box 
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    padding="30px">
                    <Typography variant="h5" fontWeight="600">
                        Campaign
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                        >
                        <ProgressCircle size="125" progress="0.75"/>
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{mt: "15px"}}>
                            $48,352 revenue generated
                        </Typography>
                        <Typography>
                            Includes extra misc expenditures and costs
                        </Typography>
                    </Box>
                </Box>

                <Box 
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    >
                    <Typography variant="h5" fontWeight="600" sx={{p: "30px 30px 0 30px"}}>
                        Sales Quantity
                    </Typography>
                    <Box
                        height="250px"
                        mt="-20px"
                        >
                        <BarChart isDashboard={true}/>
                    </Box>
                </Box>

                <Box 
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    padding="30px">
                    <Typography variant="h5" fontWeight="600" sx={{mb: "15px"}}>
                        Geography Based traffic
                    </Typography>
                    <Box height="200px">
                        <GeographyChart isDashboard={true}/>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Dashboard;