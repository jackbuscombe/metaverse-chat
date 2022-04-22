import { useMoralis } from "react-moralis";
import { useRef } from "react";

function SendMessage({ endOfMessagesRef }) {
	const { user, Moralis } = useMoralis();
	const messageRef = useRef("");

	const sendMessage = (e) => {
		console.log("before prevent default");
		e.preventDefault();
		console.log("after prevent default");

		if (!messageRef) return;
		console.log("after empty ref");

		const Messages = Moralis.Object.extend("Messages");
		const messages = new Messages();
		console.log("after sizing moralis");
		console.log("messageRef", messageRef.current);

		messages
			.save({
				message: messageRef.current.value,
				username: user.getUsername(),
				ethAddress: user.get("ethAddress"),
			})
			.then(
				(message) => {
					console.log("Message Sent", message);
				},
				(error) => {
					console.log("there was error");
					console.log(error.message);
				}
			);

		console.log("made after save!");

		endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
		messageRef.current.value = "";
	};

	return (
		<form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
			<input ref={messageRef} className="flex-grow pr-5 outline-none bg-transparent text-white placeholder:gray-500 border-none" placeholder={`Enter a Message ${user.getUsername()}`} type="text" />
			<button onClick={sendMessage} type="submit" className="font-bold text-pink-500">
				Send
			</button>
		</form>
	);
}
export default SendMessage;
