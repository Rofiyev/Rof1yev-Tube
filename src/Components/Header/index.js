import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ThemeContextMode from "../../Context/ThemeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import {
  Avatar,
  Badge,
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
import { header, profileData } from "../../Data";
import logo from "../../Image/Logotip_2.jpg";
import { HeaderIconWrapper } from "../../Style/MenuListStyle";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Header({ category, categoryFunc, children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: { xs: 1, sm: 2 },
          }}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: { xs: 0, sm: 2 },
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{ cursor: "pointer", display: { xs: "none", sm: "block" } }}
            >
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
          <Box
            sx={{
              display: { xs: "block", md: "block" },
              width: { xs: "65%", sm: "40%", md: "50%" },
            }}
          >
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
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
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
        <Box
          px={2.5}
          my={1}
          display={"flex"}
          width={"100%"}
          justifyContent={"center"}
        >
          <Box
            width={"100%"}
            display={"flex"}
            gap={"7px"}
            sx={{
              overflowX: "scroll",
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                width: "0.2em",
                height: "7px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#c30010",
                borderRadius: "10px",
                cursor: "pointer",
              },
            }}
          >
            {header.header.map((item, index) => (
              <Typography
                mb={1}
                key={index}
                sx={{
                  background: category === item ? "#000" : "#aaa",
                  padding: "5px 10px",
                  borderRadius: 1,
                  fontSize: "14px",
                  color: category === item ? "#fff" : "#000",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  userSelect: "none",
                }}
                onClick={() => categoryFunc(item)}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <Avatar
            sx={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={logo}
          />

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <DrawerHeader sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            noWrap
            component="h3"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            Bo'limlar
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          <HeaderIconWrapper>
            {header.sidebar.map((item, index) => {
              if (item.text) {
                return (
                  <ListItem
                    key={index}
                    className="menuItem"
                    disablePadding
                    sx={{ display: "block" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        sx={{ opacity: open ? 1 : 0, fontWeight: "bold" }}
                        primary={item.text}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              } else return <Divider key={index} />;
            })}
          </HeaderIconWrapper>
        </List>
      </Drawer>
      <Box component="div" sx={{ flexGrow: 1, p: { xs: 1, sm: 1.5, md: 3 } }}>
        <DrawerHeader />
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
