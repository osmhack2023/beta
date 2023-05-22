import React, { useRef } from "react";
import { Snackbar, TextField } from "@mui/material";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../config";
import { doc, setDoc } from "firebase/firestore";
import "./style2.css";
import { useState } from "react";
import Loader from "./microcomponents/loader";
const Form = () => {
  const formRef = useRef();
  const [error1, seterror1] = useState(null);
  const [error2, seterror2] = useState(null);
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const [data, setData] = React.useState({});

  const handleclose = () => {
    setopen(false);
  };
  const update = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const storage = getStorage();

  let fileItem;
  let fileName;
  const getimg = (e) => {
    fileItem = e.target.files[0];
    fileName = fileItem.name;
  };
  const testsubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log(fileName);
  //   e.preventDefault();
  // }
  const submit = (e) => {
    setloading(true);
    e.preventDefault();

    const spaceRef = ref(storage, "proposal/" + fileName);
    console.log(fileItem);
    uploadBytes(spaceRef, fileItem)
      .then((snapshot) => {
        console.log("Uploaded proposal!");
        getDownloadURL(snapshot.ref).then(async (url) => {
          // setimg(url);

          try {
            var createpost = async () => {
              const id = data.name + data.email;

              // Add a new document in collection "teams"
              const adddoc = await setDoc(doc(db, "teams", id), {
                data,
                url: url,
              }).then(() => {
                const info = {
                  ...data,
                  url: url,
                };
                fetch(
                  // process.env.REACT_APP_API
                  "https://sheet.best/api/sheets/802a7ace-8d3b-4de4-a311-61928b2bfc31",
                  {
                    method: "POST",
                    mode: "cors",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(info),
                  }
                )
                  .then((r) => r.json())
                  .then((data) => {
                    // The response comes here
                    console.log(data);
                  })
                  .catch((err) => {
                    // Errors are reported there
                    console.log(err);
                    seterror1(err);
                  });
              });
            };
          } catch (err) {
            console.log("the error is" + err);
            seterror2(err);
          }
          createpost();
        });
      })
      .then(() => {
        setopen(true);
        formRef.current.reset();
        setloading(false);
      });
  };

  //   const spaceRef = ref(storage, "proposals/" + fileName);
  //    uploadBytes(spaceRef, fileItem).then((snapshot) => {
  //     console.log("Uploaded a proposal!");
  //     getDownloadURL(snapshot.ref).then(async (url) => {
  //       setData({
  //         ...data,
  //        "url" : url,
  //       });
  //       const id = data.name + data.email;

  //       // Add a new document in collection "teams"
  //       const adddoc = await setDoc(doc(db, "teams", id), {
  //         data,
  //       }).then(() => {
  //         fetch(
  //           "https://sheet.best/api/sheets/802a7ace-8d3b-4de4-a311-61928b2bfc31",
  //           {
  //             method: "POST",
  //             mode: "cors",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(data),
  //           }
  //         )
  //           .then((r) => r.json())
  //           .then((data) => {
  //             // The response comes here
  //             console.log(data);
  //           })
  //           .catch((error) => {
  //             // Errors are reported there
  //             console.log(error);
  //           });
  //       });
  //     });
  //   });
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      Id: 16,
      Name: "ack Doe",
      Age: 97,
      "Created at": new Date(),
    };

    // Add one line to the sheet
    fetch(
      "https://sheet.best/api/sheets/802a7ace-8d3b-4de4-a311-61928b2bfc31",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  };

  return (
    <div className="form flex flex-col pt-5  h-[100vh] w-full px-20 gap-10 ">
      <Loader open={open} />
      <p className="header  font-bold text-3xl md:text-5xl">
        Registration form for OSMHack2023
      </p>
      <p className="desc text-[24px] font-[500]">
        Please fill out the form below to participate in the OSMHack 2023. This
        form will collect essential information about you, your skills, and your
        project ideas. It will help us customize the hackathon experience to
        meet your needs. We appreciate your time and look forward to your active
        participation in this exciting event!
      </p>
      <form
        ref={formRef}
        className="applicantInfo w-full justify-start items-start pb-[5rem]"
        onSubmit={submit}
      >
        <p className="text-[34px] py-5">Applicant Information:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start  py-5">
          <TextField
            name="name"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            className="w-[45%]  max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            name="phone_number"
            label="Phone Number"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            name="address"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="College Name"
            name="college_name"
            variant="outlined"
            className="w-[91%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
        </div>
        <p className="text-[34px] py-5">Applicant Information:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start  py-5">
          <TextField
            id="outlined-basic"
            label="Team Name"
            name="team_name"
            variant="outlined"
            className="w-[75%] max-sm:w-[20rem] "
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="short_description"
            label="Short description of your team"
            className="w-[75%]  max-sm:w-[20rem]"
            rows={10}
            multiline={true}
            onChange={update}
            required={true}
          />
        </div>
        <p className="text-[34px] py-5">Member 1:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member1_name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member1_email"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member1_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member1_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member1_vegornonveg"
            label="Veg or Non-veg"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member1_size"
            label="T-shirt size(S/M/L)"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
        </div>
        <p className="text-[34px] py-5">Member 2:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member2_name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_email"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_vegornonveg"
            label="Veg or Non-veg"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_size"
            label="T-shirt size(S/M/L)"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
        </div>
        <p className=" text-[34px] py-5">Member 3:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member3_name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_email"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_vegornonveg"
            label="Veg or Non-veg"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_size"
            label="T-shirt size(S/M/L)"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
        </div>
        <p className=" text-[34px] py-5">Member 4:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member4_name"
            variant="outlined"
            onChange={update}
            className="w-[45%] max-sm:w-[20rem] "
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_email"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_vegornonveg"
            label="Veg or Non-veg"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_size"
            label="T-shirt size(S/M/L)"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            color="info"
          />
        </div>
        <p className="text-[34px] py-5">Project Information:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="project_name"
            label="Project Name"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="project_description"
            label="A short description of your project (minimum 50 words)..."
            className="w-[75%]  max-sm:w-[20rem]"
            rows={10}
            multiline={true}
            onChange={update}
            required={true}
          />

          <div className="proposal flex flex-col justify-start items-start w-full gap-5">
            <p>
              Also drop a file explaining the projects in detail. Include
              following points:{" "}
            </p>
            <ul className="flex flex-col justify-start items-start">
              <li>Project name </li>
              <li> Project description</li>
              <li>The problem you will solve with this project </li>
              <li>Platforms or technologies to be used </li>
              <li>
                How would you use OpenStreetMap in this project [Most Important
              </li>
              <li>
                Some flowchart or architecture of your project(product)
                [Optional]
              </li>
              <li>Previous hackathon experience of any member [Optional]</li>
            </ul>
            <input
              type="file"
              name="proposal"
              id="kj"
              onChange={(event) => getimg(event)}
              required={true}
            />

            <div className="flex gap-5 items-center justify-center">
              <input
                type="checkbox"
                name=""
                id=""
                required={true}
                className=""
              />
              <p>
                I agree to the terms and conditions and will follow code of
                conduct.
              </p>
            </div>
          </div>
        </div>

        <button
          className=" bg-btn w-max py-2 px-10 rounded-xl bg-dblue text-white text-2xl mt-5  active:translate-y-1 hover:bg-dgreen"
          // onClick={submit}
        >
          Submit
        </button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleclose}
        message={error1 === null || error2 === null ? "success" : "error"}
      />
    </div>
  );
};

export default Form;
