
import GenrePanel from "./GenrePanel";
import Dashboard from "./DashBoard";
import "./LandingPage.css";
import Header from "./Header";
import axios from "axios";
import { config } from "../App";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";


const LandingPage = () => {
    const enqueueSnackbar = useSnackbar();
    const [Data, setData] = useState([]);
    const onLoadHandler = async () => {
        const url = "http://7e01f22c-eb23-46c0-ab2c-f5cd65fff574.mock.pstmn.io/v1/videos"
        const res = await getVideos(url);
        setData(res);
    };

    useEffect(() => {
        onLoadHandler();
      
    }, []);

    const getVideos = async (url) => {
        try {
            const res = await axios.get(url);
            setData(res.data);
            return res.data;
        } catch (e) {
            if (e.response && e.response.data.message) {
                enqueueSnackbar(e.response.data.message, { variant: "error" });
                return null;
            } else {
                enqueueSnackbar("Something went wrong", { variant: "error" });
                return null;
            }
        }
    };
    return (
        <div >
            <Header />
            <GenrePanel />
            <Dashboard Data={Data}  />
        </div>
    )

}

export default LandingPage