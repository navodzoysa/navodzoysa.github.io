import { Container, createStyles, Divider, Flex, rem, Text, Timeline, Title } from "@mantine/core";
import { IconMedal, IconDeviceLaptop, IconTerminal2, IconBackpack } from '@tabler/icons-react';

const useStyles = createStyles({
	container: {
		backgroundColor: '#25262B',
		textAlign: 'center',
	},
	name: {
		fontFamily: 'Wix Madefor Display, sans-serif',
		fontSize: rem(70)
	},
	jobTitle: {
		fontFamily: 'Wix Madefor Display, sans-serif',
		fontWeight: 'unset',
		fontSize: rem(45)
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
	},
	title1: {
		color: 'white',
		fontSize: rem(20)
	}
})

function Portfolio2025() {
	const { classes } = useStyles();
	return (
		<Container size="responsive" className={classes.container}>
			<Flex
				direction={{base: 'column', sm: 'column'}}
      			gap={{ base: 'sm', sm: 'xs' }}
				justify={{ base: 'center',  sm: 'center' }}
				align={{ base: 'center', sm: 'center'}}
			>
				<Title className={classes.name} color="white">NAVOD ZOYSA</Title>
				<Title className={classes.jobTitle} color="blue">Software Engineer</Title>

				<Divider style={{width:'100%'}} my="sm" ></Divider>
				
				<div>
					<Timeline active={2} bulletSize={24} lineWidth={2} reverseActive>
						<Timeline.Item className={classes.title1} title="Senior Software Engineer"  lineVariant="dashed" bullet={<IconMedal size={12} />}>
							<Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
							<Text size="xs" mt={4}>2 hours ago</Text>
						</Timeline.Item>

						<Timeline.Item className={classes.title1} title="Software Engineer" bullet={<IconTerminal2 size={12} />}>
							<Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
							<Text size="xs" mt={4}>52 minutes ago</Text>
						</Timeline.Item>

						<Timeline.Item className={classes.title1} title="Associate Software Engineer" bullet={<IconDeviceLaptop size={12} />}>
							<Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
							<Text size="xs" mt={4}>34 minutes ago</Text>
						</Timeline.Item>

						<Timeline.Item className={classes.title1} title="Intern" bullet={<IconBackpack size={12} />}>
							<Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
							<Text size="xs" mt={4}>12 minutes ago</Text>
						</Timeline.Item>
					</Timeline>
				</div>
				

			</Flex>

			
			</Container>
	);
}

export default Portfolio2025;