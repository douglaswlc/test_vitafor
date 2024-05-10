import { Link, Head } from '@inertiajs/react';
import vitaforLogo from '../../../public/image/vitafor-Photoroom.png'

export default function Welcome({ auth }) {

    return (
        <>
            <Head title="" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                <div className='flex lg:justify-center mb-10'>
                    <img src={vitaforLogo} alt="logo-vitafor" />
                </div>
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <div className='text-white flex lg:justify-center'>
                            This is a test project for Vitafor, using Laravel, Sqlite, Javascript, React and Bootstrap. To start, click Log In or Register
                        </div>
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <nav className="flex flex-1 lg:justify-center lg:col-start-2">
                                {auth.user ? (
                                    <Link
                                        href={route('home')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Home
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>
                    </div>
                </div>
            </div>
        </>
    );
}
