import Button from "@/components/ui/button";
import Link from "next/link";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>
                <Link href="/"><Button>Home</Button></Link>
                <Link href="/login"><Button>Login</Button></Link>

            </div>
            {children}
        </div>
    );
}