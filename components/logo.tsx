import Link from 'next/link'

import { appConfig } from '@/lib/config/app'

export function Logo() {
    return (
        <Link href="/">
            <div className="flex items-center space-x-2">
                <div className="neo-brutal-sm bg-white text-black text-2xl">
                    {appConfig.emojiFavicon}
                </div>
                <h1 className="font-heading text-2xl font-extrabold uppercase">{appConfig.appName}</h1>
            </div>
        </Link>

    );
}