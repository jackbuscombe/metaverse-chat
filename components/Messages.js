import { useMoralis, useMoralisQuery } from "react-moralis";
import { useRef, useEffect } from "react";
import SendMessage from "./SendMessage";
import Message from "./Message";

// Only show messages from the last 15 minutes
const MINS_DURATION = 15;

function Messages() {
	const { user } = useMoralis();
	const endOfMessagesRef = useRef();
	const { data, loading, error } = useMoralisQuery("Messages", (query) => query.ascending("createdAt").greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * MINS_DURATION)), [], { live: true });

	useEffect(() => {
		endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
	}, [data]);
	return (
		<div className="pb-32">
			<div className="space-y-10 p-4">
				{data.map((message) => (
					<Message key={message.id} message={message} />
				))}
			</div>

			<div className="flex justify-center">
				<SendMessage endOfMessagesRef={endOfMessagesRef} />
			</div>

			<div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
				<p>You are up to date {user.getUsername()}! 🎉</p>
			</div>
		</div>
	);
}
export default Messages;
