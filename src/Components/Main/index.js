import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getData } from "../../API";
import VideosCard from "../Videos";
import PermScanWifiIcon from "@mui/icons-material/PermScanWifi";
import { orange } from "@mui/material/colors";

export default function Main({ category }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      const res = await getData(`search?part=snippet&q=${category}`);

      if (res.seccess) setMedia(res.data.items);
      else setError(true);

      setLoading(false);
    };
    getMedia();
  }, [category]);

  return (
    <Grid container width={"100%"} sx={{ minHeight: "50vh" }}>
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
                <PermScanWifiIcon sx={{ mr: 1, fontSize: "2rem" }} /> Xatolik
                Mavjud!
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
  );
}
