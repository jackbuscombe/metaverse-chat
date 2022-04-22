import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
	const { authenticate } = useMoralis();

	return (
		<div className="bg-black relative">
			<div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-6">
				<div className="p-6 bg-fuchsia-700 bg-opacity-70">
					<h1 className="text-5xl text-white font-extrabold font-mono">Welcome to the Metaverse</h1>
				</div>
				<div className="h-48 w-48 relative bg-black p-4 rounded-full bg-opacity-50 mb-6">
					<Image className="object-cover rounded-full" src={`https://avatars.dicebear.com/api/pixel-art/${(Math.random() + 1).toString(36).substring(7)}.svg`} layout="fill" />
				</div>
				<button onClick={authenticate} className="bg-yellow-300 rounded-lg p-5 px-12 font-bold animate-pulse">
					Click to Enter
				</button>
			</div>

			<div className="w-full h-screen">
				<Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover" />
			</div>
		</div>
	);
}
export default Login;
