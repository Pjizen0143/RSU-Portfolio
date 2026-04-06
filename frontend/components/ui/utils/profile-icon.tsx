import Image from 'next/image'

export default function ProfileCircle() {
    return (
        <div className="flex justify-center items-center">
            <div className="pl-7 relative w-15 h-15 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                <Image
                    src="/IMG_5301.jpeg"
                    alt="Profile"
                    fill
                    sizes='( max-width: 768px ) 100vw, 200px'
                    className="object-cover object-top"
                />
            </div>
        </div>
    )
}
