import { SEND_MESSAGE } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useState } from "react";

export default function MessageForm() {
  const [formState, setFormState] = useState({
    receiverUsername: "",
    text: "",
  });

  const [sendMessage, { error }] = useMutation(SEND_MESSAGE);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendMessage({
      variables: {
        ...formState,
      },
    });

    setFormState({ receiverUsername: "", text: "" });
  };

  return (
    <form>
      <input
        name="receiverUsername"
        value={formState.receiverUsername}
        placeholder="Who are you talking to?"
        onChange={(e) =>
          setFormState({ ...formState, receiverUsername: e.target.value })
        }
      />
      <textarea
        name="text"
        value={formState.text}
        rows="7"
        placeholder="Your message here"
        onChange={(e) => setFormState({ ...formState, text: e.target.value })}
      ></textarea>
      <button onClick={handleSubmit}>Send</button>
    </form>
  );
}
