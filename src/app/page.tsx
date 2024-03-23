import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>
                CS Assessment
            </h1>

            <h4>
                <Link
                    href="/users"
                >
                    See Users List
                </Link>
            </h4>
        </div>
    );
}

export default Home;
