// components/PageContent.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CustomTitle } from './Title';


const NavBlock = ({ href, src, alt, width, height }: any) => {
    return (
        <div className="w-full md:w-1/2">
            <Link href={href}>
                <div className="w-image align_center transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        layout="responsive"
                    />
                </div>
            </Link>
        </div>
    )
}

export const ProcatPoslugi = () => {
    return (
        <div className="">
            <div className="container mx-auto px-4">
                <CustomTitle>ПРОКАТ</CustomTitle>
                <div className="flex flex-col md:flex-row gap-8">
                    <NavBlock href={"/prokat"} src={"/section-second-prokat.png"} alt={"Прокат"} width={670} height={865} />
                    <div className="w-full md:w-1/2">
                        <Link href="/posluhy">
                            <div className="w-image align_center transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/section-second-poslugi.png"
                                    alt="Послуги"
                                    width={678}
                                    height={875}
                                    layout="responsive"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


