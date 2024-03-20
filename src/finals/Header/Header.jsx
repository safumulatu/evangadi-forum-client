const [allQuestions, setAllQuestions] = useState([]);
  // console.log(user);
  useEffect(() => {
    AllQuestions();
  }, []);
  const AllQuestions = async () => {
    try {
      const { data } = await axios.get("/questions/allquestions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setAllQuestions(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };