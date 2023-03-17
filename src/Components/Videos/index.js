import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import moment from "moment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";

export default function VideosCard({ media }) {
  const navigate = useNavigate();
  return (
    <>
      {media.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: "100%" }}>
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
              <Box mt={1} width={"100%"}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <Stack direction={"row"}>
                    <Link to={`/channel/${item?.snippet?.channelId}`}>
                      <Avatar
                        src={item.snippet.thumbnails.default.url}
                        alt="Logo"
                        sx={{ mr: 1 }}
                      />
                    </Link>
                    <Stack direction={"column"}>
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
                      <Typography
                        component={"span"}
                        variant="span"
                        sx={{ fontSize: "13px" }}
                      >
                        {moment(item?.snippet?.publishTime).fromNow()}
                      </Typography>
                    </Stack>
                  </Stack>
                  <IconButton size="large" color="inherit">
                    <MoreVertIcon />
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
