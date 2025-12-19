import { Suspense } from 'react';
import NewcomerContainer from "@/containers/NewcomerContainer";

export default function NewcomerPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NewcomerContainer />
        </Suspense>
    );
}
