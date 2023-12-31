import { useRouter } from 'next/router';
import Head from 'next/head';
import EventList from '@/components/events/event-list';
import EventsSearch from '@/components/events/events-search';
import { Fragment } from 'react';
import { getAllEvents } from '@/helpers/api-util';
import NewsletterRegistration from '@/components/input/newsletter-registration';

function AllEventsPage(props) {
    const router = useRouter();
    const { events } = props;

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta name="description" content="find a lot of great event that allow you to evolve..." />
            </Head>
            <EventList items={events} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents();
    return {
        props: {
            events: events,
        },
        revalidate: 60,
    };
}

export default AllEventsPage;
