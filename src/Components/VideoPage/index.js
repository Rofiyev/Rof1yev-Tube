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
  Chip,
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
import { Link, useNavigate, useParams } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { getData } from "../../API";
import numeral from "numeral";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import moment from "moment";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
  const [subscribe, setSubscribe] = React.useState(true);
  const [media, setMedia] = React.useState([]);
  const [relatedMedia, setRelatedMedia] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [like, setLike] = React.useState(false);
  const [notLike, setNotLike] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getMedia = async () => {
      const res = await getData(`videos?part=snippet,statistics&id=${id}`);
      const searchData = await getData(
        `search?part=snippet&relatedToVideoId=${id}`
      );

      if (res.seccess && searchData.seccess) {
        setMedia(res.data.items[0]);
        setRelatedMedia(searchData.data.items);
      }

      setLoading(false);
    };
    getMedia();
  }, [id]);

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
      <AppBar position="fixed">
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
              onClick={() => navigate("/")}
              edge="start"
              sx={{
                marginRight: { xs: 0, sm: 2 },
              }}
            >
              <HomeIcon />
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
      </AppBar>
      <Box sx={{ marginTop: "70px" }} p={2}>
        <Grid container spacing={2}>
          {loading ? (
            <Grid item xs={12} mb={2}>
              <Box
                height={"100vh"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CircularProgress color="error" />
              </Box>
            </Grid>
          ) : (
            <>
              <Grid item xs={12} md={9}>
                <Box
                  component={"iframe"}
                  width={"100%"}
                  height={"415px"}
                  src={`https://www.youtube.com/embed/${media.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></Box>
                <Stack
                  justifyContent={"space-between"}
                  direction={"row"}
                  flexWrap={"wrap"}
                  gap={"8px"}
                  sx={{
                    alignItems: { xs: "flex-start", sm: "center" },
                  }}
                >
                  <Box>
                    <Typography
                      my={1}
                      sx={{
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "18px",
                      }}
                    >
                      {media?.snippet?.title}
                    </Typography>
                  </Box>
                  <Box>
                    <Chip
                      label={`${numeral(media.statistics?.viewCount).format(
                        "0.0a"
                      )} views`}
                      icon={<VisibilityIcon />}
                    />
                  </Box>
                </Stack>
                <Typography
                  my={1}
                  sx={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  {media?.snippet?.description?.slice(0, 400)}
                </Typography>
                <Box
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={"10px"}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    gap={"10px"}
                  >
                    <Link to={`/channel/${media?.snippet?.channelId}`}>
                      <Avatar
                        src={media.snippet?.thumbnails?.default?.url}
                        alt={media.snippet?.title}
                      />
                    </Link>
                    <Box ml={1} mr={3}>
                      <Typography fontWeight={600} sx={{ cursor: "pointer" }}>
                        {media.snippet?.channelTitle}
                      </Typography>
                    </Box>
                    {subscribe ? (
                      <Button
                        variant="outlined"
                        startIcon={<NotificationsActiveIcon />}
                        onClick={() => setSubscribe(!subscribe)}
                        color={"error"}
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        Obuna bo'lindi
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        startIcon={<NotificationsIcon />}
                        onClick={() => setSubscribe(!subscribe)}
                        color={"error"}
                        sx={{ whiteSpace: "nowrap" }}
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
                      startIcon={
                        like ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />
                      }
                      onClick={() => {
                        setLike(!like);
                        setNotLike(false);
                      }}
                      sx={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      {!like
                        ? `${numeral(media?.statistics?.likeCount).format(
                            "0.0a"
                          )}`
                        : `${numeral(
                            parseInt(media?.statistics?.likeCount) + 1
                          ).format("0.0a")}`}
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
              <Grid
                item
                sx={{
                  overflowY: "scroll",
                  maxHeight: "110vh",
                }}
                xs={12}
                md={3}
              >
                {relatedMedia?.map((item, index) => (
                  <Card key={index} sx={{ maxWidth: "100%" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        sx={{ minHeight: "180px" }}
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
                          <Link to={`/channel/${item.id.videoId}`}>
                            <Avatar
                              src={item.snippet.thumbnails.default.url}
                              alt="Logo"
                              sx={{ mr: 1 }}
                            />
                          </Link>

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
                            {`${numeral(
                              Math.floor(Math.random() * 1203066)
                            ).format("0.0a")} views`}{" "}
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
            </>
          )}
        </Grid>
      </Box>
    </>
  );
}
