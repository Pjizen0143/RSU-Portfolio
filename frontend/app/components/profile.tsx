import Image from 'next/image'

export default function ProfileCircle() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-15 h-15 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                <Image
                    src="/IMG_5301.jpeg"
                    alt="Profile"
                    fill
                    className="object-cover object-top"
                />
            </div>
        </div>
    )
}