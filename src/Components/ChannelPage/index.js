import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { getData } from "../../API";
import numeral from "numeral";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import TabPanel from "../Tabs/TabsItem";
import PropTypes from "prop-types";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ChannelPage() {
  const [channelDetail, setChannelDetail] = useState([]);
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [subscribe, setSubscribe] = React.useState(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(channelDetail);
  console.log(video);

  useEffect(() => {
    const getChannelData = async () => {
      try {
        const resChannel = await getData(
          `channels?part=snippet,statistics&id=${id}`
        );
        const resVideo = await getData(`search?channelId=${id}&part=snippet`);

        if (resChannel.seccess & resVideo.seccess) {
          setChannelDetail(resChannel.data.items[0]);
          setVideo(resVideo.data.items);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getChannelData();
  }, [id]);

  return (
    <Stack sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {loading ? (
          <Box
            height={"100vh"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CircularProgress color="error" />
          </Box>
        ) : (
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                height: "50vh",
                backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                mb: 2,
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <Stack
                direction={"row"}
                flexWrap={"wrap"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Avatar
                  sx={{ width: "120px", height: "120px", objectFit: "cover" }}
                  src={channelDetail?.snippet?.thumbnails?.high?.url}
                  alt="Avatar"
                />
                <Stack direction={"column"}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      fontFamily: "Poppins', sans-serif",
                      letterSpacing: "2px",
                    }}
                  >
                    {channelDetail?.brandingSettings?.channel?.title}
                  </Typography>
                  <Typography>{channelDetail?.snippet?.customUrl}</Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Poppins', sans-serif",
                    }}
                  >
                    {`${numeral(
                      channelDetail?.statistics?.subscriberCount
                    ).format("0.0a")} subscribers`}
                  </Typography>
                </Stack>
              </Stack>
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
            <Box sx={{ width: "100%" }} mt={4}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  maxWidth: { xs: "270px", sm: "490px", md: "100%" },
                }}
              >
                <Tabs
                  sx={{ color: "#121212", fontWeight: "bold" }}
                  textColor="#121212"
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { background: "crimson" } }}
                >
                  <Tab
                    sx={{ fontWight: "bold" }}
                    label="Home"
                    {...a11yProps(0)}
                  />
                  <Tab label="Videos" {...a11yProps(1)} />
                  <Tab label="Shorts" {...a11yProps(2)} />
                  <Tab label="Playlists" {...a11yProps(3)} />
                  <Tab label="Channel" {...a11yProps(4)} />
                  <Tab label="About" {...a11yProps(5)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Home
              </TabPanel>
              <TabPanel value={value} index={1}>
                Videos
              </TabPanel>
              <TabPanel value={value} index={2}>
                Shorts
              </TabPanel>
              <TabPanel value={value} index={3}>
                Playlists
              </TabPanel>
              <TabPanel value={value} index={4}>
                Channel
              </TabPanel>
              <TabPanel value={value} index={5}>
                About
              </TabPanel>
            </Box>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
