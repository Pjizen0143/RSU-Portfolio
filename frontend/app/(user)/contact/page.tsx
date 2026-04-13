import ContactForm from "@/components/ui/sections/ContactForm";

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mx-6 mb-6">Contact Me</h1>
            <p className="text-center">Feel free to reach out!</p>
            <ContactForm />
        </div>
    );
}