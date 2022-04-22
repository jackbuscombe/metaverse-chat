import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
	const { authenticate } = useMoralis();

	return (
		<div className="bg-black relative">
			<h1>I Am the Login</h1>
			<div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
				<div className="h-48 w-48 relative bg-black p-4 rounded-full bg-opacity-50 mb-6">
					<Image className="object-cover rounded-full" src={`https://avatars.dicebear.com/api/pixel-art/${(Math.random() + 1).toString(36).substring(7)}.svg`} layout="fill" />
				</div>
				<button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">
					Login to the metaverse
				</button>
			</div>

			<div className="w-full h-screen">
				<Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover" />
			</div>
		</div>
	);
}
export default Login;
