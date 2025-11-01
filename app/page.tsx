import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/folder-card';

const WorkFolders = [
    { title: 'Camera Work', path: '/cam_work', style: 'top-[15%] right-[15%]' },
    { title: 'Shot on iPhone', path: '/work/iphone', style: 'top-[40%] right-[-1%]' },
    { title: 'Edit Work', path: '/work/edit', style: 'bottom-[7%] right-[7%]' },
    { title: 'Production Work', path: '/work/production', style: 'top-[30%] left-[10%]' },
    { title: 'A.D. Work', path: '/work/ad', style: 'bottom-[15%] left-[20%]' },
];

export default function HomePage() {
	return (
        <main className="min-h-screen bg-[#fbf4eb] flex items-center justify-center">
            {/* Image wrapper - move this freely without affecting folders */}
            <div className="relative w-full max-w-lg top-[-px] z-10">
                <Image
                    src="/home_wireframe.png"
                    alt="Home wireframe"
                    width={1600}
                    height={1000}
                    className="w-full h-auto rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]"
                    priority
                />
            </div>

            {/* Folders wrapper - fixed overlay, scattered using style positions */}
            <div className="fixed inset-0 pointer-events-none z-20">
                {WorkFolders.map((folder) => (
                    <div key={folder.path} className={`absolute ${folder.style} group flex flex-col items-center`}>
                        <Link
                            href={folder.path}
                            className="pointer-events-auto scale-[0.286] origin-top-left transition-transform transform group-hover:scale-[0.316] inline-block"
                            style={{ width: 'fit-content', height: 'fit-content' }}
                        >
                            <div className="w-40 h-28 md:w-56 md:h-36 relative">
                                <Card />
                            </div>
                        </Link>
                        <span className="pointer-events-none font-['Montserrat'] text-[12px] md:text-[30px] text-[#1d1306] mt-3 opacity-90 group-hover:opacity-100 transition-opacity text-center whitespace-nowrap">
                            {folder.title}
                        </span>
                    </div>
                ))}
            </div>

            {/* Stickers layer - separate container for free placement via CSS */}
            <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
                <Image src="/stickers/bread-removebg-preview.png" alt="bread sticker" width={150} height={150} className="sticker sticker-bread" />
                <Image src="/stickers/break-rules.png" alt="break rules sticker" width={240} height={240} className="sticker sticker-rules" />
				<Image src="/stickers/mug.png" alt="mug sticker" width={200} height={200} className="sticker sticker-mug" />
				<Image src="/stickers/camera.png" alt="camera sticker" width={170} height={170} className="sticker sticker-camera" />
            </div>
        </main>
	);
}
