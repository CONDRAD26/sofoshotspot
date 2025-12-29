import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Typography,
    Stack,
    Card,
    CardContent,
    Fade,
    CssBaseline,
} from "@mui/material";
import { useEffect, useState } from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckIcon from "@mui/icons-material/Check";

const heroImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
];

export default function LandingPage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <CssBaseline />

            {/* ================= NAVBAR ================= */}
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography fontWeight={700}>SofosHotspot</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Documentation</Button>
                        <Button color="inherit">Pricing</Button>
                        <Button variant="contained" color="secondary">Login</Button>
                        <Button variant="outlined" color="inherit">Sign Up</Button>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* ================= HERO SLIDER (FIXED) ================= */}
            <Box
                sx={{
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background Image */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${heroImages[index]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "opacity 1.2s ease-in-out",
                    }}
                />

                {/* Dark Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.65)",
                        zIndex: 1,
                    }}
                />

                {/* Hero Content */}
                <Stack
                    sx={{
                        position: "relative",
                        height: "100%",
                        color: "#fff",
                        zIndex: 2,
                    }}
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                    textAlign="center"
                >
                    <Typography variant="h2" fontWeight={700}>
                        Powering Intelligent Connectivity
                    </Typography>
                    <Typography variant="h6">
                        Smart Wi-Fi • Secure Access • Automated Billing
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button size="large" variant="contained" color="secondary">
                            Get Started
                        </Button>
                        <Button size="large" variant="outlined" color="inherit">
                            View Documentation
                        </Button>
                    </Stack>
                </Stack>
            </Box>


            {/* ================= FEATURES ================= */}
            <Box sx={{ py: 12, px: 4, bgcolor: "#fafafa" }}>
                <Stack
                    spacing={2}
                    textAlign="center"
                    maxWidth="800px"
                    mx="auto"
                    mb={8}
                >
                    <Typography
                        variant="overline"
                        color="primary"
                        fontWeight={600}
                        letterSpacing={1}
                    >
                        WHY SOFOSHOTSPOT
                    </Typography>

                    <Typography variant="h4" fontWeight={700}>
                        Everything You Need to Run Smart Wi-Fi
                    </Typography>

                    <Typography color="text.secondary">
                        Powerful tools designed to manage access, payments, security, and
                        performance — all in one intelligent platform.
                    </Typography>
                </Stack>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={4}
                    maxWidth="1400px"
                    mx="auto"
                >
                    {[
                        {
                            icon: <WifiIcon />,
                            title: "High-Speed Internet Control",
                            desc: "Advanced bandwidth shaping and session control for optimal user experience.",
                        },
                        {
                            icon: <PaymentIcon />,
                            title: "Automated Billing & Payments",
                            desc: "Seamless Mobile Money and online payment integration with instant activation.",
                        },
                        {
                            icon: <SecurityIcon />,
                            title: "Secure Authentication",
                            desc: "RADIUS-based AAA, MAC binding, and encrypted access for maximum security.",
                        },
                        {
                            icon: <SpeedIcon />,
                            title: "Real-Time Monitoring",
                            desc: "Live session tracking, usage analytics, and automated disconnections.",
                        },
                    ].map((f, i) => (
                        <Card
                            key={i}
                            sx={{
                                flex: 1,
                                p: 4,
                                borderRadius: 4,
                                textAlign: "center",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                                transition: "all 0.35s ease",
                                "&:hover": {
                                    transform: "translateY(-12px)",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                                },
                            }}
                        >
                            {/* Icon Circle */}
                            <Box
                                sx={{
                                    width: 72,
                                    height: 72,
                                    borderRadius: "50%",
                                    bgcolor: "primary.light",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mx: "auto",
                                    mb: 3,
                                    color: "primary.main",
                                    fontSize: 36,
                                }}
                            >
                                {f.icon}
                            </Box>

                            <Typography variant="h6" fontWeight={600} gutterBottom>
                                {f.title}
                            </Typography>

                            <Typography color="text.secondary">
                                {f.desc}
                            </Typography>
                        </Card>
                    ))}
                </Stack>
            </Box>


            {/* ================= ABOUT ================= */}
            <Box sx={{ bgcolor: "#f5f7fa", py: 12, px: 4 }}>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={8}
                    alignItems="center"
                    maxWidth="1400px"
                    mx="auto"
                >
                    {/* TEXT SIDE */}
                    <Box flex={1}>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                            gutterBottom
                        >
                            About SofosHotspot
                        </Typography>

                        <Typography sx={{ color: "text.secondary", mb: 2 }}>
                            SofosHotspot is a smart connectivity solution designed to simplify
                            and power modern internet access management for businesses,
                            institutions, and internet service providers.
                        </Typography>

                        <Typography sx={{ color: "text.secondary", mb: 2 }}>
                            Our platform enables seamless user authentication, intelligent
                            bandwidth control, voucher billing, and real-time monitoring —
                            all integrated with MikroTik, RADIUS, and modern payment systems.
                        </Typography>

                        <Typography sx={{ color: "text.secondary" }}>
                            Built with scalability, security, and automation in mind,
                            SofosHotspot is trusted in hotels, cafés, schools, churches,
                            offices, events, and public spaces across Africa.
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            sx={{ mt: 4 }}
                        >
                            Learn More
                        </Button>
                    </Box>

                    {/* IMAGE SIDE */}
                    <Box
                        flex={1}
                        sx={{
                            position: "relative",
                            height: { xs: 320, md: 420 },
                        }}
                    >
                        {/* Image 1 */}
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                            alt="Network Management"
                            sx={{
                                width: "80%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: 3,
                                boxShadow: 6,
                                position: "absolute",
                                top: 0,
                                left: 0,
                                transition: "0.4s",
                                "&:hover": {
                                    transform: "scale(1.03)",
                                },
                            }}
                        />

                        {/* Image 2 */}
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                            alt="WiFi Hotspot"
                            sx={{
                                width: "65%",
                                height: "75%",
                                objectFit: "cover",
                                borderRadius: 3,
                                boxShadow: 6,
                                position: "absolute",
                                bottom: -20,
                                right: 0,
                                transition: "0.4s",
                                "&:hover": {
                                    transform: "scale(1.03)",
                                },
                            }}
                        />
                    </Box>
                </Stack>
            </Box>


            {/* ================= PRICING ================= */}
            <Box sx={{ py: 10, px: 4 }}>
                <Typography variant="h4" textAlign="center">
                    Pricing Plans
                </Typography>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={4}
                    mt={6}
                    maxWidth="1400px"
                    mx="auto"
                >
                    {[
                        { name: "Daily", price: "UGX 2,000" },
                        { name: "Weekly", price: "UGX 10,000", highlight: true },
                        { name: "Monthly", price: "UGX 30,000" },
                    ].map((p, i) => (
                        <Card
                            key={i}
                            sx={{
                                flex: 1,
                                textAlign: "center",
                                py: 5,
                                border: p.highlight ? "3px solid #1976d2" : "none",
                                transform: p.highlight ? "scale(1.05)" : "none",
                            }}
                        >
                            <Typography variant="h6">{p.name}</Typography>
                            <Typography variant="h4" color="primary" my={2}>
                                {p.price}
                            </Typography>
                            <Stack spacing={1}>
                                <Typography><CheckIcon fontSize="small" /> Unlimited Access</Typography>
                                <Typography><CheckIcon fontSize="small" /> Secure Login</Typography>
                                <Typography><CheckIcon fontSize="small" /> Auto Disconnect</Typography>
                            </Stack>
                            <Button variant="contained" sx={{ mt: 4 }}>
                                Choose Plan
                            </Button>
                        </Card>
                    ))}
                </Stack>
            </Box>

            {/* ================= FOOTER ================= */}
            <Box sx={{ bgcolor: "#0d47a1", color: "#fff", py: 4, textAlign: "center" }}>
                <Typography>
                    © {new Date().getFullYear()} SofosHotspot — Powering Intelligent Connectivity
                </Typography>
            </Box>
        </>
    );
}
