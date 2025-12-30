import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Typography,
    Stack,
    Card,
    CssBaseline,
} from "@mui/material";
import { useEffect, useState } from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const heroImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
];

export default function LandingPage() {
    const [index, setIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const howItWorksSteps = [
        { step: "01", icon: <WifiIcon />, title: "User Connects", desc: "Client connects to Wi-Fi network" },
        { step: "02", icon: <SecurityIcon />, title: "Captive Portal", desc: "Login via voucher or credentials" },
        { step: "03", icon: <PaymentIcon />, title: "Secure Payment", desc: "MoMo, Airtel, PayPal, Stripe" },
        { step: "04", icon: <SpeedIcon />, title: "Network Control", desc: "MikroTik + RADIUS enforcement" },
        { step: "05", icon: <CheckIcon />, title: "Internet Access", desc: "Session activated instantly" },
    ];

    return (
        <>
            <CssBaseline />

            {/* ================= NAVBAR ================= */}
            <AppBar
                position="fixed"
                elevation={scrolled ? 4 : 0}
                sx={{
                    transition: "all 0.4s ease",
                    bgcolor: scrolled ? "#0d47a1" : "transparent",
                    color: "#fff",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
                    <Typography fontWeight={700} fontSize={{ xs: 18, md: 24 }}>
                        SofosHotspot
                    </Typography>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 1, sm: 2 }}
                        alignItems="center"
                    >
                        <Button color="inherit" sx={{ fontSize: { xs: 12, md: 16 } }}>Home</Button>
                        <Button color="inherit" sx={{ fontSize: { xs: 12, md: 16 } }}>Documentation</Button>
                        <Button color="inherit" sx={{ fontSize: { xs: 12, md: 16 } }}>Pricing</Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            sx={{ fontSize: { xs: 12, md: 16 } }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="outlined"
                            color="inherit"
                            size="small"
                            sx={{ fontSize: { xs: 12, md: 16 } }}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* ================= HERO SLIDER ================= */}
            <Box sx={{ height: "100vh", width: "100vw", position: "relative", overflow: "hidden" }}>
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
                <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.65)", zIndex: 1 }} />
                <Stack
                    sx={{ position: "relative", height: "100%", color: "#fff", zIndex: 2 }}
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                    textAlign="center"
                >
                    <Typography variant="h2" fontWeight={700}>
                        Powering Intelligent Connectivity
                    </Typography>
                    <Typography variant="h6">Smart Wi-Fi • Secure Access • Automated Billing</Typography>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        width={{ xs: "80%", sm: "auto" }}
                        justifyContent="center"
                    >
                        <Button size="large" variant="contained" color="secondary">Get Started</Button>
                        <Button size="large" variant="outlined" color="inherit">View Documentation</Button>
                    </Stack>
                </Stack>
            </Box>

            {/* ================= FEATURES ================= */}
            <Box sx={{ py: 12, px: 4, bgcolor: "#fafafa" }}>
                <Stack spacing={2} textAlign="center" maxWidth="800px" mx="auto" mb={8}>
                    <Typography variant="overline" color="primary" fontWeight={600} letterSpacing={1}>WHY SOFOSHOTSPOT</Typography>
                    <Typography variant="h4" fontWeight={700}>Everything You Need to Run Smart Wi-Fi</Typography>
                    <Typography color="text.secondary">
                        Powerful tools designed to manage access, payments, security, and performance — all in one intelligent platform.
                    </Typography>
                </Stack>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} maxWidth="1400px" mx="auto">
                    {[
                        { icon: <WifiIcon />, title: "High-Speed Internet Control", desc: "Advanced bandwidth shaping and session control for optimal user experience." },
                        { icon: <PaymentIcon />, title: "Automated Billing & Payments", desc: "Seamless Mobile Money and online payment integration with instant activation." },
                        { icon: <SecurityIcon />, title: "Secure Authentication", desc: "RADIUS-based AAA, MAC binding, and encrypted access for maximum security." },
                        { icon: <SpeedIcon />, title: "Real-Time Monitoring", desc: "Live session tracking, usage analytics, and automated disconnections." },
                    ].map((f, i) => (
                        <Card key={i} sx={{ flex: 1, p: 4, borderRadius: 4, textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", transition: "all 0.35s ease", "&:hover": { transform: "translateY(-12px)", boxShadow: "0 20px 40px rgba(0,0,0,0.12)" } }}>
                            <Box sx={{ width: 72, height: 72, borderRadius: "50%", bgcolor: "primary.light", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 3, color: "primary.main", fontSize: 36 }}>
                                {f.icon}
                            </Box>
                            <Typography variant="h6" fontWeight={600} gutterBottom>{f.title}</Typography>
                            <Typography color="text.secondary">{f.desc}</Typography>
                        </Card>
                    ))}
                </Stack>
            </Box>

            {/* ================= ABOUT ================= */}
            <Box sx={{ bgcolor: "#f5f7fa", py: 12, px: 4 }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={8} alignItems="center" maxWidth="1400px" mx="auto">
                    <Box flex={1}>
                        <Typography variant="h4" fontWeight={700} gutterBottom>About SofosHotspot</Typography>
                        <Typography sx={{ color: "text.secondary", mb: 2 }}>
                            SofosHotspot is a smart connectivity solution designed to simplify and power modern internet access management for businesses, institutions, and internet service providers.
                        </Typography>
                        <Typography sx={{ color: "text.secondary", mb: 2 }}>
                            Our platform enables seamless user authentication, intelligent bandwidth control, voucher billing, and real-time monitoring — all integrated with MikroTik, RADIUS, and modern payment systems.
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                            Built with scalability, security, and automation in mind, SofosHotspot is trusted in hotels, cafés, schools, churches, offices, events, and public spaces across Africa.
                        </Typography>
                        <Button variant="contained" size="large" sx={{ mt: 4 }}>Learn More</Button>
                    </Box>
                    <Box flex={1} sx={{ position: "relative", height: { xs: 320, md: 420 } }}>
                        <Box component="img" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Network Management" sx={{ width: "80%", height: "100%", objectFit: "cover", borderRadius: 3, boxShadow: 6, position: "absolute", top: 0, left: 0, transition: "0.4s", "&:hover": { transform: "scale(1.03)" } }} />
                        <Box component="img" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7" alt="WiFi Hotspot" sx={{ width: "65%", height: "75%", objectFit: "cover", borderRadius: 3, boxShadow: 6, position: "absolute", bottom: -20, right: 0, transition: "0.4s", "&:hover": { transform: "scale(1.03)" } }} />
                    </Box>
                </Stack>
            </Box>

            {/* ================= HOW IT WORKS ================= */}
            <Box
                sx={{
                    py: 14,
                    px: 4,
                    position: "relative",
                    overflow: "hidden",
                    bgcolor: "#f4f6f8",
                    backgroundImage: "url('https://images.unsplash.com/photo-1581090700227-3e961ff32999?auto=format&fit=crop&w=1400&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    "&::before": { content: '""', position: "absolute", inset: 0, bgcolor: "rgba(244,246,248,0.75)", zIndex: 0 },
                }}
            >
                <Box maxWidth="1400px" mx="auto" position="relative" zIndex={1}>
                    <Typography variant="h4" fontWeight={800} textAlign="center" mb={2}>How SofosHotspot Works</Typography>
                    <Typography textAlign="center" color="text.secondary" mb={10} maxWidth="820px" mx="auto" fontSize={18}>
                        A seamless and intelligent workflow that connects users, networks, payments, and control systems — all automated in real time.
                    </Typography>

                    <Stack direction={{ xs: "column", md: "row" }} spacing={5} alignItems="center" justifyContent="space-between" sx={{ position: "relative", zIndex: 1 }}>
                        {howItWorksSteps.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.2 }}>
                                <Box sx={{ bgcolor: "rgba(255,255,255,0.85)", borderRadius: 4, p: 4, width: { xs: "100%", md: 240 }, textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", backdropFilter: "blur(6px)", transition: "0.4s", "&:hover": { transform: "translateY(-10px)", boxShadow: "0 20px 40px rgba(0,0,0,0.12)" } }}>
                                    <Typography fontWeight={700} color="primary" mb={1} fontSize={14}>STEP {item.step}</Typography>
                                    <Box sx={{ mx: "auto", mb: 2, width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", bgcolor: "primary.main", color: "#fff", fontSize: 30, boxShadow: "0 0 15px rgba(25,118,210,0.5)" }}>
                                        {item.icon}
                                    </Box>
                                    <Typography variant="h6" fontWeight={700} mb={1}>{item.title}</Typography>
                                    <Typography color="text.secondary" fontSize={14}>{item.desc}</Typography>
                                </Box>
                            </motion.div>
                        ))}
                    </Stack>
                </Box>
            </Box>

            {/* ================= PRICING ================= */}
            <Box
                sx={{
                    py: 14,
                    px: 4,
                    position: "relative",
                    overflow: "hidden",
                    backgroundImage: "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.5)",
                        zIndex: 0,
                    },
                }}
            >
                <Box maxWidth="1400px" mx="auto" position="relative" zIndex={1}>
                    <Typography variant="h4" textAlign="center" color="#fff" mb={6} fontWeight={700}>
                        Pricing Plans
                    </Typography>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={4}
                        justifyContent="center"
                    >
                        {[
                            { name: "Daily", price: "UGX 2,000", bgColor: "rgba(255,255,255,0.1)" },
                            { name: "Weekly", price: "UGX 10,000", highlight: true, bgColor: "rgba(25,118,210,0.5)" },
                            { name: "Monthly", price: "UGX 30,000", bgColor: "rgba(255,255,255,0.1)" },
                        ].map((p, i) => (
                            <Card
                                key={i}
                                sx={{
                                    flex: 1,
                                    textAlign: "center",
                                    py: 6,
                                    px: 3,
                                    borderRadius: 4,
                                    position: "relative",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                                    transform: p.highlight ? "scale(1.05)" : "scale(1)",
                                    transition: "all 0.4s ease",
                                    "&:hover": {
                                        transform: "scale(1.08)",
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                                    },
                                    bgcolor: p.bgColor,
                                    color: "#fff",
                                    backdropFilter: "blur(10px)",
                                    border: p.highlight ? "2px solid #fff" : "1px solid rgba(255,255,255,0.2)",
                                }}
                            >
                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                    {p.name}
                                </Typography>

                                <Typography variant="h4" color="primary" my={2}>
                                    {p.price}
                                </Typography>

                                <Stack spacing={1}>
                                    <Typography><CheckIcon fontSize="small" /> Unlimited Access</Typography>
                                    <Typography><CheckIcon fontSize="small" /> Secure Login</Typography>
                                    <Typography><CheckIcon fontSize="small" /> Auto Disconnect</Typography>
                                </Stack>

                                <Button
                                    variant={p.highlight ? "contained" : "outlined"}
                                    color={p.highlight ? "primary" : "inherit"}
                                    sx={{ mt: 4 }}
                                >
                                    Choose Plan
                                </Button>
                            </Card>
                        ))}
                    </Stack>
                </Box>
            </Box>

            {/* ================= CONTACT ================= */}
            <Box
                sx={{
                    py: 14,
                    px: 4,
                    bgcolor: "#f4f6f8",
                }}
            >
                <Box maxWidth="1400px" mx="auto">
                    <Typography variant="h4" fontWeight={700} textAlign="center" mb={2}>
                        Contact Us
                    </Typography>
                    <Typography color="text.secondary" textAlign="center" mb={8}>
                        Have questions or want to reach out? Send us a message or find us at our office.
                    </Typography>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={6}
                        alignItems="flex-start"
                    >
                        {/* Left Column: Contact Info */}
                        <Stack spacing={4} flex={1}>
                            {[
                                {
                                    icon: <LocationOnIcon fontSize="large" color="primary" />,
                                    title: "Location",
                                    text: "Gulu City, Muroni Road",
                                },
                                {
                                    icon: <EmailIcon fontSize="large" color="primary" />,
                                    title: "Email",
                                    text: "info@sofoshotspot.com",
                                },
                                {
                                    icon: <PhoneIcon fontSize="large" color="primary" />,
                                    title: "Phone",
                                    text: "+256 700 000 000",
                                },
                            ].map((c, i) => (
                                <Stack direction="row" spacing={2} key={i} alignItems="center">
                                    {c.icon}
                                    <Stack>
                                        <Typography fontWeight={700}>{c.title}</Typography>
                                        <Typography color="text.secondary">{c.text}</Typography>
                                    </Stack>
                                </Stack>
                            ))}

                            <Stack direction="row" spacing={2} mt={2}>
                                <FacebookIcon />
                                <TwitterIcon />
                                <InstagramIcon />
                                <LinkedInIcon />
                            </Stack>
                        </Stack>

                        {/* Right Column: Contact Form Placeholder */}
                        <Box flex={1}>
                            <Box
                                component="form"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                }}
                            >
                                <input placeholder="Name" style={{ padding: 12, borderRadius: 6, border: "1px solid #ccc" }} />
                                <input placeholder="Email" style={{ padding: 12, borderRadius: 6, border: "1px solid #ccc" }} />
                                <textarea placeholder="Message" rows={6} style={{ padding: 12, borderRadius: 6, border: "1px solid #ccc" }} />
                                <Button variant="contained">Send Message</Button>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}