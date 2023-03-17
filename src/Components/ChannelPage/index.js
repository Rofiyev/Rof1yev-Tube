import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { header } from "../../Data";
import logo from "../../Image/Logotip_2.jpg";
import { HeaderIconWrapper } from "../../Style/MenuListStyle";
import { Stack } from "@mui/system";
import { getData } from "../../API";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function ChannelPage() {
  const [open] = useState(true);
  const [channelDetail, setChannelDetail] = useState([]);
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getChannelData = async () => {
      try {
        const resChannel = await getData(
          `channels?part=snippet,statistics&id=${id}`
        );
        console.log(resChannel);
        const resVideo = await getData(`search?channelId=${id}&part=snippet`);

        if (resChannel.seccess & resVideo.succsess) {
          setChannelDetail(resChannel.items[0]);
          setVideo(resVideo.items);
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
      <Drawer
        variant="permanent"
        open={open}
        sx={{ width: "250px", display: { xs: "none", md: "block" } }}
      >
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
      <Box
        sx={{ width: { xs: "100%", md: "75%" }, ml: { xs: 0, md: "240px" } }}
      >
        {loading ? (
          <Box
            height={"100%"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CircularProgress color="error" />
          </Box>
        ) : (
          <h1>ChannelPage: {id}</h1>
        )}
      </Box>
    </Stack>
  );
}
