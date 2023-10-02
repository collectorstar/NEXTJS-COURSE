import Head from 'next/head';
import Link from 'next/link';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';

function HomePage(props) {
    return (
        <div>
            <Head>
                <title>NextJs Events</title>
                <meta name="description" content="find a lot of great event that allow you to evolve..." />
            </Head>
            <EventList items={props.events} />
        </div>
    );
}

export async function getStaticProps(context) {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 1800,
    };
}

export default HomePage;
