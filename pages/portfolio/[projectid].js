import { useRouter } from 'next/router';

function PortfolioProjectPage() {
    const router = useRouter();

    router.pathname;

    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    );
}

export default PortfolioProjectPage;
