import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import numeral from "numeral";

export default function VideosCard({ media }) {
  console.log(media);
  return (
    <>
      {media.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <iframe
              width={"100%"}
              height={"200px"}
              src={`https://www.youtube.com/embed/${item.id.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <Box
              mt={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              height={"120px"}
            >
              <Typography
                component={"p"}
                variant="p"
                sx={{
                  fontWeight: "bold",
                  ":hover": {
                    cursor: "pointer",
                    color: "#203354",
                    textDecoration: "underline",
                  },
                }}
              >
                {item?.snippet?.title.slice(0, 55)}
              </Typography>
              <Stack direction={"column"}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Avatar
                    src={item.snippet.thumbnails.default.url}
                    alt="Logo"
                    sx={{ mr: 1 }}
                  />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#6d6d6d",
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
                <Typography
                  component={"span"}
                  variant="span"
                  sx={{ fontSize: "13px", color: "#6d6d6d", px: 1, mt: 1 }}
                >
                  {`${numeral(Math.floor(Math.random() * 1203066)).format(
                    "0.0a"
                  )} views`}{" "}
                  • {moment(item?.snippet?.publishTime).fromNow()}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
}
