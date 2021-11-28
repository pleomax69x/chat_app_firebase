import { Avatar, Button, Container, TextField } from "@mui/material";

import Grid from "@mui/material/Grid";
import { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const Chat = () => {
  // const { auth } = useContext(Context);
  const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setVaule] = useState("");
  // const [message, loading] = useCollectionData(
  //   db.collection("messages").orderBy("createdAt")
  // );
  // const [message, loading] = useCollectionData(
  //   collection(getFirestore(db), "hooks")
  // );

  // const querySnapshot = await getDocs(collection(db, "messages"));
  async function getMessages(db) {
    const messagesCol = collection(db, "messages");
    const citySnapshot = await getDocs(messagesCol);
    const messagesList = citySnapshot.docs.map((doc) => doc.data());
    return messagesList;
  }

  console.log(getMessages);
  // console.log(message);

  const sendMessage = async () => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // db.collection("messages").add({
    //   uid: user.uid,
    //   displayName: user.displayName,
    //   photoURL: user.photoURL,
    //   text: value,
    //   // createdAt: db.r TODO firebase.firestore.FieldValue.serverTimestamp()
    // });
    console.log(value);
    setVaule("");
  };

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50, marginTop: "20px" }}
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflow: "auto",
          }}
        >
          {/* {messages.map((message) => (
            <div
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: "5px",
              }}
            >
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName} </div>
              </Grid>
              <div>{message.text} </div>
            </div>
          ))} */}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            maxRows={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setVaule(e.target.value)}
          ></TextField>
          <Button onClick={sendMessage} variant={"outlined"}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
