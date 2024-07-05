import { Container, createStyles, Title, Text, Flex, rem, Footer, Grid, Card, Image as MantineImage, Anchor, Button, ThemeIcon, Group, LoadingOverlay } from "@mantine/core";
import { useEffect, useState } from "react";
import SecureBootImage from "./images/secureboot.png";
import ReviewInsighImage from "./images/review_insight.png";
import FieldRImage from "../2020-2022/images/project images/fieldr image.png";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandMedium } from '@tabler/icons-react';

const useStyles = createStyles({
	container: {
		backgroundColor: '#25262B',
		textAlign: 'center',
	},
	name: {
		fontFamily: 'Wix Madefor Display, sans-serif',
		fontSize: rem(100)
	},
	jobTitle: {
		fontFamily: 'Wix Madefor Display, sans-serif',
		fontWeight: 'unset',
		fontSize: rem(50)
	},
	gridContainer: {
		marginLeft: rem(50),
		marginRight: rem(50)
	},
	gridTitle: {
		fontFamily: 'Wix Madefor Display, sans-serif',
		fontWeight: 'bold',
		fontSize: rem(20),
		marginTop: rem(10),
		marginBottom: rem(5)
	},
	grid1: {
		color: 'white',
		backgroundColor: '#087F5B',
	},
	grid2: {
		color: 'white',
		backgroundColor: '#364FC7'
	},
	grid3: {
		color: 'white',
		backgroundColor: '#339AF0'
	},
	emailText: {
		color: 'white',
		fontSize: rem(25),
		fontWeight: 'normal',
		marginTop: rem(40)
	},
	emailButton: {
		marginTop: rem(12),
		marginBottom: rem(25),
		color: '#373A40',
		backgroundColor: '#74C0FC',
		fontSize: rem(15),
		fontWeight: '600',
		'&: hover': { backgroundColor: '#25738F' }
	},
	aboutCard: {
		backgroundColor: '#74C0FC',
	},
	aboutText: {
		marginTop: rem(40),
		marginBottom: rem(40),
		width: '45%',
		color: '#373A40',
		fontSize: rem(20),
		fontWeight: 'unset'
	},
	footer: {
		backgroundColor: '#25738F',
		border: 'none',
	},
	socialIcons: {
		color: '#25738F',
		'&: hover': { backgroundColor: '#1971C2' }
	}
})

function Portfolio2023() {
	const { classes } = useStyles();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const imageList = [SecureBootImage, ReviewInsighImage, FieldRImage];
		preloadImaqges(imageList);
	}, [])

	const preloadImaqges = async (imageList) => {
		const promises = await imageList.map((image) => {
			return new Promise(function (resolve, reject) {
				const imageLoaded = new Image();
				imageLoaded.src = image;
				imageLoaded.onload = resolve();
				imageLoaded.onerror = reject();
			})
		})
		await Promise.all(promises);
		setLoading(false);
	}

	return (
		<Container className={classes.container} p="0" pt="xl" fluid>
			{isLoading ?  (
				<LoadingOverlay visible={isLoading}></LoadingOverlay>
			) : (
					<Flex direction="column">
						<Title className={classes.name} color="white">NAVOD ZOYSA</Title>
						<Title className={classes.jobTitle} color="blue">Software Engineer</Title>
						<Grid style={{ marginTop: rem(60) }} justify="center" align="center" m="0">
							<Grid.Col
								span={3}
							>
								<Anchor href="https://github.com/navodzoysa/SecureBoot" target="_blank">
									<Card className={classes.grid1}>
										<Card.Section>
											<MantineImage src={SecureBootImage} height="400" />
										</Card.Section>
										<Title className={classes.gridTitle}>SecureBoot</Title>
										<Text>A Secure Firmware Over-The-Air Update Framework for Constrained IoT Devices</Text>
									</Card>
								</Anchor>
							</Grid.Col>
							<Grid.Col
								span={3}
								className={classes.gridContainer}
							>
								<Anchor href="https://github.com/FallGuys-SDGP/Review-Insight" target="_blank">
									<Card className={classes.grid2}>
										<Card.Section>
											<MantineImage src={ReviewInsighImage} height="400" />
										</Card.Section>
										<Title className={classes.gridTitle}>Review Insight</Title>
										<Text>A web application to predict the reliability of online reviews using machine learning</Text>
									</Card>
								</Anchor>
							</Grid.Col>
							<Grid.Col
								span={3}
							>
								<Anchor href="https://www.fieldr.lk/indoor-cricket-app-digital-scoresheet/" target="_blank">
									<Card className={classes.grid3}>
										<Card.Section>
											<MantineImage src={FieldRImage} height="400" fit="contain" />
										</Card.Section>
										<Title className={classes.gridTitle}>FieldR - Indoor Cricket</Title>
										<Text>A mobile scoresheet application which gathers and records player data</Text>
									</Card>
								</Anchor>
							</Grid.Col>
						</Grid>
						<Flex justify="center" align="center" direction="column">
							<Text className={classes.emailText}>Let's build great things together.</Text>
							<Anchor
								href="mailto:navod.contact@gmail.com"
							>
								<Button radius="xs" size="lg" className={classes.emailButton}>SEND ME AN EMAIL</Button>
							</Anchor>
						</Flex>
						<Card className={classes.aboutCard} mt="xl">
							<Flex direction='column' justify='center' align='center'>
								<Text
									className={classes.aboutText}
								>
									I’m someone who is curious and passionate about problem solving and acquiring knowledge on new technologies to improve myself, as well as to inspire and help out others who can become a better version of themselves.
									<br /><br />
									I have 3+ years experience in the Unified Endpoint Management (UEM) and Mobile Device Management (MDM) domains and I’m currently leading the efforts that specializes in Windows device management at
									<span> </span>
										<Anchor href="https://entgra.io" target="_blank">Entgra</Anchor>
									<span></span>.
									<br /><br />
									Tools and technologies that I have hands-on experience include Java, JavaScript / TypeScript, .NET, React, MySQL, MongoDB, Grafana, Git, Docker, Amazon Web Services (AWS) and Microsoft Azure / Intune.
									<br /><br />
									In my spare time I play video games (currently <Anchor href="https://youtu.be/E3Huy2cdih0" target="_blank">Elden Ring</Anchor> and <Anchor href="https://youtu.be/rE7KTE28HrA" target="_blank">Helldivers 2</Anchor>), listen to music (favourite band is <Anchor href="https://youtu.be/tL25rbnvM4o" target="_blank">Nightwish</Anchor>) and watch The Lord of the Rings trilogy at least once every year :)
								</Text>
								<Group mb={rem(30)}>
									<Anchor href="mailto:navod.contact@gmail.com">
										<ThemeIcon radius="xl" size="xl" className={classes.socialIcons}>
											<IconMail color='white'></IconMail>
										</ThemeIcon>
									</Anchor>
									<Anchor href="https://github.com/navodzoysa" target="_blank">
										<ThemeIcon radius="xl" size="xl" className={classes.socialIcons}>
											<IconBrandGithub color='white'></IconBrandGithub>
										</ThemeIcon>
									</Anchor>
									<Anchor href="https://www.linkedin.com/in/navodzoysa" target="_blank">
										<ThemeIcon radius="xl" size="xl" className={classes.socialIcons}>
											<IconBrandLinkedin color='white'></IconBrandLinkedin >
										</ThemeIcon>
									</Anchor>
									<Anchor href="https://navodzoysa.medium.com/" target="_blank">
										<ThemeIcon radius="xl" size="xl" className={classes.socialIcons}>
											<IconBrandMedium color='white'></IconBrandMedium  >
										</ThemeIcon>
									</Anchor>
								</Group>
							</Flex>
						</Card>
						<Footer className={classes.footer} height={50} p="md">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								<Text color="white" size="sm" fluid>
									Navod Zoysa © {new Date().getFullYear()}. All rights reserverd.
								</Text>
							</div>
						</Footer>
					</Flex>
				)}
		</Container>
	);
}

export default Portfolio2023;
