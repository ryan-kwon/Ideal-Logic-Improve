import Head from "next/head";
import Layout from "../app/layouts/layout";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Header from "../app/layouts/header";

import styles from "./styles/home.module.css";


const Home = () => {
	const router = useRouter();
	
	return(
		<Layout>
			{/* <head>
				<link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'></link>
			</head> */}
			<Header/>
			<div className={styles.home}>
				<div className={styles.content}>
					<div>clubs</div>

				</div>
			</div>
		</Layout>
	);
};

export default Home;