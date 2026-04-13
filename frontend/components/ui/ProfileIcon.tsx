import Image from 'next/image'

export default function ProfileCircle() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                <Image
                    src="/IMG_5301.jpeg"
                    alt="Profile"
                    fill
                    sizes="(max-width: 768px) 48px, 64px"
                    className="object-cover object-top"
                    priority
                />
            </div>
        </div>
    )
}