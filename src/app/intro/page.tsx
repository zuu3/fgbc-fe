import { Suspense } from 'react';
import IntroContainer from '@/containers/IntroContainer';

export default function IntroPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <IntroContainer />
        </Suspense>
    );
}
