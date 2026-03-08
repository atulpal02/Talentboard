import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { searchedQuery } = useSelector((store) => store.job);

  useEffect(() => {
    const fetchAllJobs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
        if (res.data?.status) dispatch(setAllJobs(res.data.jobs || []));
        else console.warn("Failed to fetch jobs.");
      } catch (err) {
        console.error("Error fetching jobs:", err.response?.status || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllJobs();
  }, [dispatch, searchedQuery]);

  return { loading };
};

export default useGetAllJobs;
