import Footer from "@/components/Footer";
import Hero from '@/components/Hero'
import { Head } from "@inertiajs/react";

export default function Dashboard({isLogin, user}) {
    return (
        <> 
            <Head>
                <title>Dashboard</title>
            </Head>
            <Hero isLogin={isLogin} user={user}/>
            <Footer/>
        </>
    );
}
