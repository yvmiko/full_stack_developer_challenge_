import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { AppProps } from "next/app";

const queryClient = new QueryClient(); //initializing Tanstack Query for React and Data fetching

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</>
	);
}
