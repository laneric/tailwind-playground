import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1 className="text-5xl">
				<span className="underline decoration-red-500 decoration-solid decoration-3">Eric's</span> Secret Database
			</h1>
			<div className="overflow-y-auto text-justify max-w-[60vh] m-5 mb-10">
				<p className="">
					Only authorized users can enter here if they have a <span className="text-blue-500 after:content-['_↗'] underline">required key</span> that can be generated from deep inside his basement.
				</p>
			</div>
			<div>
				<a href="https://google.com"
					target="_blank"
					rel="noopener noreferrer"
					className="justify-center border transition-color hover:drop-shadow-xl border-blue-100 bg-blue-500 text-white px-10 py-3 rounded-xl mr-3">
					Enter Key
				</a>
				<a href="https://google.com"
					target="_blank"
					rel="noopener noreferrer"
					className="justify-center border transition-colors hover:border-neutral-400 hover:drop-shadow-xl border-gray-300 bg-gray-100 px-10 py-3 rounded-xl">
					Leave
				</a>
			</div>
		</main>
	)
}