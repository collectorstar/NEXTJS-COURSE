import Head from 'next/head';
import Link from 'next/link';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';
import NewsletterRegistration from '@/components/input/newsletter-registration';

function HomePage(props) {
    return (
        <div>
            <Head>
                <title>NextJs Events</title>
                <meta name="description" content="find a lot of great event that allow you to evolve..." />
            </Head>
            <NewsletterRegistration />
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
