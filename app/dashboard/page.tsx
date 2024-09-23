"use client"
import { useSession } from 'next-auth/react'
import StreamView from '@/app/components/StreamView'
import useRedirect from '../hooks/useRedirect';
import { useRouter } from 'next/navigation';


export default function Component() {
    const session = useSession();
    const redirect=useRedirect();
    const router=useRouter();
    
    try {
        if (!session.data?.user.id) {
            return (
                <h1>Please Log in....</h1>
            )
        }
        router.push("/dashboard");
        return <StreamView creatorId={session.data.user.id} playVideo={true} />
    } catch(e) {
        return null
    }
}

export const dynamic = 'auto'