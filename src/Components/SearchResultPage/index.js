import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ThemeContextMode from "../../Context/ThemeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import {
  Avatar,
  Badge,
  CircularProgress,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { profileData } from "../../Data";
import { HeaderIconWrapper } from "../../Style/MenuListStyle";
import { useNavigate, useParams } from "react-router-dom";
import VideosCard from "../Videos";
import PermScanWifiIcon from "@mui/icons-material/PermScanWifi";
import { orange } from "@mui/material/colors";
import { getData } from "../../API";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function SearchResultPage() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [media, setMedia] = React.useState([]);

  React.useEffect(() => {
    const getMedia = async () => {
      const res = await getData(`search?part=snippet&q=${id}`);

      if (res.seccess) setMedia(res.data.items);
      else setError(true);

      setLoading(false);
    };
    getMedia();
  }, [id]);

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);

  const notificationsLabel = (count) => {
    if (count === 0) return "no notifications";
    if (count > 99) return "more than 99 notifications";

    return `${count} notifications`;
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const [value, setValue] = React.useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (value) navigate(`/search/${value}`);

    setValue("");
  };

  const { mode, toggleMode } = React.useContext(ThemeContextMode);
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                handleDrawerOpen();
                navigate("/");
              }}
              edge="start"
              sx={{
                marginRight: 4,
                ...(open && { display: "none" }),
              }}
            >
              <HomeIcon />
            </IconButton>
            <Box sx={{ cursor: "pointer" }}>
              <Typography
                sx={{ fontWeight: "bold", letterSpacing: 1 }}
                component={"h3"}
                variant="h6"
              >
                ROF1YEV{" "}
                <Typography
                  sx={{ color: "crimson", fontWeight: "bold" }}
                  component={"span"}
                  variant="span"
                >
                  TUBE
                </Typography>
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ display: { xs: "none", md: "block" }, width: "50%" }}>
            <Box component={"form"} onSubmit={submit}>
              <TextField
                sx={{ fontWeight: "bold" }}
                fullWidth
                label="Search"
                size="small"
                color="info"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="submit" sx={{ p: 0.5 }}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
          <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <IconButton>
                <VideoCallIcon />
              </IconButton>
              <IconButton aria-label={notificationsLabel(100)}>
                <Badge badgeContent={9} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <AccountCircleIcon />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  disableRipple
                  disableTouchRipple
                  onClick={handleCloseUserMenu}
                  sx={{
                    ":hover": {
                      background: "transparent",
                    },
                  }}
                >
                  <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                    <Avatar />
                    <Stack direction={"column"}>
                      <Typography
                        sx={{ fontSize: "1.2rem" }}
                        component={"h6"}
                        variant="h6"
                      >
                        Rofiyev Dilshod
                      </Typography>
                      <Typography component={"span"} variant="span">
                        @rof1yev
                      </Typography>
                    </Stack>
                  </Stack>
                </MenuItem>
                <Divider />
                {profileData.list.map((item, i) => {
                  if (item.text) {
                    return (
                      <HeaderIconWrapper key={i}>
                        <MenuItem
                          className="menuItem"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                          onClick={handleCloseUserMenu}
                        >
                          <Stack
                            direction={"row"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"10px"}
                          >
                            {item.icon}
                            <Typography>{item.text}</Typography>
                          </Stack>
                          {item.chevron ? <ChevronRightIcon /> : <></>}
                        </MenuItem>
                      </HeaderIconWrapper>
                    );
                  } else return <Divider sx={{ my: 1 }} key={i} />;
                })}
              </Menu>
            </Box>
            <IconButton onClick={toggleMode} color="inherit">
              {mode === "light" ? (
                <NightlightIcon sx={{ color: "#757575" }} />
              ) : (
                <WbSunnyIcon />
              )}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: "80px" }} p={4}>
        <Grid container width={"100%"} sx={{ minHeight: "100vh" }}>
          {loading ? (
            <Grid item xs={12}>
              <Box
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CircularProgress color="error" />
              </Box>
            </Grid>
          ) : (
            <Grid item xs={12}>
              {error ? (
                <Box
                  height={"100%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: orange[900],
                      fontWeight: "bold",
                      letterSpacing: 1,
                    }}
                  >
                    <PermScanWifiIcon sx={{ mr: 1, fontSize: "2rem" }} />
                    Xatolik Mavjud!
                  </Typography>
                </Box>
              ) : (
                <Grid container spacing={2}>
                  <VideosCard media={media} />
                </Grid>
              )}
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}
