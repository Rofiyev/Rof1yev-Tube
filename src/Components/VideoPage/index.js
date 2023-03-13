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
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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
import HomeIcon from "@mui/icons-material/Home";
import { getData } from "../../API";
import numeral from "numeral";
import moment from "moment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

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

export default function VideoPage() {
  const [open, setOpen] = React.useState(false);
  const [subscribe, setSubscribe] = React.useState(true);
  const [media, setMedia] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [like, setLike] = React.useState(false);
  const [notLike, setNotLike] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { id } = useParams();
  console.log(id);

  React.useEffect(() => {
    const getMedia = async () => {
      const res = await getData(`search?part=snippet&q=${id}`);
      if (res.seccess) setMedia(res.data.items);
    };
    getMedia();
  }, [id]);

  const handleDrawerOpen = () => setOpen(true);

  const notificationsLabel = (count) => {
    if (count === 0) return "no notifications";
    if (count > 99) return "more than 99 notifications";

    return `${count} notifications`;
  };

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

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
      <Box sx={{ marginTop: "70px" }} p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Box
              component={"iframe"}
              width={"100%"}
              height={"415px"}
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></Box>
            <Typography
              my={1}
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              {media[0]?.snippet?.description}
            </Typography>
            <Box
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Avatar src={media[0]?.snippet?.thumbnails?.default?.url} />
                <Box ml={1} mr={3}>
                  <Typography fontWeight={600} sx={{ cursor: "pointer" }}>
                    {media[0]?.snippet?.channelTitle}
                  </Typography>
                  <Typography fontSize={"14px"}>
                    {" "}
                    {`${numeral(Math.floor(Math.random() * 1203066)).format(
                      "0.0a"
                    )} follows`}
                  </Typography>
                </Box>
                {subscribe ? (
                  <Button
                    variant="outlined"
                    startIcon={<NotificationsActiveIcon />}
                    onClick={() => setSubscribe(!subscribe)}
                    color={"error"}
                  >
                    Obuna bo'lindi
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    startIcon={<NotificationsIcon />}
                    onClick={() => setSubscribe(!subscribe)}
                    color={"error"}
                  >
                    Obuna bo'lish
                  </Button>
                )}
              </Box>
              <ButtonGroup
                variant="outlined"
                color="error"
                aria-label="outlined button group"
              >
                <Button
                  startIcon={like ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                  onClick={() => {
                    setLike(!like);
                    setNotLike(false);
                  }}
                  sx={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  {!like ? 99 : 99 + 1}
                </Button>
                <Button
                  startIcon={
                    notLike ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />
                  }
                  onClick={() => {
                    setNotLike(!notLike);
                    setLike(false);
                  }}
                ></Button>
              </ButtonGroup>
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "block" } }} md={3}>
            {media.map((item, index) => (
              <Card key={index} sx={{ maxWidth: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={item.snippet?.thumbnails?.high?.url}
                    alt={item.id.videoId}
                    onClick={() => navigate(`/video/${item.id.videoId}`)}
                  />
                </CardActionArea>
                <CardContent
                  sx={{
                    mt: 1,
                    dispaly: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    px: 1,
                    py: 1.5,
                  }}
                >
                  <Typography
                    component={"p"}
                    variant="p"
                    sx={{ fontWeight: "bold" }}
                  >
                    {`${item?.snippet?.title.slice(0, 55)}...`}
                  </Typography>
                  <Stack mt={1} direction={"column"}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Avatar
                        src={item.snippet.thumbnails.default.url}
                        alt="Logo"
                        sx={{ mr: 1 }}
                      />
                      <Typography
                        sx={{
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "bold",
                        }}
                        component={"p"}
                        variant="p"
                      >
                        {item?.snippet?.channelTitle}
                      </Typography>
                    </Box>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography
                        component={"span"}
                        variant="span"
                        sx={{ fontSize: "13px", px: 1, mt: 1 }}
                      >
                        {`${numeral(Math.floor(Math.random() * 1203066)).format(
                          "0.0a"
                        )} views`}{" "}
                        • {moment(item?.snippet?.publishTime).fromNow()}
                      </Typography>
                      <IconButton size="large" color="inherit">
                        <MoreVertIcon />
                      </IconButton>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
