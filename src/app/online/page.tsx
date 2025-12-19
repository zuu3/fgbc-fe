import { Suspense } from 'react';
import OnlineContainer from "@/containers/OnlineContainer";

export default function OnlinePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OnlineContainer />
        </Suspense>
    );
}
